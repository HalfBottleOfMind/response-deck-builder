import axios from "axios";
import { defineStore } from "pinia";

export const useCardsStore = defineStore('CardsStore', {
    state: () => {
        return {
            cards: []
        }
    },
    getters: {
        getCards(state) {
            return state.cards
        }
    },
    actions: {
        async fetchCards(input) {            
            try {
                const data = await axios.get("https://response-cards.hbom.ru/api/cards", {params: input})
                this.cards = data.data
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})