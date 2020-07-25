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

    // Checking for blank fields.
    if( usuario =='' || contraseña =='' || nombre =='' || apellidos=='' || empresa=='000' || oficina=='000'|| cargo=='000'){
    alert("Por favor, completar todos los campos");
    }else {

 
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

    });