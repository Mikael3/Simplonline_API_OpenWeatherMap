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
                
                }
            });

        } else {

            $("#error").html('field cannot be empty');

        }
        function show(data) {
            console.log('donnee', data);

            return "<h3><strong>Humidity</strong>:"+data.main.humidity+"</h3>";
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