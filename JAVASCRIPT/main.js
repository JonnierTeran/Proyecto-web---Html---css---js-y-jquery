'use strict'

        //cargar js arriba
window.addEventListener('load', function(){

    // documento jquery
    $(document).ready(function(){

        

        // Galeria Slidder
        $('.gal').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            auto: true,
            speed: 500
          });

 //post - secciones de los articulos / Contenido

 var posts = new Array(
    {
        title: "Prueba de titulo 1",
        date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
    },
    {
        title: "Prueba de titulo 2",
        date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."},
    {
        title: "Prueba de titulo 3",
        date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."},
    {
        title: "Prueba de titulo 4",
        date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."},
    {
        title: "Prueba de titulo 5",
        date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."}
 );

 // recorer el array de obj json y guardar la informacion del post y adjuntarla en el div  con esa estructura
posts.forEach((item, index) =>{
    var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer más</a>
        </article>    
    `;
    $("#posts").append(post);
});

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


