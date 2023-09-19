$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.centered_title').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
  });