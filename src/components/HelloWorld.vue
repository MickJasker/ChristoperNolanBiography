<template>
    <div>
        <div class="page">
            <div class="block"/>
            <button v-on:click="animate">Animate!</button>
        </div>

    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'HelloWorld',

        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                width: 500
            }
        },
        methods: {
            animate: function() {
                anime({
                    targets: '.block',
                    duration: 1500,
                    easing: 'easeInSine',
                    elasticity: 400,
                    width: this.width
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .block {
        background-color: aqua;
        height: 100px;
        width: 100px;
    }
</style>