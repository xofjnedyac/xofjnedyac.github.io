const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Enable Auto Play
    autoplay: {
        delay: 5000,
    },
    
  });

  function navToggle() {
    document.getElementById("primaryNav").classList.toggle("open");
  }

  const hamBone = document.getElementById('hamBone');

  hamBone.onclick = navToggle;