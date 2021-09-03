$(function() {
  $('#page-top').click(function() {
    var position = 0;
    var speed = 500;
    $('body,html').animate({ scrollTop:position }, speed, 'swing');
   return false;
  });
});