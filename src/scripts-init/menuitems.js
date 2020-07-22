/*
$(document).ready(function(){

    var Codigo = sessionStorage.getItem("Codigo");

    var ItemsMostrarJson={
        "email": email,
        "clave": password
    };
          

    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //var myArr3 =this.responseText;
            var respuesta = JSON.parse(this.responseText);

           
            var myArr= JSON.parse(this.responseText);
           

        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/sesion.validar.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send(JSON.stringify(ItemJSON));



    $('#menu1 li').filter(function() {
        return $(this).attr('value') === 'pruebaindex';
    }).remove();
    });
    */