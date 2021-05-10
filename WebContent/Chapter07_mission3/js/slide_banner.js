$(document).ready(function(){
  var visual=$('#brandVisual > ul > li');
  var button=$('#buttonList > li');
  var current=0;
  var setIntervalId;

  button.on({
    click:function(){
      var tg=$(this);
      var i=tg.index();

      button.removeClass('on');
      tg.addClass('on');

      move(i);
    }
  });

  $('#wrap').on({
    mouseover:function(){
        clearInterval(setIntervalId);
    },
    mouseout:function(){
        timer();
    }
  });

  timer();

  function timer(){
      setIntervalId=setInterval(function(){
        var n=current+1;
        if(n == visual.length){
          n=0;
        }

        button.eq(n).trigger('click')
      },5000);
    }

  function move(i){
      if(current == i)
          return;
      var currentE1=visual.eq(current);
      var nextE1=visual.eq(i);

      currentE1.css({left:0}).stop().animate({left:'-100%'});
      nextE1.css({left:'100%'}).stop().animate({left:0});

      current=i;
  }
});
