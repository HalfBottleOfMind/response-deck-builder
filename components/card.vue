<template>
    <div class="w-full">
        <img :src="imgLink" class="rounded-3xl" />
        <div class="text-xl flex justify-center">
            <button class="border rounded px-4 bg-gray-700" v-on:click="deckStore.removeCard(card)">-</button>
            <span class="px-8 text-center">{{ card.name }}</span>
            <button class="border rounded px-4 bg-gray-700" v-on:click="deckStore.addCard(card)">+</button>
        </div>
    </div>
</template>

<script>
import { useDeckStore } from '../stores/DeckStore'

export default {
    props: {
        card: {
            name: {
                type: String,
                required: true
            }
        }
    },
    setup(props) {
        const imgLink = '/img/cards/' + props.card.name + '.jpg'

        const deckStore = useDeckStore()

        return {
            imgLink,
            deckStore,
        }
    }
}
</script>