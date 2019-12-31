$(document).ready(() => {
    console.log('jquery is loaded');
    let cities = []

    function dailyWeather(city) {
        const url = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}&units=imperial`
        $.get(url, function (data) {
            // console.log(data)
            const weather = {
                Name: data.name,
                Temperature: data.main.temp,
                Humidity: data.main.humidity,
                Overcast: data.weather[0].description
            };

            for (let key in weather) {
                let item = $('#dailyWeather').append(`<li>${key}: ${weather[key]}</li>`);
            }
        });

    }

    function fiveDay(city) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&q=${city}&units=imperial`
        $.get(url, function (data) {
            $("#fiveDay").empty()
            let forcast = data.list.filter(obj => obj.dt_txt.split(" ")[1] === "15:00:00");
            console.log(forcast);
            forcast.forEach(obj => {
                $("#fiveDay").append(`
                    <div class="card" style="max-width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">temp: ${obj.main.temp}</p>
                            <p class="card-text"> hum: ${obj.main.humidity}</p>
                            <p class="card-text"> Overcast: ${obj.weather[0].description}</p>
                        </div>
                    </div>
               `)
            })
        });
    }

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
        var myInput = $("#myCity").val();
        if (cities.includes(myInput)) {
            alert('City has already been entered')
        } else {
            $('#myCities').append(`<li class="li">${myInput} </li>`)
            cities.push(myInput);
        }
        $("#myCity").val("")

        dailyWeather(myInput);
        fiveDay(myInput);
    });

    $("#myCities").on('click', ".li", function () {
        console.log($(this).text());
    })

});