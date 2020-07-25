$(document).ready(() => {

    var link = window.location.href;
    var filename= link.substring(link.lastIndexOf('/')+1);

    if(filename == "mantenimiento_seguridad_usuario.html"){
        
        
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
         
           for(i = 0; i < respuesta.length; i++){
          
          var o = new Option(respuesta[i].desempresa, respuesta[i].idempresa);
          $(o).html(respuesta[i].desempresa);
          $("#segmanempresa").append(o);

        }
        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesempresa.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send();

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

    }else if(filename == "mantenimiento_seguridad_empresa.html"){

        var ItemJSON={
            "nombrecampo": "Tipo Doc Identidad",
        };

        var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
         
           for(i = 0; i < respuesta.length; i++){
          
          var o = new Option(respuesta[i].tipo_campo, respuesta[i].valor_campo);
          $(o).html(respuesta[i].tipo_campo);
          $("#segmanempdoc").append(o);

        }
        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesmultitabla.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send(JSON.stringify(ItemJSON));



    }else if(filename == "mantenimiento_seguridad_oficina.html"){
        
        
    
        var xhttp = new XMLHttpRequest();
    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var respuesta = JSON.parse(this.responseText);
             
               for(i = 0; i < respuesta.length; i++){
              
              var o = new Option(respuesta[i].desempresa, respuesta[i].idempresa);
              $(o).html(respuesta[i].desempresa);
              $("#segmanofiemp").append(o);
    
            }
            }
       };
       xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesempresa.controller.php", true);
       xhttp.setRequestHeader("Content-type", "application/json");
       xhttp.send();
    
    $('#segmanofiemp').change(function() {
        $("#segmanofiemp option[value='000']").remove();
    });
    
        }else if(filename == "mantenimiento_seguridad_cargo.html"){
        
        
    
            var xhttp = new XMLHttpRequest();
        
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var respuesta = JSON.parse(this.responseText);
                 
                   for(i = 0; i < respuesta.length; i++){
                  
                  var o = new Option(respuesta[i].desempresa, respuesta[i].idempresa);
                  $(o).html(respuesta[i].desempresa);
                  $("#segmancaremp").append(o);
        
                }
                }
           };
           xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesempresa.controller.php", true);
           xhttp.setRequestHeader("Content-type", "application/json");
           xhttp.send();
        
        $('#segmancaremp').change(function() {
            $("#segmancaremp option[value='000']").remove();
            $("#segmancarofi").empty();
            var o = new Option("", "000");
            $(o).html("");
            $("#segmancarofi").append(o);

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
                  $("#segmancarofi").append(o);
        
                }
        
                }
           };
           xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaropcionesoficina.controller.php", true);
           xhttp.setRequestHeader("Content-type", "application/json");
           xhttp.send(JSON.stringify(ItemJSON));
            //var val = $("#segmanempresa option:selected").text();
            //alert(val);
        });
        
        $('#segmancarofi').change(function() {
            $("#segmancarofi option[value='000']").remove();
        });
        
            }


    });

    