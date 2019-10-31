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
                      text: 'De dikbuik Boeddha komt van oorsprong uit China en wordt in het chinees ook wel Pu-Tai genoemd (in het Japans Hotei). Volgens de legende was Pu-Tai-Ho-Shang een Chinese zenmeester (monnik) die zeer gelukkig en zonder zorgen door China rondtrok om het Boeddhisme te verspreiden. Hij was hierbij vaak omringd door kinderen en werd geëerd om zijn enorme blijdschap en gulheid, wat hem ook zijn bijnaam Happy Boeddha opleverde. Na zijn dood werd hij vereerd als volksheld, vruchtbaarheidsgod en brenger van geluk.'
                    },
                    {
                      id: 2,
                      title: 'De Sakyamuni',
                      text: 'De dunne Boeddha komt van oorsprong uit India en wordt ook wel Gautama, Sakyamuni of historische Boeddha genoemd. Volgens de aloude legende was Siddhartha Gautama een rijke prins die alles had wat zijn hartje begeerde. Later kwam hij in aanraking met het leed van de wereld en besloot dat dit anders moest. Hij ruilde zijn leven vol welvaart in voor een minimalistisch bestaan. Mediterend onder een bodhiboom begon hij na te denken over de oorzaak van het lijden in de wereld. Na een tijd zag hij in wat de oorzaak was en vanaf dat moment bereikte Gautama zijn verlichting. Gautama werd de Boeddha en hiermee de stichter van het Boeddhisme.'
                    },
                    {
                      id: 3,
                      title: 'Dharmachakra mudra',
                      text: 'De Dharmachakra mudra wordt ook wel het gebaar van de prediker genoemd. Hierbij zitten de handen op de hoogte van de borst en zijn de wijsvingers en duimtoppen van iedere hand tegen elkaar gedrukt. De vingers aan beide handen vormen nu een kleine cirkel. Vervolgens raakt de middelvinger van de linkerhand de plaats waar de duim en wijsvinger van de rechterhand elkaar raken. Deze houding symboliseert het moment waarop Boeddha zijn rede(s) hielt en zijn leer uiteenzette. De leer van Boeddha word ook wel het rad van de leer genoemd. Het rad van de leer, of ookwel Darmawiel, heeft acht spaken die staan voor het achtvoudige pad naar verlichting in het Boeddhisme. Eenieder die deze leer wil leren moet zelf op pad gaan en de waarheid ontdekken. De kern van de leer is dit achtvoudige pad en de vier edele waarheden. Deze houding verwijst dus naar het moment dat het Boeddhisme is begonnen. Deze houding zie je bij Gautama Boeddha op het moment van de eerste prediking (Sakyamuni) en bij de hemelse Boeddha (Vairochana) van het Centrum van het heelal.'
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
