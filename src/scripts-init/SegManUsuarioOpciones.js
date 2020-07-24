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
                     alert("Registro del usuario " + usuario + " exitoso");

                    window.location.replace("principal.html");

                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/seguridad.mantenimientousuario.controller.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(ItemJSON));
            
            
            //alert("llego");
            //alert(xhttp.responseText);
            
        /*
        const app = document.getElementById('root');

        const logo = document.createElement('img');
        logo.src = 'logo.png';
        
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        app.appendChild(logo);
        app.appendChild(container);
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

        request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
              data.forEach(movie => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
          
                const h1 = document.createElement('h1');
                h1.textContent = movie.title;
          
                const p = document.createElement('p');
                movie.description = movie.description.substring(0, 300);
                p.textContent = `${movie.description}...`;
          
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = `Gah, it's not working!`;
              app.appendChild(errorMessage);
            }
          };
          request.send();
          */
    }
    });
    });