<template>
  <div id="app">
    <TopBar></TopBar>
    <div class="container">
      <router-view></router-view>
    </div> <!-- /container -->

    <BottomBar></BottomBar>
  </div>
</template>

<script>
  import TopBar from "@/components/TopBar"
  import BottomBar from "@/components/BottomBar"
  export default {
    name: 'App',
    components: {
      TopBar,
      BottomBar
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }

  body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  }

  a {
    color: #00B7FF;
  }
</style>
