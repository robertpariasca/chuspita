$(document).ready(() => {
    window.onload = function() {
        var link = window.location.href;
        var filename= link.substring(link.lastIndexOf('/')+1);
    
        if(filename == "mantenimiento_seguridad_usuario.html"){
    
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_usuario"){
                var codusuario = sessionStorage.getItem("codusuario");
                var alias = sessionStorage.getItem("alias");
                var clave = sessionStorage.getItem("clave");
                var fecharegistro = sessionStorage.getItem("fecharegistro");
                var nombre = sessionStorage.getItem("nombre");
                var apellidos = sessionStorage.getItem("apellidos");
                
                $("#segmanusuario").val(alias);
                $("#segmanpassword").val(clave);
                $("#segmannombre").val(nombre);
                $("#segmanapellidos").val(apellidos);                

                var ItemJSON={
                    "codusuario": codusuario
                };
                var xhttp = new XMLHttpRequest();
    
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var respuesta = JSON.parse(this.responseText);
                     
                       for(i = 0; i < respuesta.length; i++){
                      
                        var numeracion = i + 1;
                        
                        var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                        '<td style="display:none;" class="empresa">' + respuesta[i].idempresa + '</td><td class="txtempresa">' + respuesta[i].desempresa +'</td>' + 
                        '<td style="display:none;" class="oficina">' + respuesta[i].idoficina + '</td><td class="txtoficina">' + respuesta[i].desoficina +'</td>' + 
                        '<td style="display:none;" class="cargo">' + respuesta[i].idcargo + '</td><td class="txtcargo">' + respuesta[i].descripcion + '</td>' + 
                        '<td><div class="widget-content-right widget-content-actions">' + 
                        '<button type="button" name="delete" class="border-0 btn-transition btn btn-outline-danger delete"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                        
                        $('#segmanusutbl tbody').append(adicion);
            
                    }
                    }
               };
               xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistausuarioacceso.controller.php", true);
               xhttp.setRequestHeader("Content-type", "application/json");
               xhttp.send(JSON.stringify(ItemJSON));

                $("#agregarUsuario").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarUsuario" id="agregarUsuario">Actualizar</button>';
                //var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarUsuario" id="agregarUsuario">Actualizar</button>';
                
            $('#btnform').append(adicion);

            sessionStorage.removeItem("alias");
            sessionStorage.removeItem("clave");
            sessionStorage.removeItem("fecharegistro");
            sessionStorage.removeItem("nombre");
            sessionStorage.removeItem("apellidos");
            sessionStorage.removeItem("tipooperacion");

            }

        }else if(filename == "mantenimiento_seguridad_empresa.html"){
    
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_empresa"){
                var idempresa = sessionStorage.getItem("idempresa");
                var desempresa = sessionStorage.getItem("desempresa");
                var direccion = sessionStorage.getItem("direccion");
                var replegal = sessionStorage.getItem("replegal");
                var idtipodocidentidad = sessionStorage.getItem("idtipodocidentidad");
                var docidentidad = sessionStorage.getItem("docidentidad");
                var telefono = sessionStorage.getItem("telefono");
                
                $("#segmanempdes").val(desempresa);
                $("#segmanempdir").val(direccion);
                $("#segmanemprep").val(replegal);
                $("#segmanempdoc option[value='"+ idtipodocidentidad +"']").prop('selected', true);
                $("#segmanempnro").val(docidentidad);
                $("#segmanemptel").val(telefono);

                $("#agregarUsuario").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarUsuario" id="agregarUsuario">Actualizar</button>';
                
            $('#btnform').append(adicion);

            sessionStorage.removeItem("desempresa");
            sessionStorage.removeItem("direccion");
            sessionStorage.removeItem("replegal");
            sessionStorage.removeItem("idtipodocidentidad");
            sessionStorage.removeItem("docidentidad");
            sessionStorage.removeItem("telefono");
            sessionStorage.removeItem("tipooperacion");

            }
    
        }else if(filename == "mantenimiento_seguridad_oficina.html"){
            
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_oficina"){
                var idempresa = sessionStorage.getItem("idempresa");
                var idoficina = sessionStorage.getItem("idoficina");
                var desoficina = sessionStorage.getItem("desoficina");
                var direccion = sessionStorage.getItem("direccion");
                
                $("#segmanofiemp option[value='"+ idempresa +"']").prop('selected', true);
                $('#segmanofiemp').prop('disabled', 'disabled');
                $("#segmanofides").val(desoficina);   
                $("#segmanofidir").val(direccion);

                $("#agregarOficina").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarOficina" id="agregarOficina">Actualizar</button>';
                
            $('#btnform').append(adicion);
                sessionStorage.removeItem("desoficina");   
                sessionStorage.removeItem("direccion");
                sessionStorage.removeItem("tipooperacion");
            }
    
        }else if(filename == "mantenimiento_seguridad_cargo.html"){
            
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_cargo"){
                var idempresa = sessionStorage.getItem("idempresa");
                var idoficina = sessionStorage.getItem("idoficina");
                var desoficina = sessionStorage.getItem("desoficina");
                var idcargo = sessionStorage.getItem("idcargo");
                var descripcion = sessionStorage.getItem("descripcion");
                
                //$("#segmancaremp option[value='"+ idempresa +"']").prop('selected', true);
                $("#segmancaremp").val(idempresa).trigger("change");
                $('#segmancaremp').prop('disabled', 'disabled');
                //$("#segmancaremp").trigger('change');               
                //$("#segmancarofi option[value='"+ idoficina +"']").prop('selected', true);
                var o = new Option(desoficina, idoficina);
                $(o).html(desoficina);
                $("#segmancarofi").append(o);
                $("#segmancarofi").val(idoficina).trigger("change");
                $('#segmancarofi').prop('disabled', 'disabled');
                $("#segmancardes").val(descripcion);

                $("#agregarCargo").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarCargo" id="agregarCargo">Actualizar</button>';
                sessionStorage.removeItem("tipooperacion");
                sessionStorage.removeItem("desoficina");
                sessionStorage.removeItem("descripcion");
            $('#btnform').append(adicion);

            }

        }else if(filename == "mantenimiento_seguridad_modulo.html"){

            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_modulo"){
                var idmodulo = sessionStorage.getItem("idmodulo");
                var desmodulo = sessionStorage.getItem("desmodulo");
                
                $("#segmanmoddes").val(desmodulo);
              
                $("#agregarModulo").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarModulo" id="agregarModulo">Actualizar</button>';
                
            $('#btnform').append(adicion);

            sessionStorage.removeItem("desmodulo");
            sessionStorage.removeItem("tipooperacion");
            }

        }else if(filename == "mantenimiento_seguridad_menu.html"){
    
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_menu"){
                var idmodulo = sessionStorage.getItem("idmodulo");
                var codmenu = sessionStorage.getItem("codmenu");
                var desmenu = sessionStorage.getItem("desmenu");
                
                $("#segmanmenmod option[value='"+ idmodulo +"']").prop('selected', true);
                $('#segmanmenmod').prop('disabled', 'disabled');
                $("#segmanmendes").val(desmenu);

                $("#agregarMenu").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarMenu" id="agregarMenu">Actualizar</button>';
                
            $('#btnform').append(adicion);

            sessionStorage.removeItem("desmenu");
            sessionStorage.removeItem("tipooperacion");    
            }

        }else if(filename == "mantenimiento_seguridad_menuitem.html"){
    
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_menuitem"){
                var idmodulo = sessionStorage.getItem("idmodulo");
                var codmenu = sessionStorage.getItem("codmenu");
                var desmenu = sessionStorage.getItem("desmenu");
                var codmenuitem = sessionStorage.getItem("codmenuitem");
                var desmenuitem = sessionStorage.getItem("desmenuitem");
                var link = sessionStorage.getItem("link");

                 $("#segmanitemod").val(idmodulo).trigger("change");
                 $('#segmanitemod').prop('disabled', 'disabled');
                 var o = new Option(desmenu, codmenu);
                 $(o).html(desmenu);
                 $("#segmanitemen").append(o);
                 $("#segmanitemen").val(codmenu).trigger("change");
                 $('#segmanitemen').prop('disabled', 'disabled');
                 $("#segmanitedes").val(desmenuitem);
                 $("#segmanitedes").val(link);

                $("#agregarItem").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarItem" id="agregarItem">Actualizar</button>';
                
            $('#btnform').append(adicion);

            sessionStorage.removeItem("desmenu");
            sessionStorage.removeItem("desmenuitem");
            sessionStorage.removeItem("tipooperacion");
            sessionStorage.removeItem("link");
            }

        }else if(filename == "mantenimiento_seguridad_permisos.html"){
            var opcion = sessionStorage.getItem("tipooperacion");

            if (opcion == "editar_permiso"){
                var idempresa = sessionStorage.getItem("idempresa");
                var idoficina = sessionStorage.getItem("idoficina");
                var desoficina = sessionStorage.getItem("desoficina");
                var idcargo = sessionStorage.getItem("idcargo");
                var descripcion = sessionStorage.getItem("descripcion");
                
                //$("#segmancaremp option[value='"+ idempresa +"']").prop('selected', true);
                $("#segmanperemp").val(idempresa).trigger("change");
                $('#segmanperemp').prop('disabled', 'disabled');
                //$("#segmancaremp").trigger('change');               
                //$("#segmancarofi option[value='"+ idoficina +"']").prop('selected', true);
                var o = new Option(desoficina, idoficina);
                $(o).html(desoficina);
                $("#segmanpersed").append(o);
                $("#segmanpersed").val(idoficina).trigger("change");
                $('#segmanpersed').prop('disabled', 'disabled');
                var u = new Option(descripcion, idcargo);
                $(u).html(descripcion);
                $("#segmanpercar").append(u);
                $("#segmanpercar").val(idcargo).trigger("change");
                $('#segmanpercar').prop('disabled', 'disabled');

                var ItemJSON={
                    "idempresa": idempresa,
                    "idoficina": idoficina,
                    "idcargo": idcargo
                };
                var xhttp = new XMLHttpRequest();
    
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var respuesta = JSON.parse(this.responseText);
                     
                       for(i = 0; i < respuesta.length; i++){
                      
                        var numeracion = i + 1;
                        
                        var adicion = '<tr><th scope="row">' + numeracion + '</th>' + 
                            '<td style="display:none;" class="idmodulo">' + respuesta[i].idmodulo + '</td><td class="desmodulo">' + respuesta[i].desmodulo +'</td>' + 
                            '<td style="display:none;" class="codmenu">' + respuesta[i].codmenu + '</td><td class="desmenu">' + respuesta[i].desmenu +'</td>' + 
                            '<td style="display:none;" class="codmenuitem">' + respuesta[i].codmenuitem + '</td><td class="desmenuitem">' + respuesta[i].desmenuitem + '</td>' + 
                            '<td class="tipoactividad">' + respuesta[i].tipoactividad + '</td>' +
                            '<td><div class="widget-content-right widget-content-actions">' + 
                            '<button type="button" name="delete" class="border-0 btn-transition btn btn-outline-danger delete"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                
                $('#segmanpertbl tbody').append(adicion);
            
                    }
                    }
               };
               xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistapermisosdetalle.controller.php", true);
               xhttp.setRequestHeader("Content-type", "application/json");
               xhttp.send(JSON.stringify(ItemJSON));



                $("#agregarPermiso").remove();
                var adicion = '<button class="mb-2 mr-2 btn-pill btn btn-info" name="agregarPermiso" id="agregarPermiso">Actualizar</button>';
                sessionStorage.removeItem("tipooperacion");
                sessionStorage.removeItem("desoficina");
                sessionStorage.removeItem("descripcion");
            $('#btnform').append(adicion);

            }
        }
    
    };    
    });

/*    
    
*/
   
