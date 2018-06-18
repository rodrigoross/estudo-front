$(document).ready(function(){
	"use strict";
    // Activate Carousel
    $("#banner-carrossel").carousel();
    
    // Enable Carousel Indicators
    $(".item-carrossel").click(function(){
       $(".carrossel").carousel(0);
    });
    $(".item-carrossel").click(function(){
        $(".carrossel").carousel(1);
    });
    $(".item-carrossel").click(function(){
        $(".carrossel").carousel(2);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $('.carrossel').carousel("prev");
   });
    $(".right").click(function(){
        $('.carrossel').carousel("next");
    });
});

