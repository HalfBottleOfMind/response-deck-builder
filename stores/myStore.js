import { defineStore } from "pinia"

export const useMyStore = defineStore("myStore", {
    state: () => {
        return {
            counter: 0
        }
    }
})