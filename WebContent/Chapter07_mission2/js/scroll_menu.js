$(function(){
    var menu=$('#top_menu > ul > li');
    var contents=$('#contents > div');

    menu.click(function(event){
        event.preventDefault();

        var tg=$(this);
        var i=tg.index();

        var section=contents.eq(i);
        var tt=section.offset().top; // section의 위치지정(top으로)

        $('html,body').stop().animate({scrollTop:tt});

    });

    $(window).scroll(function(){
        var sct=$(window).scrollTop();

        contents.each(function(){
          var tg=$(this);
          var i=tg.index();
          if(tg.offset().top<=sct){
            menu.removeClass('on');
            menu.eq(i).addClass('on');
          }
      });

  });
});
