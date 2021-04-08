const button = document.querySelector("#imageGeneratorButton")
const image =  document.querySelector("#dogImage")
const input = document.querySelector("#input")
const url = "https://dog.ceo/api/breeds/image/random"
const button2 = document.querySelector("#weatherGeneratorButton")
const button3 = document.querySelector("#jokeGeneratorButton")
const URL = "https://goweather.herokuapp.com/weather/"
const weatherBox = document.querySelector("#leftweatherBox")

const temperature = document.querySelector("#temperature")
const wind = document.querySelector("#wind")
const description = document.querySelector("#description")

const day = document.querySelectorAll(".day")
const temperatures = document.querySelectorAll(".temperature")
const winds = document.querySelectorAll(".wind")

const joke = document.querySelector("#joke")

let backgroundDescription = ""
let weatherArray = []

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
    fetch(URL + input.value )
    .then(function(date){
            return date.json();
    })
    .then (function(obj){
        console.log(obj)
        backgroundDescription =  obj.description
        temperature.innerText = "Temperature : " + obj.temperature
        wind.innerText = "Wind : " + obj.wind
        description.innerText = "Description : " + obj.description
        weatherArray = obj.forecast
        Chnagebackground()
        carsolDetails()
    });
}

button3.addEventListener("click", jokebuttonPressed)
function jokebuttonPressed(){

    fetch("https://icanhazdadjoke.com/", { headers: {'Accept': 'application/json'} })
    .then(function(date){
        if(date.ok){
           return date.json(); 
       }
    })
    .then(function(obj){
        joke.innerText = obj.joke
    });
}

function Chnagebackground(){
    weatherBox.style.backgroundSize =  "cover"
    weatherBox.style.backgroundRepeat = "no-repeat"   

    if (backgroundDescription === "Sunny"){
        weatherBox.style.backgroundImage = "url('https://media1.popsugar-assets.com/files/thumbor/Dg_HP7xhCDAA9lY1S3NCsIIx58M/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/12/789/n/1922441/f9cc294c34316a54_GettyImages-941097280/i/sunny-day.jpg')" 
    }
    else if (backgroundDescription === "Partly cloudy"){
        weatherBox.style.backgroundImage = "url('https://images.all-free-download.com/images/graphicthumb/clouds_cloudiness_forward_238873.jpg')"
    }
    else{
        weatherBox.style.backgroundImage = "url('https://youpress.org.uk/wp-content/uploads/2019/07/rainy--e1562882808676.jpg')"
    }
}

function carsolDetails(){
    for (const each in weatherArray){
        day[each].innerHTML = "Day : " + weatherArray[each].day
        temperatures[each].innerHTML = "Temperature : " + weatherArray[each].temperature
        winds[each].innerHTML = "Wind : " + weatherArray[each].wind
    }

}

