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
                    $("#carte").html("<iframe width='100%' height='100%' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyAeoompeuaVn2-S1156RvU6t-YdMzC-Y5g&center=" + data.coord.lat + "," + data.coord.lon + "&zoom=11&maptype=satellite'></iframe>");
                }
            });

        } else {

            $("#error").html('field cannot be empty');

        }

        function montre(data) {

            return "" + data.main.temp + "&deg;C";

        }

        function show(data) {


            return "<h4>Température max: " + data.main.temp_max + "&deg;C</h4>" +
                "<h4>Température min: " + data.main.temp_min + "&deg;C</h4>" +
                "<h4>Pression atmosphérique: " + data.main.pressure + "hPa</h4>" +
                "<h4>Vitesse du vent: " + data.wind.speed + "km/h</h4>" +
                "<h4>Humidité: " + data.main.humidity + "%</h4>";
        }

        function locali(data) {


            return "Longitude: " + data.coord.lon +
                "Lattitude: " + data.coord.lat;

        }

        $(document).ready(function(){
            //Je charge les données de Pamiers (grâce à la value de l'input) lors du chargement de la page
            meteo(ville);
            //Je conditione ma fonction à l'appui sur le bouton valider
            $("#valider").click(function(){
                ville = $("#ville").val();
                meteo(ville);
            })
            //Je conditionne ma fonction à la pression de la touche entrée
            $("#ville").keypress(function(e){
                  if ( e.keyCode == 13 ) {
                    ville = $("#ville").val();
                    meteo(ville);
                  }
        });

        /*function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: { lat: -34.397, lng: 150.644 }
            });
            var geocoder = new google.maps.Geocoder();

            document.getElementById('valider').addEventListener('click', function () {
                geocodeAddress(geocoder, map);
            });
        }

        function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('ville').value;
            geocoder.geocode({ 'ville': address }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }*/
    });
})
});
