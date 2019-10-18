<template>
    <div class="hello">
      <h1>The data</h1>
      <p>
        Thsi is a table containing all the data used in the chart page.

      </p>
      <p>
          <ul class="data-block">
          <li v-for="item in apiData">
            <a v-bind:href="''+item.cho.value+''">{{ item.cho.value }}</a>
            <h2> {{ item.title.value }} </h2>
            <img :src="''+item.img.value+''" alt="">
            <p> Height: {{ item.extent.value }} cm</p>
          </li>
        </ul>
      </p>
      <!-- <p>
          <strong>The data</strong>
          {{ apiData }}
      </p> -->
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                apiData: null
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

</style>
