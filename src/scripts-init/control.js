$(document).ready(() => {
    var link = window.location.href;
    var filename= link.substring(link.lastIndexOf('/')+1);

    if(filename != "" && filename != "index.html"){
        if (sessionStorage.getItem("Codigo")==""){
            window.location.replace("index.html");
        }
        var Codigo = sessionStorage.getItem("Codigo");
        var Nombres = sessionStorage.getItem("Nombres");
        var Apellidos = sessionStorage.getItem("Apellidos");
       
        var ItemJSON={
            "codusuario" : Codigo
        };
        
        var xhttp = new XMLHttpRequest();
        //alert(JSON.stringify(ItemJSON));
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                
                var respuesta = JSON.parse(this.responseText);

                for(i = 0; i < respuesta.length; i++){
    
                var o = new Option(respuesta[i].desempresa, respuesta[i].idempresa);
              $(o).html(respuesta[i].desempresa);
              $("#selectEmpresaLogin").append(o);
    
            }
    

             }
        };
        xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarempresalogin.controller.php", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(ItemJSON));

        $('#selectEmpresaLogin').change(function() {
            $("#selectEmpresaLogin option[value='000']").remove();
            $("#selectOficinaLogin").empty();
            var o = new Option("", "000");
            $(o).html("");
            $("#selectOficinaLogin").append(o);
            
            var ItemJSON2={
                "codusuario" : Codigo,
                "idempresa" :  $(this).children("option:selected").val()
            };
    
            var xhttp2 = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp2.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                    
                    var respuesta = JSON.parse(this.responseText);
    
                    for(i = 0; i < respuesta.length; i++){
        
                    var o = new Option(respuesta[i].desoficina, respuesta[i].idoficina);
                  $(o).html(respuesta[i].desoficina);
                  $("#selectOficinaLogin").append(o);
        
                }
        
    
                 }
            };
            xhttp2.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargaroficinalogin.controller.php", true);
            xhttp2.setRequestHeader("Content-type", "application/json");
            xhttp2.send(JSON.stringify(ItemJSON2));
            //var val = $("#segmanempresa option:selected").text();
            //alert(val);
        });
        $('#selectOficinaLogin').change(function() {
            $("#selectOficinaLogin option[value='000']").remove();
            
            var ItemJSON2={
                "codusuario" : Codigo,
                "idempresa" : $("#selectEmpresaLogin option:selected").val(),
                "idoficina" :  $(this).children("option:selected").val()
            };
    
            var xhttp2 = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp2.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                    
                    var respuesta = JSON.parse(this.responseText);
    
                    for(i = 0; i < respuesta.length; i++){
        
                        $('#idcargologin').text(respuesta[i].idcargo);
                        $('#descargologin').text(respuesta[i].descripcion);
                        CargadoDatos($("#selectEmpresaLogin option:selected").val(), $("#selectOficinaLogin option:selected").val(), $('#idcargologin').text());
                }
    
                 }
            };
            xhttp2.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarcargologin.controller.php", true);
            xhttp2.setRequestHeader("Content-type", "application/json");
            xhttp2.send(JSON.stringify(ItemJSON2));
            //var val = $("#segmanempresa option:selected").text();
            //alert(val);
        });

        function CargadoDatos(empresa, oficina, cargo) {


            
            var ItemJSON2={
                "codusuario" : Codigo,
                "idempresa" : empresa,
                "idoficina" :  oficina,
                "idcargo" :  cargo
            };
    
            var xhttp2 = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp2.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                    
                    var respuesta = JSON.parse(this.responseText);
                    var modcargado = "";
                    var mencargado = "";
                    var itecargado = "";
                    for(i = 0; i < respuesta.length; i++){
                        
                        if (modcargado != respuesta[i].idmodulo){
                           
                            var adicion = '<li id="'+ respuesta[i].idmodulo +'">'+ '<a href="#">' + respuesta[i].desmodulo + '<i class="metismenu-state-icon pe-7s-angle-down caret-left"></i></a></li>';
                
                            $('#itemsmenu').append(adicion);
                            modcargado = respuesta[i].idmodulo;
                            mencargado = "";
                            itecargado = "";
                        }
                        if (mencargado != respuesta[i].codmenu){

                            var adicion2 = '<ul><li id="' + respuesta[i].idmodulo + respuesta[i].codmenu + '"><a href="#" >' + respuesta[i].desmenu + '<i class="metismenu-state-icon pe-7s-angle-down caret-left"></i></a></li>';

                
                            $('#'+ respuesta[i].idmodulo).append(adicion2);
                            mencargado = respuesta[i].codmenu;
                            itecargado = "";
                        }
                            var adicion3 = '<ul><li id="' + respuesta[i].idmodulo + respuesta[i].codmenuitem + '"><a href="'+ respuesta[i].link+'" >' + respuesta[i].desmenuitem + '</a></li>';
                
                            $('#'+ respuesta[i].idmodulo + respuesta[i].codmenu).append(adicion3);
                            //itecargado = respuesta[i].codmenuitem;
                        
                }
    
                 }
            };
            xhttp2.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.cargarlistapermisosdetalle.controller.php", true);
            xhttp2.setRequestHeader("Content-type", "application/json");
            xhttp2.send(JSON.stringify(ItemJSON2));
            
          }

    }
    

    });