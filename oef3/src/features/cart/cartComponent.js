// =========================
// features/cart/cartComponent.js
// =========================

export const CartComponent = (function () {

    function render(items, total) {
        renderList(items);
        renderTotal(total);
    }



    function renderList(items) {
        const ul = document.querySelector('#log_list');
        if (!ul) return;

        ul.innerHTML = items
            .map(item => `
                <li class="list-group-smal">
                  <span>${item.name}</span>
                  <span>€${item.price}</span>
                </li>
            `)
            .join('');
    }

    function renderTotal(total) {
        const ul2 = document.querySelector('#totals_list');
        if (!ul2) return;

        ul2.innerHTML = items
            .map(item => `
                <li class="list-group-smal">
                  <span>€${item.price}</span>
                </li>
            `)
            .join('');
    }

    return {
        render
    };
})();
