<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import anime from 'animejs'


  export default {
    name: 'App',
    methods: {
      animate () {
        anime({
          targets: '#move',
          rotate: 250,
          loop: true,
          autoplay: true
        })
      }

    },
    created () {
      anime({
        targets: '#move',
        translateX: [
          { value: 100, duration: 1200 },
          { value: 0, duration: 800 }
        ],
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 2000,
        loop: true
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
