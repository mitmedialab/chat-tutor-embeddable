<script lang="ts">
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<div class="container">
    <div class="title">Chat Tutor</div>
    <div class="close">
        <button style:border="1px solid red" on:click>
            <span class="material-symbols-outlined" style:color="red">
                close
            </span>
        </button>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");

    .container {
        font-family: "Rethink Sans", sans-serif;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-bottom: 2px solid lightgray;
    }
    button {
        float: right;
        align-self: self-end;
        border-radius: 10%;
    }

    button:hover {
        background-color: lightgray;
    }
</style>
