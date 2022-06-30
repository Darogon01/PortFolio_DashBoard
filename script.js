//Funcion para que aperezca a menos de 991px barras de navegación superiores ("la hamburguesa")

$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

//función para cuando el usuario se pesplaza mas de 0 del viewport apareza el cohete para volver al inicio del HTML 
  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 100){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling o desplazamiento sueave  por el HTML

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
