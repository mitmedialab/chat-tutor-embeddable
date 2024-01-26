<script lang="ts">
    import Message from "./Message.svelte";
    import type { Message as MessageType } from "./types";
    import {
        messageStore,
        addMessageToStore,
        updateLastMsgInStore,
        appendContentToLastMsgInStore,
        resetStore,
    } from "./messageStore";

    export let messages: MessageType[] = [];

    let lastMessage: Message;
    let container: HTMLDivElement;
    let bottom: HTMLDivElement;

    const scroll = () => container.scrollTo(0, bottom.offsetTop);

    export const getAll = () => messages;
    export const getLast = () => messages[messages.length - 1];

    export const addMessage = (message: MessageType) => {
        addMessageToStore(message);
        // messages.push(message);
        // messages = messages;
        scroll();
        return message;
    };

    export const updateLastMessageContent = (content: string) => {
        updateLastMsgInStore(content);
        // messages[messages.length - 1].content = content;
        // lastMessage?.update(content);
        scroll();
    };

    export const appendLastMessageContent = (content: string) => {
        appendContentToLastMsgInStore(content);
        // getLast().content += content;
        // lastMessage?.append(content);
        scroll();
    };

    export const clearMessages = () => {
        resetStore();
        // messages = [];
        scroll();
    };
</script>

<div class="container" bind:this={container}>
    {#each $messageStore as { role, content, timestamp }, index}
        {#key index}
            {#if index === messages.length - 1}
                <Message
                    {role}
                    {content}
                    {timestamp}
                    isLast={true}
                    bind:this={lastMessage}
                />
            {:else}
                <Message {role} {content} {timestamp} />
            {/if}
        {/key}
    {/each}
    <div bind:this={bottom}></div>
</div>

<style>
    .container {
        max-height: 100%;
        overflow-y: scroll;
    }
</style>
