let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function weather(apiLink, cityName) {
    let data = await fetch(apiLink + cityName + "&appid=87b0b3db79197977b32e6b0c8819181e");
    let weatherdata = await data.json();

    //selecting & updating temperature
    let temperature = document.querySelector("#temperature");
    temperature.textContent = Math.floor(weatherdata.main.temp) + "°C";

    //selecting & updating city name
    let city = document.querySelector(".City-Name")
    city.textContent = weatherdata.name
    city.style.fontSize = "3rem"
    city.style.fontWeight = "900"

    // selecting & changing wind speed, humidity & condition
    let all_p_tags = document.querySelectorAll("p")   //first manipulating windSpeed
    all_p_tags[2].textContent = Math.floor(weatherdata.wind.speed) + " KM/H"

    let wCondition = document.querySelector(".Weater-condition img")  //Changing weather condition and it's icon based on the weather condition

    if (weatherdata.weather[0].main === "Clear") {
        wCondition.src = "icons-and-images/sun.png"
        all_p_tags[3].textContent = weatherdata.weather[0].main
    }

    else if (weatherdata.weather[0].main === "Clouds") {
        wCondition.src = "icons-and-images/cloud.png"
        all_p_tags[3].textContent = weatherdata.weather[0].main
    }

    else if (weatherdata.weather[0].main === "Haze") {
        wCondition.src = "icons-and-images/haze.png"
        all_p_tags[3].textContent = weatherdata.weather[0].main
    }
    else if (weatherdata.weather[0].main === "Rainy") {
        wCondition.src = "icons-and-images/rain.png"
        all_p_tags[3].textContent = weatherdata.weather[0].main
    }
    else {
        wCondition.src = "icons-and-images/moderate.png"
        all_p_tags[3].textContent = "Moderate"

    }

    //NOw changing Humidity as per conditions
    document.querySelector(".Humidity p").textContent = weatherdata.main.humidity
    

}

let searchInput = document.querySelector(".search input")
let btn = document.querySelector(".search button")


btn.addEventListener("click", ()=> {
    let searchValue = searchInput.value
    weather(api, searchValue);
})


