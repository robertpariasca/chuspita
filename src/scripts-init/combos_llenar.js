$(document).ready(() => {


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //var myArr3 =this.responseText;
            var respuesta = JSON.parse(this.responseText);
            /*
            alert(this.responseText);
            alert(respuesta);
            alert(respuesta.length);
            */
          
           for(i = 0; i < respuesta.length; i++){
          //alert(respuesta[i].idempresa)
          //alert(respuesta[i].desempresa)
          
          var o = new Option(respuesta[i].desempresa, respuesta[i].idempresa);
          $(o).html(respuesta[i].desempresa);
          $("#segmanempresa").append(o);

        }
            
/*          
            if (respuesta==''){
                alert("Contraseña Incorrecta");
                document.getElementById("examplePassword").innerHTML = "";
                return;
               }
*/
            //var myArr= JSON.parse(this.responseText);

        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropciones.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send();
   //xhttp.send(JSON.stringify(ItemJSON));
   //xhttp.send(respuesta.length);

/*
    $('#menu1 li').filter(function() {
        return $(this).attr('value') === 'pruebaindex';
    }).remove();
*/
/*
    var o = new Option("Chuspita", "value");
    $(o).html("Chuspita");
    $("#segmanempresa").append(o);
*/

$('#segmanempresa').change(function() {
    $("#segmanempresa option[value='000']").remove();
    $("#segmansede").empty();
    var o = new Option("", "000");
    $(o).html("");
    $("#segmansede").append(o);
    
    $("#segmancargo").empty();
    var o = new Option("", "000");
    $(o).html("");
    $("#segmancargo").append(o);
    //$(this).children("option[value='000']").remove();
    var ItemJSON={
        "idempresa": $(this).children("option:selected").val()
    };
    //alert($(this).children("option:selected").val());
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var respuesta = JSON.parse(this.responseText);
            //alert(respuesta);
            //alert(this.responseText);
           //$("#segmansede").empty();
            for(i = 0; i < respuesta.length; i++){

            var o = new Option(respuesta[i].desoficina, respuesta[i].idoficina);
          $(o).html(respuesta[i].desoficina);
          $("#segmansede").append(o);

        }

        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesoficina.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send(JSON.stringify(ItemJSON));
    //var val = $("#segmanempresa option:selected").text();
    //alert(val);
});

$('#segmansede').change(function() {
    $("#segmansede option[value='000']").remove();
    $("#segmancargo").empty();
    var o = new Option("", "000");
    $(o).html("");
    $("#segmancargo").append(o);
    
    var ItemJSON={
        "idempresa": $("#segmanempresa option:selected").val(),
        "idoficina": $(this).children("option:selected").val()
    };
    //alert($(this).children("option:selected").val());
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var respuesta = JSON.parse(this.responseText);

            //$("#segmancargo").empty();
            for(i = 0; i < respuesta.length; i++){

            var o = new Option(respuesta[i].descripcion, respuesta[i].idcargo);
          $(o).html(respuesta[i].descripcion);
          $("#segmancargo").append(o);

        }

        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionescargo.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send(JSON.stringify(ItemJSON));
    //var val = $("#segmanempresa option:selected").text();
    //alert(val);
});

    });

    