

$(document).ready(function(){ // This to make the slide of the upperbutton that appear in small and extra small screens
    $('button.slide-button').click(function(){
        $('div.right-slider').slideToggle();
    });
});


/* Start navbar */

var aboutButton = document.getElementById('about-nav'),
    teamButton = document.getElementById('team-nav'),
    workButton = document.getElementById('work-nav'),
    contactButton = document.getElementById('contact-nav'),
    goldenLap = document.getElementById('golden-lap'),
    learnToday = document.getElementById('learn-today');

/* End navbar */



/* Start Upper Slide button */
var aboutSlider = document.getElementById('about-slider'),
    teamSlider = document.getElementById('team-slider'),
    workSlider = document.getElementById('work-slider'),
    contactSlider = document.getElementById('contact-slider'),
    upperSlider = document.getElementById('upper-slider');

aboutSlider.onclick = function() {
    'use strict';
    window.scrollTo(0, 600);
    upperSlider.setAttribute('style', 'display:none;');
}

teamSlider.onclick = function() {
    'use strict';
    window.scrollTo(0, 2640);
    upperSlider.setAttribute('style', 'display:none;');
}

workSlider.onclick = function() {
    'use strict';
    window.scrollTo(0, 5040);
    upperSlider.setAttribute('style', 'display:none;');
}

contactSlider.onclick = function() {
    'use strict';
    window.scrollTo(0, 7481);
    upperSlider.setAttribute('style', 'display:none;');
}

/* End Upper Slide button */
