$(document).ready(() => {
    $("#formsegmanusuario").submit(function (event){
      event.preventDefault();
    var usuario = $("#segmanusuario").val();
    var contraseña = $("#segmanpassword").val();
    var nombre = $("#segmannombre").val();
    var apellidos = $("#segmanapellidos").val();
    var empresa = $("#segmanempresa option:selected").val();
    var oficina = $("#segmansede option:selected").val();
    var cargo = $("#segmancargo option:selected").val();

    var filas = $("#segmanusutbl > tbody > tr").length;

    // Checking for blank fields.
    if( usuario =='' || contraseña =='' || nombre =='' || apellidos=='' || filas == 0 ){
    alert("Por favor, completar todos los campos");
    }else {

      var cargosArray = [];

      $('#segmanusutbl tbody>tr').each(function(){  
        //alert($(this).text());
        alert($('td:nth-child(3)',this).text());

        var valor = {
          "codempresa": $('td:nth-child(2)',this).text(),
          "empresa": $('td:nth-child(3)',this).text(),
          "codoficina": $('td:nth-child(4)',this).text(),
          "oficina": $('td:nth-child(5)',this).text(),
          "codcargo": $('td:nth-child(6)',this).text(),
          "cargo": $('td:nth-child(7)',this).text(),
        };
        cargosArray.push(valor);

    }); 

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "alias": usuario,
                "contraseña": contraseña,
                "nombre" : nombre,
                "apellidos" : apellidos,
                "empresa" : empresa,
                "oficina" : oficina,
                "cargo" : cargo,
                "codlog": Codigo,
                "ip" : Ip,
                "cargocadena": cargosArray
            };
                  
            console.log(JSON.stringify(ItemJSON));
            
            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);

                    if (respuesta=="DU"){
                      alert("Usuario Duplicado");
                      document.getElementById("segmanusuario").innerHTML = "";
                      return false;
                    }

                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro del usuario '" + usuario + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientousuario.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });

    $("#formsegmanempresa").submit(function (event){
      event.preventDefault();
    var desempresa = $("#segmanempdes").val();
    var direccion = $("#segmanempdir").val();
    var representantelegal = $("#segmanemprep").val();
    var idtipodocidentidad = $("#segmanempdoc option:selected").val();
    var docidentidad = $("#segmanempnro").val();
    var telefono = $("#segmanemptel").val();
    var logo = null;



   
    // Checking for blank fields.
    if( desempresa =='' || direccion =='' || representantelegal =='' || docidentidad=='' || telefono==''){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "desempresa": desempresa,
                "direccion": direccion,
                "representantelegal" : representantelegal,
                "idtipodocidentidad" : idtipodocidentidad,
                "docidentidad" : docidentidad,
                "telefono" : telefono,
                "logo" : logo,
                "codlog": Codigo,
                "ip" : Ip
            };
                  
            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);

                    if (respuesta=="DU"){
                      alert("Empresa Duplicada");
                      document.getElementById("segmanempdes").innerHTML = "";
                      return false;
                    }

                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro de la empresa '" + desempresa + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientoempresa.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });

    $("#formsegmanoficina").submit(function (event){
      event.preventDefault();
    var idempresa = $("#segmanofiemp option:selected").val();
    var desoficina = $("#segmanofides").val();
    var direccion = $("#segmanofidir").val();
   
    // Checking for blank fields.
    if( idempresa =='000' || desoficina =='' || direccion ==''){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "idempresa": idempresa,
                "desoficina": desoficina,
                "direccion" : direccion,
                "codlog": Codigo,
                "ip" : Ip
            };
                  
            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);
/*
                    if (respuesta=="DU"){
                      alert("Empresa Duplicada");
                      document.getElementById("segmanofides").innerHTML = "";
                      return false;
                    }
*/
                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro de la oficina '" + desempresa + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientooficina.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });

    $("#formsegmancargo").submit(function (event){
      event.preventDefault();

    var empresa = $("#segmancaremp option:selected").val();
    var oficina = $("#segmancarofi option:selected").val();
    var descripcion = $("#segmancardes").val();

    // Checking for blank fields.
    if( descripcion =='' || empresa=='000' || oficina=='000'){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "idempresa": empresa,
                "idoficina": oficina,
                "descripcion" : descripcion,
                "codlog": Codigo,
                "ip" : Ip
            };
                  

            
            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);
/*
                    if (respuesta=="DU"){
                      alert("Usuario Duplicado");
                      document.getElementById("segmanusuario").innerHTML = "";
                      return false;
                    }
*/
                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro del cargo '" + descripcion + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientocargo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });
    $("#formsegmanmodulo").submit(function (event){
      event.preventDefault();

    var desmodulo = $("#segmanmoddes").val();

    // Checking for blank fields.
    if( desmodulo ==''){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "desmodulo": desmodulo,
                "codlog": Codigo,
                "ip" : Ip
            };

            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);

                    if (respuesta=="DU"){
                      alert("Usuario Duplicado");
                      document.getElementById("segmanmoddes").innerHTML = "";
                      return false;
                    }

                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro del modulo '" + desmodulo + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomodulo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });
    $("#formsegmanmenu").submit(function (event){
      event.preventDefault();

    var idmodulo = $("#segmanmenmod option:selected").val();  
    var desmenu = $("#segmanmendes").val();

    // Checking for blank fields.
    if( desmenu ==''){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "idmodulo": idmodulo,
                "desmenu": desmenu,
                "codlog": Codigo,
                "ip" : Ip
            };

            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);
/*
                    if (respuesta=="DU"){
                      alert("Usuario Duplicado");
                      document.getElementById("segmanmoddes").innerHTML = "";
                      return false;
                    }
*/
                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro del modulo '" + desmenu + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomenu.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });
    $("#formsegmanmenuitem").submit(function (event){
      event.preventDefault();

    var idmodulo = $("#segmanitemod option:selected").val();
    var codmenu = $("#segmanitemen option:selected").val();  
    var desitem = $("#segmanitedes").val();
    var opciones = "";

    var ingresar = document.getElementById('segmainitetip1').checked;
    var modificar =document.getElementById('segmainitetip2').checked;
    var eliminar =document.getElementById('segmainitetip3').checked;
    var listar =document.getElementById('segmainitetip4').checked;

    if (ingresar == true){
      opciones = opciones + "1|";
    }
    if (modificar == true){
      opciones = opciones + "2|";
    }
    if (eliminar == true){
      opciones = opciones + "3|";
    }
    if (listar == true){
      opciones = opciones + "4|";
    }

    
    opciones=opciones.splice(1,-1);
    alert(opciones);

    // Checking for blank fields.
    if( desitem =='' || opciones == ''){
    alert("Por favor, completar todos los campos");
    }else {

 
            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            var ItemJSON={
                "idmodulo": idmodulo,
                "codmenu": codmenu,
                "desmenuitem": desitem,
                "tipoactividad": opciones,
                "codlog": Codigo,
                "ip" : Ip
            };

            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);
/*
                    if (respuesta=="DU"){
                      alert("Usuario Duplicado");
                      document.getElementById("segmanmoddes").innerHTML = "";
                      return false;
                    }
*/
                    /*
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     */
                     alert("Registro del item '" + desitem + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomenuitems.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
  

    }
    });
    });