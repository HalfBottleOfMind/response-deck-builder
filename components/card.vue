<template>
    <div class="w-full">
        <img :src="imgLink" class="rounded-3xl" />
        <div class="text-xl flex justify-center">
            <div class="cursor-pointer">-</div>
            <span class="px-8 text-center">{{ card.name }}</span>
            <div class="cursor-pointer">+</div>
        </div>
    </div>
</template>

<script>
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

        return {
            imgLink,
        }
    }
}
</script>