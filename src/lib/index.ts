import type {ChatTutor, Configuration, DataMessage, Message} from "./types";

export const nowStamp = () => new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
});

export const addMessageToDB = (message: Message, {addEndpoint}: Configuration) => {
    message.time_created = message.timestamp;
    message.chat_k = "To set chat id";
    message.clear_number = "0";
    return fetch(addEndpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(message),
    });
};

const askChatTutor = async (messages: Message[], {model, collections, askEndpoint}: Configuration) => {
    const args: ChatTutor = {
        conversation: messages,
        selectedModel: model,
        multiple: true,
        credential_token: "none",
        collection: collections
    };

    /*
    if (this.restrictToDocument != undefined) {
        args.from_doc = this.restrictToDocument.metadata.doc
    }*/

    return fetch(askEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(args),
    });
};

const parseToDataMessage = (query: string) => query
    .split('\n\n')
    .filter(Boolean)
    .map(chunk => {
        try {
            return JSON.parse(chunk.split('data: ')[1]) as DataMessage;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    });

export const ask = async (
    messages: Message[],
    configuration: Configuration,
    add: (msg: Message) => Message,
    append: (content: string) => void,
) => {
    const response = await askChatTutor(messages, configuration);

    let context_documents: any[];
    const reader = response.body!.getReader();
    let message: Message;

    async function read(): Promise<void> {
        const stream = await reader.read();
        if (stream.done) return;

        const text = new TextDecoder().decode(stream.value);
        const data = parseToDataMessage(text);

        for (const item of data) {
            if (item === null) continue;
            const {message: {valid_docs, content}} = item;

            // if (valid_docs) context_documents = valid_docs;

            if (!message) message = add({
                sender: 'Assistant',
                timestamp: nowStamp(),
                role: 'assistant',
                content: content ?? '',
                valid_docs: context_documents,
            });
            else append(content ?? '');
        }
        await read();
    }

    await read();
    if (message!) addMessageToDB(message, configuration);
    else console.error("No message received from ChatTutor");
};