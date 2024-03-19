<script>
    import Router from 'svelte-spa-router';
    import Home from "./routes/Home.svelte";
    import Form from "./routes/Form.svelte";
    import Basket from "./routes/Basket.svelte";
    import ForOhFor from "./routes/ForOhFor.svelte";


    const routes = {
        '/': Home,
        '/forms/:name': Form,
        '/basket': Basket,
        '*': ForOhFor
    };


</script>

<Router {routes} />
