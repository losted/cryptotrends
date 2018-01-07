<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: 'XRP Trends',
            last_updated: null,
            activeIndex: null
        }
    },
    created: function () {
        // alert(this.activeIndex)
    }
}
</script>

<style scoped>

</style>