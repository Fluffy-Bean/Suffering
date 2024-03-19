<script>
    import { link } from 'svelte-spa-router';
    import FormEmail from '../elements/FormEmail.svelte';

    export let params = {};  // URL parameters
</script>

<main>
    <h1>Form</h1>
    <p><a href="/" use:link>Home</a></p>

    <hr>

    <FormEmail emailValue={params.name} />
</main>

<style lang="less">
</style>