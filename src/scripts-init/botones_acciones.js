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
            
            //var adicion = '<th scope="row">1</th><td style="display:none;">'+empresa+'</td><td>-</td><td style="display:none;">-</td><td>-</td><td style="display:none;">-</td><td>-</td><td> <div class="widget-content-right widget-content-actions"><button type="button" class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button><button type="button" class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash-alt"></i></button></div></td>';

            
            var adicion = '<tr><th scope="row">1</th>' + 
            '<td style="display:none;" class="empresa">' + empresa + '</td><td class="txtempresa">' + txtempresa +'</td>' + 
            '<td style="display:none;" class="oficina">' + oficina + '</td><td class="txtoficina">' + txtoficina +'</td>' + 
            '<td style="display:none;" class="cargo">' + cargo + '</td><td class="txtcargo">' + txtcargo + '</td>' + 
            '<td><div class="widget-content-right widget-content-actions">' + 
            '<button type="button" class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button>' + 
            '<button type="button" class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
            
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
                
                //var adicion = '<th scope="row">1</th><td style="display:none;">'+empresa+'</td><td>-</td><td style="display:none;">-</td><td>-</td><td style="display:none;">-</td><td>-</td><td> <div class="widget-content-right widget-content-actions"><button type="button" class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button><button type="button" class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash-alt"></i></button></div></td>';
    
                
                var adicion = '<tr><th scope="row">1</th>' + 
                '<td style="display:none;" class="empresa">' + modulo + '</td><td class="txtempresa">' + txtmodulo +'</td>' + 
                '<td style="display:none;" class="oficina">' + menu + '</td><td class="txtoficina">' + txtmenu +'</td>' + 
                '<td style="display:none;" class="cargo">' + menuitem + '</td><td class="txtcargo">' + txtmenuitem + '</td>' + 
                '<td><div class="widget-content-right widget-content-actions">' + 
                '<button type="button" class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button>' + 
                '<button type="button" class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash-alt"></i></button></div></td></tr>';
                
                $('#segmanpertbl tbody').append(adicion);
    
            }
    
            });

    });