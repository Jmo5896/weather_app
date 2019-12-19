$(document).ready(() => {
    console.log('jquery is loaded');
    let cities = []

    function dailyWeather(city) {
        console.log(city);

    }

    function fiveDay(city) {
        console.log(city);
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