$(window).on('load', function () {
  // 슬라이드 set
  const chatMSGSlide = new Swiper('.chat-msg-slide .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      prevEl: '.chat-msg-slide .slide-arrow-prev',
      nextEl: '.chat-msg-slide .slide-arrow-next',
    },
  });

  // 슬라이드 click
  $('.chat-result').on('click', function () {
    $('.chat-result-modal').addClass('show');
  });

  // 챗 submit
  $('.chat-form').on('submit', function (e) {
    e.preventDefault();
    alert('chat submit');
  });
});