// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
* Module met:
•	privé total
•	add(amount), subtract(amount), reset()
•	centrale render()
*/
const Ex2CalculatorModule = (function () {

    let total = 0;

    function add(amount) {
        total += amount;
        render();
    }


    function reset() {
        total = 0;
        render();
    }

    function render() {
        document.querySelector("#time_display").textContent = total;
    }

    return {
        add,
        reset
    };

})();

// events koppelen
document
    .querySelector("#btn_brief")
    .addEventListener("click", () => Ex2CalculatorModule.add(7));

document
    .querySelector("#btn_shift")
    .addEventListener("click", () => Ex2CalculatorModule.add(33));


document
    .querySelector("#btn_zero")
    .addEventListener("click", Ex2CalculatorModule.reset);
