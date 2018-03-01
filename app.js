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

                    var temps = montre(data)
                    var widget = show(data)
                    var localisation = locali(data)
                    

                    $("#temperature").html(temps);
                    $("#show").html(widget);
                    $("#city").val('');
                    $("#latlon").html(localisation);
                
                }
            });

        } else {

            $("#error").html('field cannot be empty');

        }

        function montre(data) {

            return ""+data.main.temp+"&deg;C";

        }

        function show(data) {


            return "<h4>Température max: "+data.main.temp_max+"&deg;C</h4>"+
                   "<h4>Température min: "+data.main.temp_min+"&deg;C</h4>"+
                   "<h4>Pression atmosphérique: "+data.main.pressure+"hPa</h4>"+
                   "<h4>Vitesse du vent: "+data.wind.speed+"km/h</h4>"+
                   "<h4>Humidité: "+data.main.humidity+"%</h4>";
        }

        function locali(data) {


            return "Longitude: "+data.coord.lon+
                   "Lattitude: "+data.coord.lat;

        }

       
    });
});






/*function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=+city+&APPID=12ef118e06c5144d0c39c6dd01114989",function(json){
        document.write(JSON.stringify(json));
    });
}*/