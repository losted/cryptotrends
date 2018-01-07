<template>
    <el-container> 
        <el-main>
            <div id="app">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="change_page">
                    <el-menu-item index="/" :route="{name:'CryptoTop100'}">Home</el-menu-item>
                    <el-menu-item index="/xrp-trends" :route="{name:'xrp-trends'}">XRP Trends</el-menu-item>
                    <el-menu-item index="/info" :route="{name:'info'}">Info</el-menu-item>
                </el-menu>
                <div class="line"></div>
                <router-view/>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'app',
    data: function () {
        return {
            activeIndex: null
        }
    },
    created: function () {
        this.select_page(this.$route.path)
    },
    methods: {
        change_page (key, keyPath) {
            this.activeIndex = key
            this.$router.push({ path: key })
        },
        select_page (id) {
            this.activeIndex = id
        }
    }
}
</script>

<style>
h1 { font-size: 2em; }
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-bottom: 100px;
}
#app {
    text-align: center;
}
.line {
    margin-bottom: 60px;
}
</style>
