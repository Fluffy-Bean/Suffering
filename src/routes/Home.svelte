<script>
    import { link } from 'svelte-spa-router';
    export let params = {};  // URL parameters
</script>

<main>
    <h1>Home Page</h1>
    <p>
        <a href="/forms/gwagwa" use:link>Forms</a>
    </p>
</main>

<style lang="less">
</style>