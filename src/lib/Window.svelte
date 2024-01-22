<script lang="ts" context="module">
    import { type Events as InputEvents } from "./Input.svelte";

    export type Events = {
        close: undefined;
    };
</script>

<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import Header from "./Header.svelte";
    import Input from "./Input.svelte";
    import MessageContainer from "./MessageContainer.svelte";
    import { addMessageToDB, ask, nowStamp } from ".";
    import { scale } from "svelte/transition";
    import type { Configuration } from "./types";

    export let initialMessage: string;
    export let configuration: Configuration;

    const dispatch = createEventDispatcher<Events>();

    let messages: MessageContainer;

    const send = async (event: CustomEvent<InputEvents["send"]>) => {
        const fromStudent = messages.addMessage({
            sender: "Student",
            role: "user",
            content: event.detail.message,
            timestamp: nowStamp(),
        });

        await addMessageToDB(fromStudent, configuration);
        await ask(
            messages.getAll(),
            configuration,
            (message) => messages.addMessage(message),
            (content) => messages.appendLastMessageContent(content),
        );

        event.detail.onResponse();
    };

    onMount(() => {
        if (initialMessage)
            messages.addMessage({
                sender: "Assistant",
                role: "assistant",
                content: initialMessage,
                timestamp: nowStamp(),
            });
    });
</script>

<div class="container" in:scale={{ duration: 100 }}>
    <div class="row">
        <div>
            <Header on:click={() => dispatch("close")} />
        </div>
        <div>
            <MessageContainer bind:this={messages} />
        </div>
    </div>
    <div class="row">
        <Input on:send={send} />
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        max-height: 99vh;
    }
    .row {
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #ddd 0 -3px 0 inset;
    }
</style>
