
$(window).scroll(function(){
  $('.web').addClass('headMov');
  $('.design').addClass('headMov');

  $(document).off('scroll');
  // $('.header').removeClass('.headMov');
  $('.header').addClass('headMov2');

  setTimeout(() => {


    $('.design').addClass('headMov2').fadeIn(1000);
  }, 1500);


  // $('.header').addClass('headMov').delay(50000);



  /*
$('.headMov').addEventListener('transitionend', function() {
              $('#header_nav').addClass('headMov');
            }); */



});
