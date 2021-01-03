var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      });

      jQuery("document").ready(function($){
     
        var nav = $('.nav-container');
         
        $(window).scroll(function () {
            if ($(this).scrollTop() > 136) {
                nav.addClass("f-nav");
            } else {
                nav.removeClass("f-nav");
            }
        });
      
    });

    var mySwiper = new Swiper('.swiper-container', { autoplay: { delay: 1500, }, });