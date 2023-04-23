const fetchDta = document.getElementById("fetching-dta");
const mainmap = document.getElementById("main-map");
const weatherfun = document.getElementById("weather-data");
const API_KEY = '5c06d1661544ed61f7057d378d08189e';
// function to get location
//setting up location in local storage 
function getCurrentPosition(position)
{
   showPosition(position);

   // Now setting up longitude and latitude with local storage
   let lati = localStorage.getItem("lat");
   let longi = localStorage.getItem("long");
   mainmap.innerHTML = `<br><br>
   <div class = "main-inner">
   <div class = "lm-sec">
   <div class = "Lat"><span>Lat: ${lati}</span></div>
   <div class = "Lat"><span>Long: ${longi}</span></div>
   </div>
   <div class="main-map-div">
    <iframe src="https://maps.google.com/maps?q=${lati},${longi}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
   </div>`
   weatherData(lati , longi)
}
// function for showing weather data
function weatherData(lati , longi)
{
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${longi}&exclude=hourly,minutely&appid=${API_KEY}`)
    .then(resp => resp.json()).then((data) => {console.log(data)});
    weatherfun.innerHTML=` <div class="www">
    <h2>Weather Data</h2>
    <div class="ww">
        <p>Location: </p>
       
       <div class="w">
        <p>
            Lat:  
        </p>
        <p>Long:  </p>
       </div> 
       <p>TimeZone: </p> 
       <p>Wind Speed: </p>
       <p>Pressure:  </p>
       <p>Humidity:  </p>
       <p>wind Direction:  </p>
       <p>UV Index: </p>
<p>Feels Like:</p>
 </div>
</div>
`
    // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${longi}&exclude=hourly&appid=${API_KEY}`)
    // .then(resp => resp.json()).then((data) => {console.log(data)})
}
function showPosition(position) {
    localStorage.setItem("long",position.coords.longitude);
    localStorage.setItem("lat",position.coords.latitude);
}
function getLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}
 
fetchDta.addEventListener("click" , () => {
getLocation()
})