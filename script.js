const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7b5d2b4ef6msh7f935104e943699p19b47fjsn172c058a2da4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getWeather(city) {

    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset



            console.log(response)
        })
        .catch(err => console.error(err));

}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})


getWeather("Jalandhar")

city1.addEventListener("click", (delhi)=>{
    delhi.preventDefault();
    getWeather("Delhi")
})
city3.addEventListener("click", (jalandhar)=>{
    jalandhar.preventDefault();
    getWeather("Jalandhar")
})

function guide() {
    alert("You can either use the dropdown menu either the search bar to know the Weather condition of a location. 😀😀")
}