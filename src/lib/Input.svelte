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

    /**
     * Removes all white spaces from the innerText.
     *
     * @returns {void}
     */
    function getRidOfWhiteSpacesInInnerText(): void {
        innerText = innerText.replace(/\s/g, "");
    }

    const send = () => {
        getRidOfWhiteSpacesInInnerText();
        dispatch("send", {
            message: innerText,
            onResponse: () => (messageReceived = true),
        });
        innerText = "";
        messageReceived = false;
    };

    /**
     * Returns a boolean indicating whether the innerText contains letters.
     *
     * @returns {boolean} Whether the innerText contains letters.
     */
    function innerTextContainsLetters(): boolean {
        return innerText.match(/[a-z]/i) !== null;
    }

    let canSend = false;
    $: canSend =
        Boolean(innerText) &&
        innerText.length > 0 &&
        messageReceived &&
        innerTextContainsLetters();

    function handleKeyDown(event: {
        key: string;
        shiftKey: any;
        preventDefault: () => void;
    }) {
        if (event.key === "Enter" && !event.shiftKey) {
            if (canSend) {
                send();
                // Prevent the default Enter key behavior (e.g., new line)
                event.preventDefault();
            } else if (event.key === "Enter" && event.shiftKey) {
                // Allow the default Enter key behavior with Shift key
            }
        }
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<div class="container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        contenteditable="true"
        class="input"
        bind:innerText
        on:keydown={handleKeyDown}
    ></div>
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
