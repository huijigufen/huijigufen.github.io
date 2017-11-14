(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.dropdown-button').dropdown(
      {
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true, // Constrains width of dropdown to the activator
        hover: true,
        gutter: 0, // Spacing from edge
        belowOrigin: true,
        alignment: 'left',
        stopPropagation: false
      }
    );

  }); // end of document ready
})(jQuery); // end of jQuery name space