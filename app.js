
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let tempera = document.getElementById("temp");
let weather = document.getElementById("weather");
let weaimg = document.getElementById("weatherimg");
let humid= document.getElementById("humidity");
let windspeed = document.getElementById("wind");
let weat = document.getElementById("weat");
let cityname = document.getElementById("cityname")
let error = document.querySelector(".errorimg")



btn.addEventListener("click",function(){
     currentwea(inp.value)
})

async function currentwea(city){
   let api_key ="adc2d8e05063a25d9a8879c131efafca"

   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
   let data = await fetch(`${url}`) .then(function(res){
    
   return res.json()
})
console.log(data);

// if (weat.style.display === "none" || weat.style.display === "") {
//   weat.style.display = "flex";
// }
// errorimg.style.display= "none";
// weat.style.display= "flex";


//   if (data.cod === "404") {
//       // ❌ City Not Found: show error image, hide weather
//       error.style.display = "block";
//       weat.style.display = "none";
//       return;
//    }

//    // ✅ City Found: show weather, hide error
//    error.style.display = "none";
//    weat.style.display = "flex";


tempera.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
weather.innerHTML =`${data.weather[0].description}`
humid.innerHTML = `${data.main.humidity}%`
windspeed.innerHTML=`${data.wind.speed}km/H`
cityname.innerHTML = `${data.name}`

switch (data.weather[0].main.toLowerCase()) {
   case "clouds":
      weaimg.src ="image/clouds-98536_1280.webp";
      break;
 case "sunny":
      weaimg.src ="image/sunny.png";
      break;
      case "rainy":
      weaimg.src ="image/rainy.webp";
      break;
      case "smoke":
      weaimg.src ="image/smoke.jpeg";
      break;
      case "snow":
      weaimg.src ="image/snow.jpeg";
      break;
       case "risky":
      weaimg.src ="image/risky.jpeg";
      break;
 case "clear":
      weaimg.src ="image/clear.webp";
      break;
      
   default:
      break;
}

}

//   let lat = data.coord.lat;
//    let lon = data.coord.lon;

// let api_key = "adc2d8e05063a25d9a8879c131efafca";
// let urldate = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;

// fetch(urldate).then(function(res){
//    return res.json()
// }).then(function(data){
//     data
// })
//  console.log("Forecast Data:", data);
// let currentDate = new Date();
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = days[currentDate.getDay()];
// let date = currentDate.getDate();
// let month = currentDate.toLocaleString("default", { month: "short" });

// document.querySelector(".forcast-item h4").innerHTML = `${day}, ${date} ${month}`;
