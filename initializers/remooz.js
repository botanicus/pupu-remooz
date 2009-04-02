// yep, it really requires load event, don't know why
window.addEvent('load', function() {
  // Assigns ReMooz behavior to all anchors with the .remooz class
  // ReMooz.assign();
 
  // Or assign ReMooz "by hand"
  $$('.remooz').each(function(element) {
    alert(element)
   // Constructor, takes the element and options as arguments
   new ReMooz(element, {
     centered: true, // Zoom the center of the screen
     origin: element.getElement('img') // Take the image inside as origin for the zooming element
   });
  });
});