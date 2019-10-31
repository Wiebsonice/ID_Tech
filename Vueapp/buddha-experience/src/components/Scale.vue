<template>
    <div class="hello">
      <h1>Jij en de boeddha's!</h1>
      <p>
        Hoelang ben jij?
        Ik ben <input type="number" min="73" max="200" name="lenght" value="73" v-model="lenght" v-on:change="changed"> cm
      </p>
      <p>
          <div class="outer-scale"  ref="scale">
              <ul class="data-block">
              <li v-for="item in apiDataSorted" v-bind:style="{ 'height': 'calc(' + item.extent.value + '/ ' + lenght + ' * 636px)' }" v-on:click="selected = item.cho.value" v-bind:class="{active:item.cho.value == selected}">
                <!-- <a v-bind:href="''+item.cho.value+''">{{ item.cho.value }}</a> -->
                <!-- <h2> {{ item.title.value }} </h2> -->
                <img :src="''+item.img.value+''" alt="">
                <p class="height">{{ item.title.value }} </br>
                    Lengte: {{ item.extent.value }}  cm
                </p>
              </li>
              <li>
                <img src="../assets/person.png" alt="">
            </li>
            </ul>
          </div>
      </p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                apiData: [],
                apiDataSorted: [],
                selected: undefined,
                lenght: 73
            }
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
           } limit 20
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
                    i.extent.value = i.extent.value.replace(",", ".")

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


                var sortedData = fetchedData

                // Sort hier de API data op lengte
                sortedData.sort(function(a, b) {
                    return parseFloat(a.extent.value) - parseFloat(b.extent.value);
                });

                // Assign de api data aan apiData

                // console.log("sorted :" + sortedData)

                self.apiDataSorted = sortedData;
                self.apiData = fetchedData;
                // console.log(self.apiDataSorted)
                })
            }
        },
        methods: {
            changed: function () {
              this.$refs.scale.classList.add("show-scale")
            }
        }
    }
</script>

<style lang="scss"  scoped>

.outer-scale {
    width:100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    height: calc(100vh - 280px);
    background: url(../assets/scale.png);
    background-size: auto 2000px;
    background-position: bottom;
    opacity:1;
    transition: ease opacity .5s;

    &.show-scale {
        opacity:1;
    }
}

.data-block {
    width:auto;
    padding-right: 200px;
    height: 640px;
    text-align: left;
    margin-top:0;
    margin-bottom: 0 !important;
    display: flex;
    align-items: flex-end;

    li {
        list-style-type:none;
        display: inline-block;
        position:relative;
        width:auto;
        margin:0 .5%;
        // background: #ADA8B6;
        // padding: 5px;

        &:last-of-type {
            margin-right:100px;
        }
        img {
            height: 100%;
            position: relative;
            z-index:5;
            transition: ease box-shadow .5s;
            -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0);
            -moz-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0);
            box-shadow: 0px 3px 4px 0px rgba(0,0,0,0);
        }
        .height {
            position: absolute;
            top:2px;
            box-sizing: border-box;
            margin:0 !important;
            left:0;
            width:0;
            font-size:10pt;
            height:100%;
            border-top: 2px solid black;
            z-index:1;
            transition: ease left .5s;
            overflow: hidden;
            text-align: right;
            background: rgba(255,255,255,.8)

        }
        &.active {
            z-index:10;

            .height {
                left:100%;
                width: 150px;
            }
            img {
                z-index:9;
                -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
            }
        }

    }
}

</style>
