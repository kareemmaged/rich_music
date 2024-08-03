$(document).ready(function () {
  $(".hdr").hover(function () {
    $(this).next().slideToggle();
  });

  $(document).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".arw_up").fadeIn(100);
    } else {
      $(".arw_up").fadeOut(100);
    }
  });
});
