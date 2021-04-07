const button = document.querySelector("#imageGeneratorButton")
const image =  document.querySelector("#dogImage")
const input = document.querySelector("#input")
const url = "https://dog.ceo/api/breeds/image/random"
const button2 = document.querySelector("#weatherGeneratorButton")
const URL = "https://goweather.herokuapp.com/weather/"

button.addEventListener("click", buttonPressed)
function buttonPressed(){
    fetch(url)
    .then(function(date){
            return date.json();
    })
    .then (function(obj){
        image.src = obj.message
    });
}

button2.addEventListener("click", weatherbuttonPressed)
function weatherbuttonPressed(){
    fetch(URL + input )
    .then(function(date){
            return date.json();
    })
    .then (function(obj){
        console.log(obj.forecast[0].day)
    });





}

