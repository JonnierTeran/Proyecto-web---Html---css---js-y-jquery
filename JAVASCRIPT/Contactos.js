'use strict'

        //cargar js arriba
window.addEventListener('load', function(){

    // documento jquery
    $(document).ready(function(){

// contactps
// Validación
if(window.location.href.indexOf('contact') > -1){
	
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });

}

// cambiar temas

var theme = $("#theme");
var listo = localStorage.getItem('color');


$("#to-green").click(function(){
    var verde = "CSS/verde.css";
     theme.attr("href", verde );
    localStorage.setItem('color', verde);

});

$("#to-red").click(function(){
    var Rojo = "CSS/Rojo.css";
    theme.attr("href", Rojo );
    localStorage.setItem('color', Rojo);

});
$("#to-blue").click(function(){
    var azul = "CSS/azul.css";
    theme.attr("href", azul);
    localStorage.setItem('color', azul);

});


theme.attr("href", listo);


//subir 
$(".subir").click(function(e){

    e.preventDefault();

    $('html, body').animate({
        scrollTop:0
    }, 1000);

    return false;
});

// validacion del usuario en el localStorage



$("#login form").submit(function(){
         var form_name = $("#user").val();
         localStorage.setItem("user:" , form_name);
      
});

var user= localStorage.getItem("user:");
var parrafo =$("#about p");



if(user != null && user != "undefined" && user.trim() !=null && user.length != 0 ){
    parrafo.html("<br><Strong> BIENVENIDO: " +user  +" </Strong>" +"<br>");
   
   parrafo.append("<a href='#' id='salir' id='salir'> CERRAR SESION  </a>" +"<br>");
    $("#salir").css("display", "block"); 
    $("#salir").css("cursor", "point"); 
    $("#salir").css("margin-top", "10px"); 

    $("#login").hide();

    $('#salir').click(function() {
        localStorage.clear();
        location.reload();
    });

}
   
 




        
    });
    


});
