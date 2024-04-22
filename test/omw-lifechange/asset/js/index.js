$(document).ready(function () {
  $('.preview-modal .modal-slide').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.preview-modal .modal-slide .slick-arrow').html('');
  $('.preview-modal .modal-slide .slick-dots li').html('');

  $('.preview-modal .modal-next-button').on('click', function () {
    $('.preview-modal .modal-slide').slick('slickGoTo', 1);
  });
});