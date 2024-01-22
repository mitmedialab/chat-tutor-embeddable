export type Message = {
    sender: 'Student' | 'Assistant',
    timestamp: string,
    role: 'user' | 'assistant',
    content: string,
    delay?: Number,
    valid_docs?: any[],
    chat_k?: string,
    clear_number?: string,
    time_created?: string,
};

export type ChatTutor = {
    conversation: Message[],
    selectedModel: "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-8k",
    multiple: boolean,
    collection?: string[]
    from_doc?: string
    credential_token?: string
}

export type Configuration = {
    collections: string[],
    askEndpoint: string,
    addEndpoint: string,
    model: ChatTutor["selectedModel"],
}

export type DataMessage = {
    message: Message,
}
