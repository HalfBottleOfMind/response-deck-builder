<template>
    <div class="p-4">
        Type:
        <select class="text-gray-800 mr-4" v-model="type" v-on:change="fetch">
            <option value=""></option>
            <option value="card">card</option>
            <option value="hero">hero</option>
        </select>
        Cost:
        <input class="text-gray-800 mr-4" type="number" v-model="cost" v-on:input="fetch">
        Power:
        <input class="text-gray-800 mr-4" type="number" v-model="power" v-on:input="fetch">
        Keywords:
        <select class="text-gray-800 mr-4" v-model="keywords" v-on:change="fetch">
            <option value=""></option>
            <option value="command">command</option>
            <option value="trap">trap</option>
            <option value="amplification">amplification</option>
            <option value="unit">unit</option>
            <option value="location">location</option>
            <option value="spell">spell</option>
        </select>
        Color:
        <select class="text-gray-800" v-model="color" v-on:change="fetch">
            <option value=""></option>
            <option value="purple">purple</option>
            <option value="teal">teal</option>
            <option value="brown">brown</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
        </select>
    </div>
</template>

<script>
import { useCardsStore } from '../stores/CardsStore'

export default {
    data: function() {
        var type = ''
        var cost = ''
        var power = ''
        var keywords = ''
        var color = ''
        return {
            type,
            cost,
            power,
            keywords,
            color,
        }
    },
    methods: {
        fetch: function() {
            const cardsStore = useCardsStore()
            cardsStore.fetchCards({
                type: this.type,
                cost: this.cost,
                power: this.power,
                keywords: this.keywords,
                color: this.color,
            })
        }
    }
}
</script>