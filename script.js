var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

var stringcity = localStorage.getItem("stringcity");


$.getJSON(
"https://api.openweathermap.org/data/2.5/weather?q="+stringcity+"&units=metric&APPID=3dc59109656f4b52f86b82864bb37109",
    function(data)
        {   var cityname = data.name;
            document.getElementById("loc").innerHTML = cityname;

            var condition = data.weather[0].main;
            document.getElementById("cond").innerHTML = condition;

            var feels = data.main.temp;
            feels += " &#176C";
            document.getElementById("feel").innerHTML = feels;

            var acttemp = data.main.feels_like;
            acttemp += " &#176C";
            document.getElementById("acttemp").innerHTML = acttemp;

            var mintemp = data.main.temp_min;
            mintemp += " &#176C";
            document.getElementById("mintemp").innerHTML = mintemp;

            var maxtemp = data.main.temp_max;
            maxtemp += " &#176C";
            document.getElementById("maxtemp").innerHTML = maxtemp;

            var wind = "Wind Speed: "+data.wind.speed+" Km/hr";
            document.getElementById("wind").innerHTML = wind;

            var winddir = "Wind Direction: "+data.wind.deg+"&#176";
            document.getElementById("winddir").innerHTML = winddir;

            var cloudiness = data.clouds.all;
            cloudiness += " %";
            document.getElementById("cloudiness").innerHTML = cloudiness;

            var humidity = data.main.humidity;
            humidity += " %";
            document.getElementById("humidity").innerHTML = humidity;

            var pressure = data.main.pressure;
            pressure += " bar";

            document.getElementById("pressure").innerHTML = pressure;

            if (condition =="Haze" || condition =="Mist" || condition =="Smoke" || condition =="Dust" || condition =="Fog" || condition =="Ash")
              $(".weather").css("background-image", "url('./images/haze.jpg')");

            else if (condition =="Rain" || condition =="Drizzle" || condition =="Thunderstorm" || condition =="Tornado" || condition =="Hurricane")
              $(".weather").css("background-image","url('./images/rain.jpg')");

            else if (condition =="Clear")
              $(".weather").css("background-image","url('./images/sunny-day.jpg')");

            else if (condition =="Clouds")
              $(".weather").css("background-image","url('./images/clouds.jpg')");

            else if (condition =="Cold" || condition =="Snow")
              $(".weather").css("background-image","url('./images/cold.jpg')");

            var tempact = parseFloat(feels);
              if (tempact <= 15)
              $(".feels").css("background-image","url('./images/tempcard/cold.jpg')");
              else if (tempact >=15 && tempact <=30)
              $(".feels").css("background-image","url('./images/tempcard/sunny.jpg')");
              else if (tempact >= 30)
              $(".feels").css("background-image","url('./images/tempcard/hot.jpg')");

        });

      const ham = document.getElementsByClassName("ham")[0];
      const navbarLinker = document.getElementsByClassName("navbarlink")[0];

      ham.addEventListener("click", () => {
      navbarLinker.classList.toggle("active");
    });

