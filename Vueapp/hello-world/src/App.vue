<template>
  <div id="app">
    <div class="header">
        <img alt="Vue logo" src="./assets/logo2.png">
        <nav class="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="the-data">The data</router-link></li>
                <li><router-link to="scale">Interactive scale</router-link></li>
            </ul>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
