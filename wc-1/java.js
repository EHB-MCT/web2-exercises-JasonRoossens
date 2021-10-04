window.onload = function () {
    console.log('loaded');

    document.getElementById('form')
        .addEventListener('submit', event => {
            event.preventDefault();

            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let order = document.getElementById('order').value;

            document.getElementById('message').innerHTML =
                `The order for the customer <b>${name}</b> is the following:  <b>${order}</b>. The customer may be notified by email: <b>${email}</b>`;
        });
};