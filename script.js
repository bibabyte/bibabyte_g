
$(window).scroll(function(){
  $('.web').addClass('headMov');
  $('.design').addClass('headMov');
  $('.logo_head').removeClass('logo_hid');

  $(document).off('scroll');

$('.header').addClass('headMov2');


  setTimeout(() => {


    $('.design').addClass('headMov2').fadeIn(1000);
  }, 1500);




});
