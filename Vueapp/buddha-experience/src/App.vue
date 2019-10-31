<template>
  <div id="app">
    <div class="header">
        <img alt="Vue logo" class="logo" src="./assets/logo.png">
        <nav class="main-nav">
            <ul>
                <li v-for="i in links"><router-link v-bind:to="i.link">{{ i.title }}</router-link></li>
            </ul>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
      return {
          links: [
            {
                id: 1,
                title: 'Home',
                link: '/'
            },
            {
                id: 2,
                title: 'The data',
                link: 'the-data'
            },
            {
                id: 3,
                title: 'Welke boeddhas zijn er?',
                link: 'boeddha'
            },
            {
                id: 4,
                title: 'Interactieve scale',
                link: 'scale'
            }
          ]
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
