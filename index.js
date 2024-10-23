document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('comments').value;

    if (!name || !email || !comments) {
        alert('Todos los campos son obligatorios');
        event.preventDefault();
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Por favor, ingrese un email válido');
            event.preventDefault();
        }
    }
});