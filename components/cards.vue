<template>
    <div class="grid gap-4 grid-cols-4 px-4">
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
        <Card :card="card" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    imgLink: "/img/cards/1.jpg",
                    name: "Some card name"
                }
            }
        }
    }
</script>