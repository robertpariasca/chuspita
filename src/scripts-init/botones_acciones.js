$(document).ready(() => {
    $("#agregarcargo").click(function(){

        var empresa = $("#segmanempresa option:selected").val();
        var oficina = $("#segmansede option:selected").val();
        var cargo = $("#segmancargo option:selected").val();
    
        // Checking for blank fields.
        if(empresa=='000' || oficina=='000'|| cargo=='000'){
        alert("Por favor, completar todos los campos");
        }else {
            var txtempresa = $("#segmanempresa option:selected").html();
            var txtoficina = $("#segmansede option:selected").html();
            var txtcargo = $("#segmancargo option:selected").html();
            
            var adicion = '<tr><th scope="row">1</th>' + 
            '<td style="display:none;" class="empresa">' + empresa + '</td><td class="txtempresa">' + txtempresa +'</td>' + 
            '<td style="display:none;" class="oficina">' + oficina + '</td><td class="txtoficina">' + txtoficina +'</td>' + 
            '<td style="display:none;" class="cargo">' + cargo + '</td><td class="txtcargo">' + txtcargo + '</td>' + 
            '<td><div class="widget-content-right widget-content-actions">' + 
            '<button type="button" name="delete" class="border-0 btn-transition btn btn-outline-danger delete"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
            
            $('#segmanusutbl tbody').append(adicion);

        }

        });

        $("#agregarcargoper").click(function(){

            var modulo = $("#segmanpermod option:selected").val();
            var menu = $("#segmanpermen option:selected").val();
            var menuitem = $("#segmanperite option:selected").val();
        
            // Checking for blank fields.
            if(modulo=='000' || menu=='000'|| menuitem=='000'){
            alert("Por favor, completar todos los campos");
            }else {
                var txtmodulo = $("#segmanpermod option:selected").html();
                var txtmenu = $("#segmanpermen option:selected").html();
                var txtmenuitem = $("#segmanperite option:selected").html();
                
                var ingresar = document.getElementById('segmanpertip1').checked;
                var modificar =document.getElementById('segmanpertip2').checked;
                var eliminar =document.getElementById('segmanpertip3').checked;
                var listar =document.getElementById('segmanpertip4').checked;
                var opciones = "";
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
            
                
                opciones=opciones.slice(0,-1);



                var adicion = '<tr><th scope="row">1</th>' + 
                '<td style="display:none;" class="modulo">' + modulo + '</td><td class="txtmodulo">' + txtmodulo +'</td>' + 
                '<td style="display:none;" class="menu">' + menu + '</td><td class="txtmenu">' + txtmenu +'</td>' + 
                '<td style="display:none;" class="menuitem">' + menuitem + '</td><td class="txtmenuitem">' + txtmenuitem + '</td>' + 
                '<td class="tipoactividad">' + opciones + '</td>' + 
                '<td><div class="widget-content-right widget-content-actions">' + 
                '<button type="button" name="delete" class="border-0 btn-transition btn btn-outline-danger delete"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                
                $('#segmanpertbl tbody').append(adicion);
    
            }
    
            });
            $(document).on("click",'.delete',function(){

                $(this).closest('tr').remove(); 
             });

             $(document).on("click",'.deleteempresa',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar esta empresa? Se borraran todas los cargos y permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var desempresa = $(this).closest('tr').find('td:eq(1)').text();
                    var ItemJSON={
                        "idempresa": $(this).closest('tr').find('td:eq(0)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Empresa '" + desempresa + "' eliminada");
                    
                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_empresa.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarempresa.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }

              
             });

             $(document).on("click",'.updateempresa',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_empresa");
                sessionStorage.setItem("idempresa", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("desempresa", $(this).closest('tr').find('td:eq(1)').text());
                sessionStorage.setItem("direccion", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("replegal", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("idtipodocidentidad", $(this).closest('tr').find('td:eq(4)').text());
                sessionStorage.setItem("docidentidad", $(this).closest('tr').find('td:eq(5)').text());
                sessionStorage.setItem("telefono", $(this).closest('tr').find('td:eq(6)').text());
                
                window.location.replace("mantenimiento_seguridad_empresa.html");    
              
             });
            
             $(document).on("click",'.deleteoficina',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar esta oficina? Se borraran todas los cargos y permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var desoficina = $(this).closest('tr').find('td:eq(3)').text();
                    var ItemJSON={
                        "idempresa": $(this).closest('tr').find('td:eq(0)').text(),
                        "idoficina": $(this).closest('tr').find('td:eq(2)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Oficina '" + desoficina + "' eliminada");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_oficina.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminaroficina.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }

                
             });    

             $(document).on("click",'.updateoficina',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_oficina");
                sessionStorage.setItem("idempresa", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("idoficina", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("desoficina", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("direccion", $(this).closest('tr').find('td:eq(4)').text());
                
                window.location.replace("mantenimiento_seguridad_oficina.html");    
              
             });

             $(document).on("click",'.deletecargo',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar este cargo? Se borraran todas los cargos y permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var descargo = $(this).closest('tr').find('td:eq(5)').text();
                    
                    var ItemJSON={
                        "idempresa": $(this).closest('tr').find('td:eq(0)').text(),
                        "idoficina": $(this).closest('tr').find('td:eq(2)').text(),
                        "idcargo": $(this).closest('tr').find('td:eq(4)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Cargo '" + descargo + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_cargo.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarcargo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }

                
             });
             $(document).on("click",'.updatecargo',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_cargo");
                sessionStorage.setItem("idempresa", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("idoficina", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("desoficina", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("idcargo", $(this).closest('tr').find('td:eq(4)').text());
                sessionStorage.setItem("descripcion", $(this).closest('tr').find('td:eq(5)').text());
                
                window.location.replace("mantenimiento_seguridad_cargo.html");    
              
             });
             $(document).on("click",'.deletemodulo',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar este modulo? Se borraran todas los permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var desmodulo = $(this).closest('tr').find('td:eq(1)').text();
                    
                    var ItemJSON={
                        "idmodulo": $(this).closest('tr').find('td:eq(0)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Modulo '" + desmodulo + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_modulo.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarmodulo.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }

                
             }); 
             $(document).on("click",'.updatemodulo',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_modulo");
                sessionStorage.setItem("idmodulo", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("desmodulo", $(this).closest('tr').find('td:eq(1)').text());
                
                window.location.replace("mantenimiento_seguridad_modulo.html");    
              
             });   
             $(document).on("click",'.deletemenu',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar este menu? Se borraran todas los permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var desmenu = $(this).closest('tr').find('td:eq(3)').text();
                    
                    var ItemJSON={
                        "idmodulo": $(this).closest('tr').find('td:eq(0)').text(),
                        "codmenu": $(this).closest('tr').find('td:eq(2)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Menu '" + desmenu + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_menu.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarmenu.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }
 
             }); 
             $(document).on("click",'.updatemenu',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_menu");
                sessionStorage.setItem("idmodulo", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("codmenu", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("desmenu", $(this).closest('tr').find('td:eq(3)').text());
                
                window.location.replace("mantenimiento_seguridad_menu.html");    
              
             });  
             $(document).on("click",'.deletemenuitem',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar este item? Se borraran todas los permisos relacionados a esta")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var desmenu = $(this).closest('tr').find('td:eq(5)').text();
                    
                    var ItemJSON={
                        "idmodulo": $(this).closest('tr').find('td:eq(0)').text(),
                        "codmenu": $(this).closest('tr').find('td:eq(2)').text(),
                        "codmenuitem": $(this).closest('tr').find('td:eq(4)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Menu '" + desmenu + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_menuitems.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarmenuitems.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }
 
             }); 
             $(document).on("click",'.updatemenuitem',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_menuitem");
                sessionStorage.setItem("idmodulo", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("codmenu", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("desmenu", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("codmenuitem", $(this).closest('tr').find('td:eq(4)').text());
                sessionStorage.setItem("desmenuitem", $(this).closest('tr').find('td:eq(5)').text());
                sessionStorage.setItem("link", $(this).closest('tr').find('td:eq(6)').text());

                window.location.replace("mantenimiento_seguridad_menuitem.html");    
              
             });  
             $(document).on("click",'.deleteusuario',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar este usuario? Se borraran todas los permisos relacionados a este")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var nombre = $(this).closest('tr').find('td:eq(4)').text() + ' ' + $(this).closest('tr').find('td:eq(5)').text();
                    
                    var ItemJSON={
                        "codusuario": $(this).closest('tr').find('td:eq(0)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Usuario '" + nombre + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_usuario.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarusuario.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }
 
             });

             $(document).on("click",'.updateusuario',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_usuario");
                sessionStorage.setItem("codusuario", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("alias", $(this).closest('tr').find('td:eq(1)').text());
                sessionStorage.setItem("clave", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("fecharegistro", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("nombre", $(this).closest('tr').find('td:eq(4)').text());
                sessionStorage.setItem("apellidos", $(this).closest('tr').find('td:eq(5)').text());

                window.location.replace("mantenimiento_seguridad_usuario.html");    
              
             });

             $(document).on("click",'.deletepermisos',function(){
                //alert($(this).closest('tr').find('td:eq(0)').text());

                if (confirm("¿Esta seguro que desea eliminar los permisos de este cargo?")){
                    
                    var Codigo = sessionStorage.getItem("Codigo");
                    var Ip = sessionStorage.getItem("IpIngreso");
                    var despermisos = $(this).closest('tr').find('td:eq(5)').text();
                    
                    var ItemJSON={
                        "idempresa": $(this).closest('tr').find('td:eq(0)').text(),
                        "idoficina": $(this).closest('tr').find('td:eq(2)').text(),
                        "idcargo": $(this).closest('tr').find('td:eq(4)').text(),
                        "codlog": Codigo,
                        "ip" : Ip
                    };

                    var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {

                    var respuesta = JSON.parse(this.responseText);

                    alert("Permisos del cargo '" + despermisos + "' eliminado");

                    $(this).closest('tr').remove(); 

                    window.location.replace("listado_seguridad_permisos.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.eliminarpermisos.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));

                }else{
                    return;
                }

                
             }); 
             $(document).on("click",'.updatepermisos',function(){
                    
                sessionStorage.setItem("tipooperacion", "editar_permiso");
                sessionStorage.setItem("idempresa", $(this).closest('tr').find('td:eq(0)').text());
                sessionStorage.setItem("desempresa", $(this).closest('tr').find('td:eq(1)').text());
                sessionStorage.setItem("idoficina", $(this).closest('tr').find('td:eq(2)').text());
                sessionStorage.setItem("desoficina", $(this).closest('tr').find('td:eq(3)').text());
                sessionStorage.setItem("idcargo", $(this).closest('tr').find('td:eq(4)').text());
                sessionStorage.setItem("descripcion", $(this).closest('tr').find('td:eq(5)').text());

                window.location.replace("mantenimiento_seguridad_permisos.html");    
              
             });
    });