

moment.locale('fr');
$("#thedate").text(moment().format('LL'));



$(document).ready(function(){
    $('#valider').click(function(){
        var city= $("#city").val();
        
        if (city!= ''){
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?q=Pamiers&APPID=12ef118e06c5144d0c39c6dd01114989",

            type:"GET",
            dataType: "jsonp",

            success: function (data){

            }
        });

    }else{

        $("#error");html ('field cannot be empty');

      }
    });
});


function show (data) {
    return "Temperature:"+data.main.humidity+""
}


/*function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=+city+&APPID=12ef118e06c5144d0c39c6dd01114989",function(json){
        document.write(JSON.stringify(json));
    });
}*/