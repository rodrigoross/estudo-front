/**
   * ------------------------------------------------------------------------
   * Javascript por Rodrigo Ross
   * ------------------------------------------------------------------------
   */


$(document).ready(function(){
	"use strict";
    // Activate Carousel
    $("#banner-carousel").carousel();

    // Enable Carousel Indicators
    $(".item-carousel").click(function(){
       $(".carousel").carousel(0);
    });
    $(".item-carousel").click(function(){
        $(".carousel").carousel(1);
    });
    $(".item-carousel").click(function(){
        $(".carousel").carousel(2);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $('.carousel').carousel("prev");
   });
    $(".right").click(function(){
        $('.carousel').carousel("next");
    });

	//Troca da imagem no hover
	function hover(element) {
        element.setAttribute('src', '../images/icons/icone-facebook-hover.png');
      };
      
      function unhover(element) {
        element.setAttribute('src', '../images/icons/icone-facebook2.png"');
      };										 
});