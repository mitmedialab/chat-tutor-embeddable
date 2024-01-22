<script lang="ts" context="module">
    import { LoremIpsum } from "lorem-ipsum";

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    const getParagraphStack = () => [...lorem.generateParagraphs(1)].reverse();

    type TestCase = (container: MessageContainer) => Promise<void>;
    const cases = {
        chatting: async (container) => {
            await untilTimePassed(100);
            container.addMessage({
                role: "assistant",
                content: "Hello, I'm the assistant!",
                timestamp: new Date().toLocaleTimeString(),
            });
            await untilTimePassed(1000);
            container.addMessage({
                role: "user",
                content: "Hello, I'm the user!",
                timestamp: new Date().toLocaleTimeString(),
            });
            await untilTimePassed(1000);
            container.updateLastMessageContent(
                "Hello, I'm the user! I'm updating my message!",
            );
            const stack = getParagraphStack();
            while (stack.length > 0) {
                await untilTimePassed(10);
                container.appendLastMessageContent(stack.pop());
            }
            await untilTimePassed(1000);
            container.addMessage({
                role: "assistant",
                content: "Hello, I'm the assistant!",
                timestamp: new Date().toLocaleTimeString(),
            });
        },
        scroll: async (container) => {
            let messageCount = 0;
            let isAssistant = true;
            while (messageCount < 10) {
                await untilTimePassed(100);
                const stack = getParagraphStack();
                container.addMessage({
                    role: isAssistant ? "assistant" : "user",
                    content: stack.pop(),
                    timestamp: new Date().toLocaleTimeString(),
                });
                while (stack.length > 0) {
                    await untilTimePassed(10);
                    container.appendLastMessageContent(stack.pop());
                }
                messageCount++;
                isAssistant = !isAssistant;
            }
        },
    } satisfies Record<string, TestCase>;

    export type Case = keyof typeof cases;
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import MessageContainer from "../lib/MessageContainer.svelte";
    import { untilTimePassed } from "./utils";

    export let testcase: Case;

    let container: MessageContainer;

    onMount(() => cases[testcase](container));

    $: if (container) {
        container?.clearMessages();
        cases[testcase](container);
    }
</script>

<div>
    <MessageContainer bind:this={container}></MessageContainer>
</div>

<style>
    div {
        border: 1px solid black;
        height: 500px;
    }
</style>
