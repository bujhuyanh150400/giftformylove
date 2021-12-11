$(document).ready(function(){
    $('.slide-img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });

  const showBtn = document.querySelector('.js-CV')
  const modal = document.querySelector('.js-modal')
  const modalContainer = document.querySelector('.js-modal-container')
  const modalClose = document.querySelector('.js-modal-close')
  
  function showmyCV () {
      modal.classList.add('open')
  }
  
  function hidemyCV () {
      modal.classList.remove('open')
  }
  showBtn.addEventListener('click', showmyCV )
  
  modalClose.addEventListener('click', hidemyCV )
  
  modal.addEventListener('click', hidemyCV )
          
  modalContainer.addEventListener('click', function (event) {
      event.stopPropagation()
  })