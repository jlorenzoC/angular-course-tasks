$(function () {
  $(window).scroll(function () {
    showHide();
  });

  function showHide() {
    if ($(window).scrollTop() > 50) {
      $('.btn-back-to-top').fadeIn();
    } else {
      $('.btn-back-to-top').fadeOut();
    }
  }
});
