$(document).ready(function(){
  $('.scroll').animate({ // call animate function on elements with class="scroll"
     right: $(document).width() // animates right value from the original -200px(from css) to the documents width(ie if elements right value = the document width, then element is off screen)
  }, 20000); // 3000 is duration in milliseconds (ie 3 seconds)

});