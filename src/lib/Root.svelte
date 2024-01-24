<script lang="ts">
    import OpenMe from "./OpenMe.svelte";
    import Window from "./Window.svelte";
    import type { Configuration } from "./types";
    import Draggable from "./utils/Draggable.svelte";

    export let configuration: Configuration;

    let opened = false;
    let dragger: Draggable;
    let messageToUser: string = "Welcome";

    const tryToggle = async () => {
        if (dragger.moved()) return;
        opened = !opened;
    };

    const openWindow = async () => {
        if (dragger.moved()) return;
        opened = true;
    };

    const closeWindow = async () => {
        if (dragger.moved()) return;
        opened = false;
        messageToUser = "";
    };
</script>

<Draggable bind:this={dragger}>
    {#if opened}
        <Window
            initialMessage={messageToUser}
            on:close={closeWindow}
            {configuration}
        />
    {:else}
        <OpenMe on:click={openWindow} />
    {/if}
</Draggable>
