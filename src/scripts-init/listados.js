$(document).ready(() => {

    var link = window.location.href;
    var filename= link.substring(link.lastIndexOf('/')+1);

    if(filename == "listado_seguridad_empresa.html"){
        
        
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
         
           for(i = 0; i < respuesta.length; i++){
          
            var numeracion = i + 1;

            var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
            '<td class="idempresa">' + respuesta[i].idempresa + '</td><td class="desempresa">' + respuesta[i].desempresa +'</td>' + 
            '<td class="direccion">' + respuesta[i].direccion + '</td><td class="replegal">' + respuesta[i].representantelegal +'</td>' + 
            '<td class="idtipodocidentidad">' + respuesta[i].idtipodocidentidad + '</td><td class="docidentidad">' + respuesta[i].docidentidad + '</td>' + 
            '<td class="telefono">' + respuesta[i].telefono + 
            '<td><div class="widget-content-right widget-content-actions">' + 
            '<button type="button" name="updateempresa" class="border-0 btn-transition btn btn-outline-success updateempresa"><i class="fa fa-edit"></i></button>' + 
            '<button type="button" name="deleteempresa" class="border-0 btn-transition btn btn-outline-danger deleteempresa"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
            
            $('#seglisempr tbody').append(adicion);

        }
        }
   };
   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistasempresa.controller.php", true);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send();





    }else if(filename == "listado_seguridad_oficina.html"){
        
        
    
        var xhttp = new XMLHttpRequest();
    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var respuesta = JSON.parse(this.responseText);
             
               for(i = 0; i < respuesta.length; i++){
              
                var numeracion = i + 1;
    
                var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                '<td class="idempresa" style="display:none;">' + respuesta[i].idempresa + '</td><td class="desempresa">' + respuesta[i].desempresa +'</td>' + 
                '<td class="idoficina">' + respuesta[i].idoficina + '</td><td class="desoficina">' + respuesta[i].desoficina +'</td>' +
                '</td><td class="direccion">' + respuesta[i].direccion +'</td>' + 
                '<td><div class="widget-content-right widget-content-actions">' + 
                '<button type="button" name="updateoficina" class="border-0 btn-transition btn btn-outline-success updateoficina"><i class="fa fa-edit"></i></button>' + 
                '<button type="button" name="deleteoficina" class="border-0 btn-transition btn btn-outline-danger deleteoficina"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                
                $('#seglisofic tbody').append(adicion);
    
    
            }
            }
       };
       xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistaoficina.controller.php", true);
       xhttp.setRequestHeader("Content-type", "application/json");
       xhttp.send();
    
    
    
    
    
        }else if(filename == "listado_seguridad_cargo.html"){
        
        
    
            var xhttp = new XMLHttpRequest();
        
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var respuesta = JSON.parse(this.responseText);
                 
                   for(i = 0; i < respuesta.length; i++){
                  
                    var numeracion = i + 1;
        
                    var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                    '<td class="idempresa" style="display:none;">' + respuesta[i].idempresa + '</td><td class="desempresa">' + respuesta[i].desempresa +'</td>' + 
                    '<td class="idoficina" style="display:none;">' + respuesta[i].idoficina + '</td><td class="desoficina">' + respuesta[i].desoficina +'</td>' +
                    '<td class="idcargo">' + respuesta[i].idcargo + '</td><td class="descripcion">' + respuesta[i].descripcion +'</td>' + 
                    '<td><div class="widget-content-right widget-content-actions">' + 
                    '<button type="button" name="updatecargo" class="border-0 btn-transition btn btn-outline-success updatecargo"><i class="fa fa-check"></i></button>' + 
                    '<button type="button" name="deletecargo" class="border-0 btn-transition btn btn-outline-danger deletecargo"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                    
                    $('#segliscarg tbody').append(adicion);
        
        
                }
                }
           };
           xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistacargo.controller.php", true);
           xhttp.setRequestHeader("Content-type", "application/json");
           xhttp.send();
        
        
        
        
        
            }else if(filename == "listado_seguridad_modulo.html"){
        
        
    
                var xhttp = new XMLHttpRequest();
            
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var respuesta = JSON.parse(this.responseText);
                     
                       for(i = 0; i < respuesta.length; i++){
                      
                        var numeracion = i + 1;
            
                        var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                        '<td class="idmodulo">' + respuesta[i].idmodulo + '</td><td class="desmodulo">' + respuesta[i].desmodulo +'</td>' + 
                        '<td><div class="widget-content-right widget-content-actions">' + 
                        '<button type="button" name="updatemodulo" class="border-0 btn-transition btn btn-outline-success updatemodulo"><i class="fa fa-check"></i></button>' + 
                        '<button type="button" name="deletemodulo" class="border-0 btn-transition btn btn-outline-danger deletemodulo"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                        
                        $('#seglismod tbody').append(adicion);
            
            
                    }
                    }
               };
               xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistamodulo.controller.php", true);
               xhttp.setRequestHeader("Content-type", "application/json");
               xhttp.send();
            
            
            
            
            
                }else if(filename == "listado_seguridad_menu.html"){
        
        
    
                    var xhttp = new XMLHttpRequest();
                
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var respuesta = JSON.parse(this.responseText);
                         
                           for(i = 0; i < respuesta.length; i++){
                          
                            var numeracion = i + 1;
                
                            var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                            '<td class="idmodulo" style="display:none;">' + respuesta[i].idmodulo + '</td><td class="desmodulo">' + respuesta[i].desmodulo +'</td>' + 
                            '<td class="codmenu">' + respuesta[i].codmenu + '</td><td class="desmenu">' + respuesta[i].desmenu +'</td>' + 
                            '<td><div class="widget-content-right widget-content-actions">' + 
                            '<button type="button" name="updatemenu" class="border-0 btn-transition btn btn-outline-success updatemenu"><i class="fa fa-check"></i></button>' + 
                            '<button type="button" name="deletemenu" class="border-0 btn-transition btn btn-outline-danger deletemenu"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                            
                            $('#seglismen tbody').append(adicion);
                
                
                        }
                        }
                   };
                   xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistamenu.controller.php", true);
                   xhttp.setRequestHeader("Content-type", "application/json");
                   xhttp.send();
                
                
                
                
                
                    }else if(filename == "listado_seguridad_menuitems.html"){
        
        
    
                        var xhttp = new XMLHttpRequest();
                    
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var respuesta = JSON.parse(this.responseText);
                             
                               for(i = 0; i < respuesta.length; i++){
                              
                                var numeracion = i + 1;
                    
                                var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                                '<td class="idmodulo" style="display:none;">' + respuesta[i].idmodulo + '</td><td class="desmodulo">' + respuesta[i].desmodulo +'</td>' + 
                                '<td class="codmenu" style="display:none;">' + respuesta[i].codmenu + '</td><td class="desmenu">' + respuesta[i].desmenu +'</td>' + 
                                '<td class="codmenuitem">' + respuesta[i].codmenuitem + '</td><td class="desmenuitem">' + respuesta[i].desmenuitem +'</td>' + 
                                '<td class="link">' + respuesta[i].link + '</td>' +
                                '<td><div class="widget-content-right widget-content-actions">' + 
                                '<button type="button" name="updatemenuitem" class="border-0 btn-transition btn btn-outline-success updatemenuitem"><i class="fa fa-check"></i></button>' + 
                                '<button type="button" name="deletemenuitem" class="border-0 btn-transition btn btn-outline-danger deletemenuitem"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                                
                                $('#seglisite tbody').append(adicion);
                    
                    
                            }
                            }
                       };
                       xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistamenuitem.controller.php", true);
                       xhttp.setRequestHeader("Content-type", "application/json");
                       xhttp.send();

                        }else if(filename == "listado_seguridad_usuario.html"){
 
                            var xhttp = new XMLHttpRequest();
                        
                            xhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    var respuesta = JSON.parse(this.responseText);
                                 
                                   for(i = 0; i < respuesta.length; i++){
                                  
                                    var numeracion = i + 1;
                        
                                    var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                                    '<td class="codusuario">' + respuesta[i].codusuario + '</td><td class="alias">' + respuesta[i].alias +'</td>' + 
                                    '<td class="clave">' + respuesta[i].clave + '</td><td class="fecharegistro">' + respuesta[i].fecharegistro +'</td>' + 
                                    '<td class="nombre">' + respuesta[i].nombre + '</td><td class="apellidos">' + respuesta[i].apellidos +'</td>' + 
                                    '<td><div class="widget-content-right widget-content-actions">' + 
                                    '<button type="button" name="updateusuario" class="border-0 btn-transition btn btn-outline-success updateusuario"><i class="fa fa-check"></i></button>' + 
                                    '<button type="button" name="deleteusuario" class="border-0 btn-transition btn btn-outline-danger deleteusuario"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                                    
                                    $('#seglisusu tbody').append(adicion);
                        
                        
                                }
                                }
                           };
                           xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistausuario.controller.php", true);
                           xhttp.setRequestHeader("Content-type", "application/json");
                           xhttp.send();
    
                            }else if(filename == "listado_seguridad_permisos.html"){
 
                                var xhttp = new XMLHttpRequest();
                            
                                xhttp.onreadystatechange = function() {
                                    if (this.readyState == 4 && this.status == 200) {
                                        var respuesta = JSON.parse(this.responseText);
                                     
                                       for(i = 0; i < respuesta.length; i++){
                                      
                                        var numeracion = i + 1;
                            
                                        var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                                        '<td class="idempresa" style="display:none;">' + respuesta[i].idempresa + '</td><td class="desempresa">' + respuesta[i].desempresa +'</td>' + 
                                        '<td class="idoficina" style="display:none;">' + respuesta[i].idoficina + '</td><td class="desoficina">' + respuesta[i].desoficina +'</td>' + 
                                        '<td class="idcargo" style="display:none;">' + respuesta[i].idcargo + '</td><td class="descripcion">' + respuesta[i].descripcion +'</td>' + 
                                        '<td><div class="widget-content-right widget-content-actions">' + 
                                        '<button type="button" name="updatepermisos" class="border-0 btn-transition btn btn-outline-success updatepermisos"><i class="fa fa-check"></i></button>' + 
                                        '<button type="button" name="deletepermisos" class="border-0 btn-transition btn btn-outline-danger deletepermisos"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                                        
                                        $('#seglisper tbody').append(adicion);
                            
                                    }
                                    }
                               };
                               xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistapermisos.controller.php", true);
                               xhttp.setRequestHeader("Content-type", "application/json");
                               xhttp.send();
        
                                }
    

});

    