$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 2,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      navigation : true, // Show next and prev buttons
       autoWidth:true


      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});
