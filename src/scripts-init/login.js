$(document).ready(() => 
{

  $.getJSON("https://api.ipify.org/?format=json", function(e) { 
 
              ip = e.ip; 
              sessionStorage.setItem("IpIngreso", ip);
          }); 

    $("#login").click(function(){
    var email = $("#exampleEmail").val();
    var password = $("#examplePassword").val();
    var ip;
    // Checking for blank fields.
    if( email =='' || password ==''){
    alert("Por favor, completar todos los campos");
    }else {
 

            var ItemJSON={
                "email": email,
                "clave": password
            };
                  
            
            
            var xhttp = new XMLHttpRequest();
            //alert(JSON.stringify(ItemJSON));
            xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     //alert(this.responseText);
                     //var myArr3 =this.responseText;
                     var respuesta = JSON.parse(this.responseText);
                     if (respuesta=='CI'){
                      alert("Contraseña Incorrecta");
                      document.getElementById("examplePassword").innerHTML = "";
                      return;
                     }
                     if (respuesta=='IN'){
                      alert("Usuario Inactivo");
                      document.getElementById("exampleEmail").innerHTML = "";
                      document.getElementById("examplePassword").innerHTML = "";
                      return;
                    }
                    if (respuesta=='NE'){
                      alert("Usuario no existe");
                      document.getElementById("exampleEmail").innerHTML = "";
                      document.getElementById("examplePassword").innerHTML = "";
                      return;
                    }
                    
                     var myArr= JSON.parse(this.responseText);
                     sessionStorage.setItem("Codigo", myArr.registro[0].codusuario);
                     sessionStorage.setItem("Nombres", myArr.registro[0].nombre);
                     sessionStorage.setItem("Apellidos", myArr.registro[0].apellidos);
                     sessionStorage.setItem("IdEmpresa", myArr.registro[0].idempresa);
                     sessionStorage.setItem("IdCargo", myArr.registro[0].idcargo);
                     sessionStorage.setItem("IdOficina", myArr.registro[0].idoficina);
                     

                     //var myArr2 = JSON.stringify(JSON.parse(this.responseText));
                      // var myArr2 = "{\"registro\":[{\"codusuario\":\"01\",\"nombre\":\"Robert\",\"apellidos\":\"Pariasca\",\"idempresa\":\"01\",\"cargoid\":\"01\",\"idoficina\":\"01\"}]}";
                      
                      // myArr2 = JSON.parse(myArr2);
                     //var myarr2 = JSON.parse(JSON.stringify(JSON.parse(this.responseText)));
            //sessionStorage.setItem("Nombre", nom);
            //sessionStorage.setItem("Apellido", apel);
                    //console.log(JSON.parse(myArr));
                    
                     //console.log(myArr);
                    //alert(JSON.parse(myArr).registro[0].nombre);
                    //alert(myArr.registro[0].nombre);
                    window.location.replace("principal.html");
                    //alert(myArr2);
                    //alert(myArr3);
                    //alert("llego2");
                    //var codusuarioa = myArr.registro;
                    //alert(myArr.registro);
                    //alert(myArr.registro(0));
                    /*
                    var nomusuario = myArr[1];
                    var apellidos = myArr[3];
                    var idempresa = myArr[4];
                    var cargoid = myArr[5];
                    var idoficina = myArr[6];
                    
            
            alert(nomusuario);
            alert(apellidos);
            alert(idempresa);
            alert(cargoid);
            alert(idoficina);
            */
                 }
            };
            xhttp.open("POST", "http://localhost/ChuspitaApi/controller/sesion.validar.controller.php", true);
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