<script lang="ts">
    export let right = 100;
    export let bottom = 100;

    let moving = false;
    let previous: { left: number; bottom: number };

    export const distance = () =>
        Math.sqrt(
            Math.pow(right - previous.left, 2) +
                Math.pow(bottom - previous.bottom, 2),
        );

    const moveThreshold = 2;
    export const moved = () => distance() >= moveThreshold;

    function onMouseDown() {
        moving = true;
        previous = { left: right, bottom: bottom };
    }

    function onMouseMove(e: MouseEvent) {
        if (moving) {
            right -= e.movementX;
            bottom -= e.movementY;
        }
    }

    function onMouseUp() {
        moving = false;
    }
</script>

<section
    on:mousedown={onMouseDown}
    style="right: {right}px; bottom: {bottom}px;"
    role="button"
    tabindex="0"
>
    <slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    section {
        user-select: none;
        cursor: move;
        position: absolute;
    }

    section:focus {
        outline: none;
    }
</style>
