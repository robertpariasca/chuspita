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
        var IdEmpresa = sessionStorage.getItem("IdEmpresa");
        var IdCargo = sessionStorage.getItem("IdCargo");
        var IdOficina = sessionStorage.getItem("IdOficina");

        //alert(Codigo);

        

    }
    

    });