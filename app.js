$(document).ready(function () {



    moment.locale('fr');
    $("#thedate").text(moment().format('LL'));



    $('#valider').click(function () {
        var city = $("#ville").val();

        if (city != '') {
            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=12ef118e06c5144d0c39c6dd01114989",
                type: "GET",
                dataType: "json",
                success: function (data) {

                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                
                }
            });

        } else {

            $("#error").html('field cannot be empty');

        }
        function show(data) {
            console.log('donnee', data);

            return "Température:"+data.main.temp_max+"deg;C"+
                   "Température:"+data.main.temp_min+"deg;C"+
                   "Pression atmosphérique:"+data.main.pressure+
                   "Vitesse du vent:"+data.wind.speed+
                   "Humidité:"+data.main.humidity;
        }

        show();


    });
});






/*function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=+city+&APPID=12ef118e06c5144d0c39c6dd01114989",function(json){
        document.write(JSON.stringify(json));
    });
}*/