$.fn.extend({
  fooTip: function(content) {
    element = $(this)
    element.mouseover(function() {
      element.append("<span class='footip'>" + content + "</span>");
    });
    element.mouseleave(function() {
      $('.footip').remove();
    });
  }
});
