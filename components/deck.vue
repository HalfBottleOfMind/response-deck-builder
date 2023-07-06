<template>
    <div class="sticky top-0">
        <div v-for="card in deckStore.cards">
            <button class="border rounded px-4 bg-gray-700" v-on:click="deckStore.removeCard(card)">-</button>
            <button class="border rounded px-4 bg-gray-700" v-on:click="deckStore.addCard(card)">+</button>
            <span class="pl-2 text-center">{{ card.name }}</span>
        </div>
    </div>
</template>

<script>
import { useDeckStore } from '../stores/DeckStore';

export default {
    setup() {
        const deckStore = useDeckStore()

        return {
            deckStore
        }
    }
}
</script>
