<template>
    <div id="app">
        <transition name="fade">
            <router-view/>
        </transition>
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
        font-family: "futura-pt",sans-serif;
        overflow-x: hidden;
    }

    .logo {
        height: 600px;
    }

    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    /* Rules for using icons as black on a light background. */
    .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
    .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

    /* Rules for using icons as white on a dark background. */
    .material-icons.md-light { color: rgba(255, 255, 255, 1); }
    .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>