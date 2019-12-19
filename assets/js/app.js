$(document).ready(() => {
console.log('jquery is loaded');
let cities = []
$('#submit-btn').on('click', function(event){
    event.preventDefault();
    var myInput = $("#myCity").val();
    if (cities.includes(myInput)){
        alert('City has already been entered')
    } else {
        $('#myCities').append(`<li class="li">${myInput} </li>`)
        cities.push(myInput);
    }
    $("#myCity").val("")
    console.log(myInput)
});

$("#myCities").on('click',".li", function(){
    console.log($(this).text());
})

});