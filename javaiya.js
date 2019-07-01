$(function(){
  $('.jabara').click(function(){
    var $blo=$(this).next('.block');
    var $jab=$(this);

    if($jab.hasClass('open')){
      $jab.removeClass('open');
      $jab.find('span').text('＋');
      $blo.slideUp(1000);
    }else{
      $jab.addClass('open');
      $jab.find('span').text('－');
      $blo.slideDown(1000);
    }

  });
});
