$('.swiper').each(function(index) {
      let t = $(this); 
    t.addClass('swiepr-' + index);  
     let swiper = new Swiper( t, {    
    autoplay: {     
         delay: 0, //add      
         disableOnInteraction: false,
      },    
      speed: 5000,    loop: true,    loopAdditionalSlides: 1,    slidesPerView: 5,  });});