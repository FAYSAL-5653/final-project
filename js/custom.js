$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    // padding:20,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


// touggle manu

$('.nav-icon').on('click', function(){
    $('.manu ul').toggle();
});


$(window).resize(function (){  
    let reSize = $(window).width() 
    if(reSize> 1100 ){
        
        $('.manu ul').removeAttr('style')
    }
    if(reSize> 992 ){
        
        $('.manu ul').removeAttr('style')
    }
    if (reSize> 776 ) {

        $('.manu ul').removeAttr('style') 
    }
     if(reSize> 576){

        $('.manu ul').removeAttr('style')
    }
    
});


// top-up-icon

$('.top-btn').on('click',function(){
     $('html').animate({scrollTop : 0});
});


