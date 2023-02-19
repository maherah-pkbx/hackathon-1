(function($){
  
  $(document).ready(function() { 

    // Cart Slide Down
    var $cartToggle = $('.js-toggle-cart');
    var performCartToggle = function() {
      $('.cart').toggleClass('show-cart');
    };
    $cartToggle.on( 'click', performCartToggle );    
  

  }); // Document Ready

})(jQuery); 