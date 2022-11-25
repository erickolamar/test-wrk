$(document).ready(function(){

  function slide(){
    var currentSlide=$('ul.video').find('li').first();
    var nextSlide=currentSlide.next();
    if(nextSlide.length){
     var videoPlay= currentSlide.find('video').attr('autoplay','true');
     videoPlay.on('ended',function(){
      currentSlide.find('video').removeAttr('autoplay');
      $('ul.video').append(currentSlide);
    
    });
    
    }
  }
  setInterval(slide,10);
});
 