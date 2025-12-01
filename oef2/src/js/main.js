// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Hier zie je mooi:
•	NewsModule publiceert "NEWS" events.
•	NewsUIModule abonneert zich op "NEWS" en rendert.
•	Geen enkele rechtstreekse koppeling tussen de twee modules.
*/
// NotificationCenter (EventBus)


// UIModule: observer
const opslag = (function () {

    let items = [];

    function bewaarMeldingen(email, pop) {



    }
    function toonMeldingen (){

    }



    function render() {
       const out= document.querySelector("#notify_output");

    }

    return {
        bewaarMeldingen,
        toonMeldingen
    };

})();

// UI events
document
    .querySelector("#btn_notify_show")
    .addEventListener("click", () => toonMeldingen);

document
    .querySelector("#btn_notify_save")
    .addEventListener("click", () => bewaarMeldingen);

// initialiseren
NewsUIModule.init();
