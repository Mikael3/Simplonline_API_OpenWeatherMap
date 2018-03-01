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

            return ""+data.main.temp+"&deg;C"+
                   ""+data.main.temp_max+"&deg;C"+
                   ""+data.main.temp_min+"&deg;C"+
                   ""+data.main.pressure+"hPa"+
                   ""+data.wind.speed+"km/h"+
                   ""+data.main.humidity+"%";
        }

        


    });
});






/*function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=+city+&APPID=12ef118e06c5144d0c39c6dd01114989",function(json){
        document.write(JSON.stringify(json));
    });
}*/