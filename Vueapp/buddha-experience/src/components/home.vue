<template>
  <div class="hello">
    <h1>De Boeddha ervaring!</h1>
    <div class="container">
        <div class="left">
            <img src="../assets/logo-icon.png" alt="" class="buddha-icon">
        </div>
        <div class="right">
            <infoblob
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:title="post.title"
                v-bind:text="post.text"
            ></infoblob>
        </div>
    </div>

  </div>
</template>

<script>
import infoblob from "./infoblob.vue"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    infoblob
  },
  data: function() {
    return {
        posts: [
            {
              id: 1,
              title: 'De boeddha',
              text: 'Praesent turpis nibh, bibendum at ultrices et, placerat sit amet dui. Nullam tempus, mi eget feugiat ultricies, augue elit dignissim sapien, sit amet faucibus leo dui a dui. Vivamus eget diam porta, commodo nulla sit amet, molestie magna. Suspendisse consectetur imperdiet suscipit. Proin eu erat dui. Aliquam est ante, aliquam id faucibus sed, ullamcorper faucibus lectus. Ut condimentum est vitae lorem elementum tincidunt. Aenean porttitor ullamcorper luctus.'
            },
            {
              id: 2,
              title: 'De tradidionele chineese boeddha',
              text: 'Curabitur sit amet pellentesque eros. Cras sit amet ultrices lacus, ut dignissim purus. Maecenas sollicitudin quam sed nisl interdum tincidunt. Nam ut nibh non ligula tincidunt luctus venenatis a nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at molestie metus. Nullam id quam libero. Praesent consectetur enim eget leo molestie ullamcorper.'
            },
            {
              id: 3,
              title: 'De Sakyamuni',
              text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            }
        ]
    }
  }
}
</script>

<style lang="scss"  scoped>
h1 {
    margin-top: 2em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@keyframes float {
	0% {
		transform: translate(-50%, -51%);
	}
	50% {
		transform: translate(-50%, -48%);
	}
	100% {
		transform: translate(-50%, -51%);
	}
}

.container {
    width:100%;
    text-align:left;
    height: calc(100vh - 302px);
    position: relative;

    .left {
        width:50%;
        display: inline-block;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;

        .buddha-icon {
            transform: translate(-50%, -51%);
            position: absolute;
            left: 50%;
            top: 50%;
            animation: float 6s ease-in-out infinite;
        }
    }
    .right {
        width:50%;
        height: 100%;
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        overflow-y:scroll;
    }
}
</style>
