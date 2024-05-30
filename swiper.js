const swiper = new Swiper('.feedback', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
     
  });

  const swiper2 = new Swiper('.brand', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      1028:  { slidesPerView: 6},
      1024: { slidesPerView: 4},
      758: { slidesPerView: 3},
      320: {slidesPerView: 2},
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
     
  });