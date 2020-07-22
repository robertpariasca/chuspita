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
    var val = $("#segmanempresa option:selected").text();
    alert(val);
});

    });