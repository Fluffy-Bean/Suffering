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
let local;

// Aurgh
try {
    local = JSON.parse(localStorage.getItem("basket"));
} catch (e) {
    local = [];
}

export const basket = writable(local);

basket.subscribe((value) => {
    localStorage.setItem("basket", JSON.stringify(value));
});