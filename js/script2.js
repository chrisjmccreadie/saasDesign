$(function() {
    $('.widgets .widget-container:nth-child(even)').addClass('even');
    $('.widgets .widget-container:nth-child(odd)').addClass('odd');
  doslides();
});

function doslides()
{
  $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 600,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: false,    // Boolean: Pause when hovering controls, true or false
    slideEffect: false,
    prevText: '<span class="carousel-control"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></span>',   // String: Text for the "previous" button
    nextText: '<span class="carousel-control"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></span>',  // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "centered-btns",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){},     // Function: After callback
  });
}