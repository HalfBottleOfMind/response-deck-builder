<template>
    <div class="w-full">
        <img :src="card.imgLink" class="rounded-3xl" />
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
                imgLink: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                }
            }
        },
    }
</script>