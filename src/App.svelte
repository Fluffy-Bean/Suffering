<script>
    import Router from 'svelte-spa-router';

    import Home from "./routes/Home.svelte";
    import ForOhFor from "./routes/ForOhFor.svelte";
    import Form from "./routes/Form.svelte";

    const routes = {
        '/': Home,
        '/forms/:name': Form,
        '*': ForOhFor
    };
</script>

<Router {routes} />
