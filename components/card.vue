<template>
    <div class="w-full">
        <img :src="imgLink" class="rounded-3xl" />
        <div class="text-xl flex justify-center">
            <div class="cursor-pointer" v-on:click="deckStore.removeCard(card)">-</div>
            <span class="px-8 text-center">{{ card.name }}</span>
            <div class="cursor-pointer" v-on:click="deckStore.addCard(card)">+</div>
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
        const imgLink = '/img/cards/' + props.card.id + '.jpg'

        const deckStore = useDeckStore()

        return {
            imgLink,
            deckStore,
        }
    }
}
</script>