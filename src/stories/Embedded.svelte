<script>
    import Window from "../lib/Window.svelte";
    import { dummyConfiguration } from "./utils";
</script>

<div>
    <Window initialMessage="Welcome" configuration={dummyConfiguration} />
</div>
