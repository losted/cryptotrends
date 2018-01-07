<template>
    <div>
        <h1>{{ title }}</h1>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <p style="line-height: 2.8em; text-align: center;">{{ text }}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: 'Info',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue porta ex, ac consectetur lacus venenatis a. Morbi dictum nisl sed erat tincidunt, a egestas eros pharetra.',
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