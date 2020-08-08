$(document).ready(() => {
    $("#formsegmanusuario").submit(function (event){
      event.preventDefault();
    var usuario = $("#segmanusuario").val();
    var contraseña = $("#segmanpassword").val();
    var nombre = $("#segmannombre").val();
    var apellidos = $("#segmanapellidos").val();
    
    var filas = $("#segmanusutbl > tbody > tr").length;

    // Checking for blank fields.
    if( usuario =='' || contraseña =='' || nombre =='' || apellidos=='' || filas == 0 ){
    alert("Por favor, completar todos los campos");
    }else {

      var cargosArray = [];

      $('#segmanusutbl tbody>tr').each(function(){  
        //alert($(this).text());
        //alert($('td:nth-child(3)',this).text());

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
            alert($('#agregarUsuario').text());
            
            if ($('#agregarUsuario').text() == "Agregar" ){
              var ItemJSON={
                "alias": usuario,
                "contraseña": contraseña,
                "nombre" : nombre,
                "apellidos" : apellidos,
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

            }else if ($('#agregarUsuario').text() == "Actualizar"){

              var ItemJSON={
                "codusuario": sessionStorage.getItem("codusuario"),
                "alias": usuario,
                "contraseña": contraseña,
                "nombre" : nombre,
                "apellidos" : apellidos,
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
                      return false;
                    }

                     alert("Actualizacion del usuario '" + usuario + "' exitosa");
                     sessionStorage.removeItem("tipooperacion");
                     sessionStorage.removeItem("codusuario");  
                    window.location.replace("listado_seguridad_usuario.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarusuario.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
            }
            
  

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
      if ($('#agregarEmpresa').text() == "Agregar" ){

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

                     alert("Registro de la empresa '" + desempresa + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientoempresa.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

      }else if ($('#agregarEmpresa').text() == "Actualizar" ){

          var ItemJSON={
                "idempresa": sessionStorage.getItem("idempresa"),
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
                     if (respuesta=="DU"){
                      alert("Empresa Duplicada");
                      return false;
                    }

                     alert("Actualizacion de la empresa '" + desempresa + "' exitosa");
                     sessionStorage.removeItem("tipooperacion");
                     sessionStorage.removeItem("idempresa");  
                    window.location.replace("listado_seguridad_empresa.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarempresa.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
      }

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
      if ($('#agregarOficina').text() == "Agregar" ){

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
               
               var respuesta = JSON.parse(this.responseText);

               if (respuesta=="DU"){
                alert("Oficina Duplicada");
                return false;
              }

               alert("Registro de la oficina '" + desoficina + "' exitoso");

              window.location.replace("principal.html");

           }
      };
      xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientooficina.controller.php", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(ItemJSON));

      }else if ($('#agregarOficina').text() == "Actualizar" ){
        
        var ItemJSON={
          "idempresa": sessionStorage.getItem("idempresa"),
          "idoficina": sessionStorage.getItem("idoficina"),
          "desoficina": desoficina,
          "direccion" : direccion,
          "codlog": Codigo,
          "ip" : Ip
      };
            
      var xhttp = new XMLHttpRequest();
      //alert(JSON.stringify(ItemJSON));
      xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               
               var respuesta = JSON.parse(this.responseText);
               if (respuesta=="DU"){
                alert("Empresa Duplicada");
                return false;
              }
               alert("Actualizacion de la oficina '" + desoficina + "' exitosa");
               sessionStorage.removeItem("tipooperacion");
               sessionStorage.removeItem("idempresa");
               sessionStorage.removeItem("idoficina");  
              window.location.replace("listado_seguridad_oficina.html");

           }
      };
      xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizaroficina.controller.php", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(ItemJSON));

      }
            
  

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
      if ($('#agregarCargo').text() == "Agregar" ){
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
              
               var respuesta = JSON.parse(this.responseText);
               if (respuesta=="DU"){
                alert("Empresa Duplicada");
                return false;
              }
               alert("Registro del cargo '" + descripcion + "' exitoso");

              window.location.replace("principal.html");

           }
      };
      xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientocargo.controller.php", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(ItemJSON));
      }else if ($('#agregarCargo').text() == "Actualizar"){
        var ItemJSON={
          "idempresa": sessionStorage.getItem("idempresa"),
          "idoficina": sessionStorage.getItem("idoficina"),
          "idcargo": sessionStorage.getItem("idcargo"),
          "descripcion": descripcion,
          "codlog": Codigo,
          "ip" : Ip
      };
            
      var xhttp = new XMLHttpRequest();
      //alert(JSON.stringify(ItemJSON));
      xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               
               var respuesta = JSON.parse(this.responseText);
               if (respuesta=="DU"){
                alert("Cargo Duplicado");
                return false;
              }
               alert("Actualizacion del cargo '" + descripcion + "' exitosa");
               sessionStorage.removeItem("tipooperacion");
               sessionStorage.removeItem("idempresa");
               sessionStorage.removeItem("idoficina");  
               sessionStorage.removeItem("idcargo");
              window.location.replace("listado_seguridad_cargo.html");

           }
      };
      xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarcargo.controller.php", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(ItemJSON));

      }
 
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
            if ($('#agregarModulo').text() == "Agregar" ){
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
                      alert("Modulo Duplicado");
                      return false;
                    }

                     alert("Registro del modulo '" + desmodulo + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomodulo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
            }else if ($('#agregarModulo').text() == "Actualizar" ){
              var ItemJSON={
                "idmodulo": sessionStorage.getItem("idmodulo"),
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
                      alert("Modulo Duplicado");
                      return false;
                    }

                     alert("Actualizacion del modulo '" + desmodulo + "' exitosa");
                     sessionStorage.removeItem("tipooperacion");
                     sessionStorage.removeItem("idmodulo");
                    window.location.replace("listado_seguridad_modulo.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarmodulo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
            }

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

            if ($('#agregarMenu').text() == "Agregar" ){

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

                  if (respuesta=="DU"){
                    alert("Menu Duplicado");
                    return false;
                  }


                   alert("Registro del menu '" + desmenu + "' exitoso");

                  window.location.replace("principal.html");

               }
          };
          xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomenu.controller.php", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(JSON.stringify(ItemJSON));

            }else if ($('#agregarMenu').text() == "Actualizar" ){
 
            var ItemJSON={
              "idmodulo": idmodulo,
              "codmenu": sessionStorage.getItem("codmenu"),
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

                  if (respuesta=="DU"){
                    alert("Menu Duplicado");
                    return false;
                  }

                   alert("Actualizacion del menu '" + desmenu + "' exitoso");
                   sessionStorage.removeItem("tipooperacion");
                   sessionStorage.removeItem("idmodulo");
                   sessionStorage.removeItem("codmenu");
                  window.location.replace("listado_seguridad_menu.html");

               }
          };
          xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarmenu.controller.php", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(JSON.stringify(ItemJSON));

            }

  

    }
    });
    $("#formsegmanmenuitem").submit(function (event){
      event.preventDefault();

    var idmodulo = $("#segmanitemod option:selected").val();
    var codmenu = $("#segmanitemen option:selected").val();  
    var desitem = $("#segmanitedes").val();
    var link = $("#segmanitelin").val();
    

    if( desitem ==''){
    alert("Por favor, completar todos los campos");
    }else {

            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");

            if ($('#agregarItem').text() == "Agregar" ){

              var ItemJSON={
                "idmodulo": idmodulo,
                "codmenu": codmenu,
                "desmenuitem": desitem,
                "link":link,
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
                      alert("Item Duplicado");
                      document.getElementById("segmanmoddes").innerHTML = "";
                      return false;
                    }


                     alert("Registro del item '" + desitem + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientomenuitems.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

            }else  if ($('#agregarItem').text() == "Actualizar" ){
                
              var ItemJSON={
                "idmodulo": idmodulo,
                "codmenu": codmenu,
                "codmenuitem": sessionStorage.getItem("codmenuitem"),
                "desmenuitem": desitem,
                "link":link,
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
                      alert("Item Duplicado");
                      document.getElementById("segmanmoddes").innerHTML = "";
                      return false;
                    }

                     alert("Actualizacion del item '" + desitem + "' exitosa");
                     sessionStorage.removeItem("tipooperacion");
                     sessionStorage.removeItem("idmodulo");
                     sessionStorage.removeItem("codmenu");
                     sessionStorage.removeItem("codmenuitem");
                    window.location.replace("listado_seguridad_menuitems.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarmenuitems.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

            }

    }
    });

    $("#formsegmanpermisos").submit(function (event){
      event.preventDefault();

    var empresa = $("#segmanperemp option:selected").val();
    var oficina = $("#segmanpersed option:selected").val();
    var cargo = $("#segmanpercar option:selected").val();

    var filas = $("#segmanpertbl > tbody > tr").length;

    // Checking for blank fields.
    if( empresa == "000" || oficina == "000" || cargo == "000" || filas == 0 ){
    alert("Por favor, completar todos los campos");
    }else {

      var cargosArray = [];

      $('#segmanpertbl tbody>tr').each(function(){  
        //alert($(this).text());
        //alert($('td:nth-child(3)',this).text());

        var valor = {
          "codmodulo": $('td:nth-child(2)',this).text(),
          "modulo": $('td:nth-child(3)',this).text(),
          "codmenu": $('td:nth-child(4)',this).text(),
          "menu": $('td:nth-child(5)',this).text(),
          "codmenuitem": $('td:nth-child(6)',this).text(),
          "menuitem": $('td:nth-child(7)',this).text(),
          "tipoactividad": $('td:nth-child(8)',this).text()
        };
        cargosArray.push(valor);

    }); 

            var Codigo = sessionStorage.getItem("Codigo");
            var Ip = sessionStorage.getItem("IpIngreso");
            if ($('#agregarPermiso').text() == "Agregar" ){
              
              var ItemJSON={
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
                      alert("Permisos Duplicados");
                      return false;
                    }

                     alert("Registro de permisos para cargo '" + cargo + "' exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientopermisos.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

            }else if ($('#agregarPermiso').text() == "Actualizar" ){
              
              var ItemJSON={
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
                      alert("Permisos Duplicados");
                      return false;
                    }

                     alert("Actualizacion de permisos para cargo '" + cargo + "' exitosa");

                    window.location.replace("listado_seguridad_permisos.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.actualizarpermisos.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

            }
            
  

    }
    });

    });