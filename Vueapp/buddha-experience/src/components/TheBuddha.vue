<template>
    <div class="hello">
        <h1>Welke soorten boeddha's zijn er eigenlijk?</h1>
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
        data: function() {
            return {
                apiData: null,
                posts: [
                    {
                      id: 1,
                      title: 'De tradidionele chineese boeddha',
                      text: 'Praesent turpis nibh, bibendum at ultrices et, placerat sit amet dui. Nullam tempus, mi eget feugiat ultricies, augue elit dignissim sapien, sit amet faucibus leo dui a dui. Vivamus eget diam porta, commodo nulla sit amet, molestie magna. Suspendisse consectetur imperdiet suscipit. Proin eu erat dui. Aliquam est ante, aliquam id faucibus sed, ullamcorper faucibus lectus. Ut condimentum est vitae lorem elementum tincidunt. Aenean porttitor ullamcorper luctus.'
                    },
                    {
                      id: 2,
                      title: 'De Sakyamuni',
                      text: 'Curabitur sit amet pellentesque eros. Cras sit amet ultrices lacus, ut dignissim purus. Maecenas sollicitudin quam sed nisl interdum tincidunt. Nam ut nibh non ligula tincidunt luctus venenatis a nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at molestie metus. Nullam id quam libero. Praesent consectetur enim eget leo molestie ullamcorper.'
                    },
                    {
                      id: 3,
                      title: 'Dharmachakra mudra',
                      text: 'Vestibulum consectetur aliquet dui ut feugiat. In vehicula velit tellus, hendrerit vestibulum neque sagittis sed. Aliquam pulvinar sagittis mattis. Integer non mi et lectus semper luctus iaculis at leo. Sed suscipit justo ac tellus fermentum posuere. Cras fermentum ultricies metus, sed lobortis ex ullamcorper at. Mauris eget imperdiet magna. Donec vulputate et metus non convallis. Fusce quis leo quis nibh interdum condimentum non ac nulla. Sed aliquet, ligula et varius varius, quam mauris vestibulum erat, a volutpat eros eros vitae nisl. Aenean placerat aliquet luctus. Donec sagittis ante et ligula pellentesque, id auctor risus scelerisque. Aliquam lobortis lacus in eros imperdiet tempor. Sed aliquet aliquam urna sit amet egestas. Nam odio est, porttitor sit amet diam et, bibendum gravida risus.'
                    }
                ]
            }
        },
        components: {
          infoblob
        },
        mounted: function() {
            var url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-11/sparql";
            //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
            var query = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            PREFIX edm: <http://www.europeana.eu/schemas/edm/>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            SELECT * WHERE {
               VALUES ?type {"boeddhabeeld" "Boeddhabeeld" "Buddha"} .
               ?cho dc:type ?type .
               ?cho dc:title ?title .
               ?cho dct:extent ?extent .
               ?cho edm:isShownBy ?img .
           } limit 50
            `
            runQuery(url, query)
            var self = this
            function runQuery(url, query){
                var res;
                //Test if the endpoint is up and print result to page
                // (you can improve this script by making the next part of this function wait for a succesful result)
                fetch(url)
                // Call the url with the query attached, output data
                fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
                .then(res => res.json())
                .then(json => {
                // console.log(json.results.bindings)

                // Replace "http" in the img url to "https"
                var fetchedData = json.results.bindings
                fetchedData.forEach(function(i){
                    i.img.value = i.img.value.replace("http", "https")
                    i.extent.value = i.extent.value.replace(".", ",")

                    if (i.extent.value.startsWith("H") || i.extent.value.startsWith("h")){
                        var splittedString = i.extent.value.split(" ");
                        if (splittedString[1].includes("x") || splittedString[1].includes("X")){
                            i.extent.value = splittedString[1].split("x")[0]
                        } else {
                            i.extent.value = splittedString[1]
                        }
                    } else if (i.extent.value.includes("×")) {
                        var splittedString = i.extent.value.split(" ");
                        i.extent.value = splittedString[0]
                    }
                })

                // Assign de api data aan apiData
                self.apiData = fetchedData
                })
            }
        }
    }
</script>

<style lang="scss"  scoped>
h1 {
    margin-top: 2em;
}

.data-block li{
    list-style-type:none;
    display: inline-block;
    width:30%;
    margin: 1%;
    background: #ADA8B6;
    padding: 5px;
    img {
        width: 50%;
    }
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
