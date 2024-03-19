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

let local;
try {
    local = JSON.parse(localStorage.getItem(key));
} catch (e) {
    local = [];
    localStorage.setItem(key, JSON.stringify([]));
}

export const basket = writable(local);

basket.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
});