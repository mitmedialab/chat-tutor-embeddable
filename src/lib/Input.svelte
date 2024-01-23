<script lang="ts" context="module">
    export type Events = {
        send: {
            message: string;
            onResponse: () => void;
        };
    };
</script>

<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<Events>();

    let innerText = "";
    let messageReceived = true;

    const send = () => {
        dispatch("send", {
            message: innerText,
            onResponse: () => (messageReceived = true),
        });
        innerText = "";
        messageReceived = false;
    };

    let canSend = false;
    $: canSend = Boolean(innerText) && innerText.length > 0 && messageReceived;
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<div class="container">
    <div contenteditable="true" class="input" bind:innerText></div>
    <button class="send" disabled={!canSend} on:click={send}>
        <span class="material-symbols-outlined">send</span>
    </button>
    <button class="clear">
        <span class="material-symbols-outlined">delete_forever</span>
    </button>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");

    .container {
        color: black;
        font-family: "Rethink Sans", sans-serif;
        display: flex;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
    }

    span {
        font-size: 15px !important;
        padding: 0 !important;
        margin: 0 !important;
        vertical-align: middle;
    }

    .container * {
        padding: 10px;
        border: none;
        font-size: 1em;
        border-radius: 10px;
    }

    .input {
        flex: 1;
        background: #ddd;
        color: "black";
    }

    .send {
        margin-left: 10px;
        background: rgb(140, 0, 255);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: filter 0.23s;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        transition: background-color 0.23s;
    }

    .send:hover {
        filter: saturate(180%);
    }

    .send:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .clear {
        border: none;
        margin-left: 10px;
        background: #ddd;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.23s;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
    }

    .clear:hover {
        background-color: black;
        color: #ddd;
    }

    .clear:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>
