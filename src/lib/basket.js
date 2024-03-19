import { writable} from "svelte/store";

/*
    Create a basket store that saves information to local storage
    Information should be saved as the following
    {
        id: string,
        name: string,
        quantity: number,
    }
 */
const key = "basket";

const local = JSON.parse(localStorage.getItem(key)) || [];

export const basket = writable(local);

basket.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
});