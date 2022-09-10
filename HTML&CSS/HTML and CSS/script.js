$(function () {
    $(document).scroll(function () {
      var $nav = $(".header-scrolled");
      $nav.toggleClass('afterscroll ', $(this).scrollTop() > $nav.height());
    });
  })

  $(document).ready(function () {
    $(".fa-brands").hover(
      function () {
        $(this).addClass("fa-fade");
      },
      function () {
        $(this).removeClass("fa-fade");
      }
    );
  });

  $(document).ready(function () {
    $(".fa-angles-down").hover(
      function () {
        $(this).addClass("fa-bounce");
      },
      function () {
        $(this).removeClass("fa-bounce");
      });
  })