<template>
    <div v-for="card in deckStore.cards">
        {{ card.name }}
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
