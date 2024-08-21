import chroma from 'chroma-js';

var scale = chroma.scale(['#1abc9c', '#e74c3c']).domain([0, $(document).height()]);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.centered_title').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });

    $('.body').css('background-color', scale(1 - (window.height - window.scrollTop) / window.height));

  });