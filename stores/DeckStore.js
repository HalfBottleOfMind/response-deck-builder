import { defineStore } from "pinia";

export const useDeckStore = defineStore('DeckStore', {
    state: () => {
        return {
            cards: [],
        }
    },
    getters: {
        getCards(state) {
            return state.cards.sort((a, b) => 
                a.id - b.id
            )
        }
    },
    actions: {
        addCard(card) {
            this.cards.push(card)
        },
        removeCard(card) {
            for (let i = 0; i < this.cards.length; i++) {
                if (card.id == this.cards[i].id) {
                    this.cards.splice(i, 1)
                    break
                }
            }
        }
    }
})