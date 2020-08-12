$( document ).ready(function() {
  // Hamburguer menu
  $(".menu-toggle").click(function() {
    $("nav").toggleClass("open");
    $(".hamburguer").toggleClass("open");
  });
  $(".menuitem").click(function() {
    $("nav").removeClass("open");
    $(".hamburguer").removeClass("open");
  });
  
  //Waypoints
  var itemIndex;
  $('.menuitem').on('click', function (event) {
    event.preventDefault();
    itemIndex = $(this).attr('href');
    $('body, html').animate({scrollTop: $(itemIndex).offset().top - 0}, 1000)
  });
});