<script lang="ts">
    import type { Message } from "./types";
    import SvelteMarkdown from "svelte-markdown";
    import { slide } from "svelte/transition";

    let container: HTMLDivElement;

    /**
     *
     */
    export let role: Message["role"];
    /**
     *
     */
    export let content: Message["content"];
    /**
     *
     */
    export let timestamp: Message["timestamp"] | undefined = undefined;

    export let isLast: boolean = false;

    $: name = role === "assistant" ? "Assistant" : "You";

    export const update = (_content: string) => (content = _content);
    export const append = (_content: string) => (content += _content);
</script>

<div
    bind:this={container}
    class="container"
    class:round-bottom={isLast}
    style:background-color={role === "assistant" ? "Gainsboro" : "white"}
    in:slide={{ duration: 300 }}
>
    <div class="title">
        <div style:grid-row={1}>{name}</div>
        {#if timestamp}
            <div class="stamp" style:grid-row={1}>{timestamp}</div>
        {/if}
    </div>
    <div class="content">
        <SvelteMarkdown source={content} />
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");

    .container {
        color: black;
        font-family: "Rethink Sans", sans-serif;
        display: grid;
        grid-template-rows: 1rem [title-start] 1rem [title-end] 0.5rem [content-start] auto [content-end] 0.5rem;
        grid-template-columns: 2rem [title-start content-start] 1fr [content-end title-end] 2rem;
        align-items: start;
        justify-items: left;
        background-color: lightgray;
    }

    .round-bottom {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .title {
        grid-area: title;
        width: 100%;
        font-size: 1.1rem;
        font-weight: bold;
        display: grid;
        align-items: center;
        justify-items: stretch;
    }

    .content {
        grid-area: content;
        font-size: 1rem;
    }

    .stamp {
        font-size: 0.75rem;
        text-align: right;
    }
</style>
