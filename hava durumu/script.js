const url ="http://api.openweathermap.org/data/2.5/"
key = "your apiKey";
const searcher= document.getElementById("arama");

const setQuery=(e)=>{
    if (e.keyCode=="13") 
        getResult(searcher.value)
        
    }
    const getResult=(cityName = "maraş")=>{
        let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
        console.log(query)
        fetch(query)
        .then(
            weather =>{
return weather.json()
            }).then(displayResult)

    }
    const displayResult=(result)=>{
        let city =document.querySelector(".sehir")
        city.innerHTML= `${result.name},${result.sys.country}`
        let temp =document.getElementById("temp")
        temp.innerHTML=`${Math.floor(result.main.temp)}°c`
        let hava = document.querySelector(".weather")
        hava.innerHTML= result.weather[0].description;
        let minmax=document.querySelector(".minmax")
        minmax.innerHTML=`(${Math.floor(result.main.temp_min)}°c)-(${Math.floor(result.main.temp_max)}°c)`
    }
   
searcher.addEventListener("keypress",setQuery);

