<script lang="ts">
    import Message from "./Message.svelte";
    import type { Message as MessageType } from "./types";

    export let messages: MessageType[] = [];

    let lastMessage: Message;
    let bottom: HTMLDivElement;

    const scroll = () => bottom.scrollIntoView();

    export const getAll = () => messages;
    export const getLast = () => messages[messages.length - 1];

    export const addMessage = (message: MessageType) => {
        messages.push(message);
        messages = messages;
        scroll();
        return message;
    };

    export const updateLastMessageContent = (content: string) => {
        messages[messages.length - 1].content = content;
        lastMessage?.update(content);
        scroll();
    };

    export const appendLastMessageContent = (content: string) => {
        getLast().content += content;
        lastMessage?.append(content);
        scroll();
    };

    export const clearMessages = () => {
        messages = [];
        scroll();
    };
</script>

<div>
    {#each messages as { role, content, timestamp }, index}
        {#key index}
            {#if index === messages.length - 1}
                <Message {role} {content} {timestamp} bind:this={lastMessage} />
            {:else}
                <Message {role} {content} {timestamp} />
            {/if}
        {/key}
    {/each}
    <div bind:this={bottom}></div>
</div>

<style>
    div {
        max-height: 100%;
        overflow-y: scroll;
    }
</style>
