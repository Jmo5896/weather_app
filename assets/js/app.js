$(document).ready(() => {
    console.log('jquery is loaded');
    let cities = []

    function dailyWeather(city) {
        const url = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}&units=imperial`
        $.get(url, function(data){
            console.log(data)
          });

    }

    function fiveDay(city) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&q=${city}&units=imperial`
        $.get(url, function(data){
            console.log(data)
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