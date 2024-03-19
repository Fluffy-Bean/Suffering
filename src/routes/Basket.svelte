<script>
    import { link } from 'svelte-spa-router';
    import { basket } from "../lib/basket.js";

    const addItem = () => {
        let id = window.crypto.getRandomValues(new Uint32Array(1))[0];

        basket.update(items => {
            items.push({
                id: id,
                name: 'New item ' + id,
                quantity: 1,
            });
            return items;
        });
    }

    const removeItem = (e) => {
        let id = e.target.dataset.id;
        for (let i = 0; i < $basket.length; i++) {
            if (i == id) {
                basket.update(items => {
                    items.splice(i, 1);
                    return items;
                });
                break;
            }
        }
    }

    const clearBasket = () => {
        basket.set([]);
    }

    export let params = {};  // URL parameters
</script>

<main>
    <h1>Basket</h1>
    <p><a href="/" use:link>Home</a></p>

    <hr>

    {#if $basket.length === 0}
        <p>No items in basket</p>
    {:else}
        <p>Here are the items in your basket:</p>
        <ul class="basket">
            {#each $basket as item, i}
                <li class="basket-item">
                    <input type="text" bind:value={item.name}>
                    <input type="number" bind:value={item.quantity}>
                    <button on:click={removeItem} data-id={i}>Remove</button>
                </li>
            {/each}
        </ul>
    {/if}

    <button on:click={addItem}>Add item</button>
    <button on:click={clearBasket}>Clear basket</button>
</main>

<style>
    .basket {
        list-style: none;
        padding: 0;
    }
    .basket-item {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px 0;

        display: flex;
        flex-direction: row;
    }
    .basket-item input {
        margin: 0 10px 0 0;
        border: 1px solid #ccc;
        padding: 5px;
        width: 200px;
    }
    .basket-item button {
        margin: 0;
        padding: 5px;
        border: 1px solid #ccc;
        background-color: #ccc;
    }
</style>