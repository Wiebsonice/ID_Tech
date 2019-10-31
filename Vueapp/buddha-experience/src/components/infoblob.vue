<template>
      <div class="outer-blob">
          <div class="content-blob">
              <h2> {{ title }}</h2>
              <p>{{ text }}</p>
              <h3>Lees het verhaal!</h3>
          </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['title', 'id', 'text'],
  data: function() {
      return {
          // title: String,
          // nmbr: Number
      }
  }
}
</script>

<style lang="scss"  scoped>
    .outer-blob {
        height: calc(100vh - 302px);
        // border-bottom: solid red 2px;
        // border-top: solid red 2px;
        position:relative;

        .content-blob {
            position: absolute;
            background:#ADA8B6;
            border-radius: 20px;
            padding: 10px 40px;
            width:90%;
            max-width:500px;
            left: 50%;
            top: 48%;
            transform:translate(-50%, -50%);
        }
    }
</style>
