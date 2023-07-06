<script>
import { useCardsStore } from '../stores/CardsStore';
export default {
    setup() {
        const cards = useCardsStore()
        cards.fetchCards()
        return {
            cards: cards,
        }
    }
}
</script>

<template>
    <div class="grid gap-4 grid-cols-6 px-4">
        <Card v-for="card in cards.getCards" :key="card.id" :card="card" />
    </div>
</template>
