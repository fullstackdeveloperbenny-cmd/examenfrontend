// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js



const opslag = (function () {

    let items = [];

    function bewaarMeldingen() {



    }
    function toonMeldingen (){

        render();
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


