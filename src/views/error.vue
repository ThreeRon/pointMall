<template>
    <div class="error-page">
        <p class="msg"> 请求失败</p>
        <router-link to="/" class="btn-primary">返回</router-link>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
    .error-page {
        text-align: center;
        padding: 25px;
        .msg {
        	margin-bottom: 20px;
        }
    }
</style>
