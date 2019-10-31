<template>
  <div class="hello">
    <h1>Welkom bij de Boeddha ervaring!</h1>
    <div class="container">
        <div class="left">
            <img src="../assets/logo-icon.png" alt="" class="buddha-icon">
        </div>
        <div class="right">
            <div class="inner-content">
                <h3>Als we het over Boeddha's hebben denken we vaak aan de boeddha's die in een tuin of museum staan, leuke decoratie toch?</h3>
                <p>Buiten het feit dat een boeddhabeeld kan dienen als een prima decoratie, heeft een boeddha een diepere betekenis. Maar welke boeddha's zijn er en wat betekent welke soort boeddha?</p>
                <vue-typed-js :strings="[ typedText[1].title, typedText[2].title, typedText[3].title, typedText[4].title, typedText[5].title, typedText[5].title, typedText[6].title, typedText[7].title, typedText[8].title, typedText[9].title]" :loop="true" :backDelay="1000" :backSpeed="50" >
                    <p>De verschillende boeddha's die we kennen zijn:<br/> <span class="typing"></span></p>
                </vue-typed-js>
                <h4>Wil je meer weten over de verschillende boeddha's? Of jezelf vergelijken met de boeddha's klik dan op een van de knoppen hieronder.</h4>
                <div class="knoppen">
                    <ul>
                        <li><router-link to="boeddha" class="page-link">Bekijk boeddha soorten</router-link></li>
                        <li><router-link to="scale" class="page-link">Vergelijk jezelf met boeddha's</router-link></li>
                    </ul>
                </div>
            </div>
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
        typedText: [
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
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et variu varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 4,
                title: 'Dharmachakra mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 5,
                title: 'Bhumisparsha mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 6,
                title: 'Varada mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 7,
                title: 'Dhyana mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 8,
                title: 'Abhaya mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 9,
                title: 'Vitarka mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            },
            {
                id: 10,
                title: 'Namaskara mudra',
                text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
            }

        ],
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

.typing {
    font-weight: 600;
    padding-top: 20px;
    font-size: 20px;
    display: inline-block;
    min-height: 74px;
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
        .inner-content{
            display: block;
            position: absolute;
            top: 40%;
            left: 50%;
            width: 90%;
            transform: translate(-50%, -50%)
        }
    }
}
</style>
