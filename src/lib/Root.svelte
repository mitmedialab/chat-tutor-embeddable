<script lang="ts">
    import OpenMe from "./OpenMe.svelte";
    import Window from "./Window.svelte";
    import type { Configuration } from "./types";
    import Draggable from "./utils/Draggable.svelte";

    export let configuration: Configuration;

    let opened = false;
    let dragger: Draggable;

    const tryToggle = async () => {
        if (dragger.moved()) return;
        opened = !opened;
    };
</script>

<Draggable bind:this={dragger}>
    {#if opened}
        <Window initialMessage="Welcome" on:close={tryToggle} {configuration} />
    {:else}
        <OpenMe on:click={tryToggle} />
    {/if}
</Draggable>
