<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import anime from 'animejs'

    export default {
        name: 'App'
    }
</script>

<style>
    body {
        background-color: #282828;
        padding: 0;
        margin: 0;
    }

    .logo {
        height: 600px;
    }
</style>