import {writable} from "svelte/store";
import type {Message as MessageType} from "./types";
import {nowStamp} from ".";

const welcomeMsg = "Welcome";

const initialWelcome: MessageType = {
    sender: "Assistant",
    role: "assistant",
    content: welcomeMsg,
    timestamp: nowStamp(),
};

export const messageStore = writable<MessageType[]>([]);

export const addMessageToStore = (message: MessageType) => {
    messageStore.update((messages) => [...messages, message]);
};

export const updateLastMsgInStore = (content: string) => {
    messageStore.update((messages) => {
        messages[messages.length - 1].content = content;
        return messages;
    });
};

export const appendContentToLastMsgInStore = (content: string) => {
    messageStore.update((messages) => {
        messages[messages.length - 1].content += content;
        return messages;
    });
};

export const resetStore = () => {
    messageStore.set([initialWelcome]);
};
