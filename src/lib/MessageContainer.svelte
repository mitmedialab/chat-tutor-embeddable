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

    let lastMessage: Message;
    let container: HTMLDivElement;
    let bottom: HTMLDivElement;

    const scroll = () => container.scrollTo(0, bottom.offsetTop);

    export const getAll = () => $messageStore;
    export const getLast = () => $messageStore[$messageStore.length - 1];

    export const addMessage = (message: MessageType) => {
        addMessageToStore(message);
        scroll();
        return message;
    };

    export const updateLastMessageContent = (content: string) => {
        updateLastMsgInStore(content);
        scroll();
    };

    export const appendLastMessageContent = (content: string) => {
        appendContentToLastMsgInStore(content);
        scroll();
    };

    export const clearMessages = () => {
        resetStore();
        scroll();
    };
</script>

<div class="container" bind:this={container}>
    {#each $messageStore as { role, content, timestamp }, index}
        {#key index}
            {#if index === $messageStore.length - 1}
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
