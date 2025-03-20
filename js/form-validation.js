document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Al menos 8 caracteres, al menos una letra y un número
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        let error = formGroup.querySelector('.error-message');
        
        if (!error) {
            error = document.createElement('div');
            error.className = 'error-message';
            error.style.color = 'red';
            error.style.fontSize = '0.8rem';
            error.style.marginTop = '0.3rem';
            formGroup.appendChild(error);
        }
        
        error.textContent = message;
        input.style.borderColor = 'red';
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            formGroup.removeChild(error);
        }
        input.style.borderColor = '';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Limpiar errores previos
        form.querySelectorAll('input, select, textarea').forEach(element => {
            clearError(element);
        });

        // Validar nombre
        const nombre = document.getElementById('nombre');
        if (!nombre.value.trim()) {
            showError(nombre, 'El nombre es obligatorio');
            isValid = false;
        }

        // Validar apellidos
        const apellidos = document.getElementById('apellidos');
        if (!apellidos.value.trim()) {
            showError(apellidos, 'Los apellidos son obligatorios');
            isValid = false;
        }

        // Validar email
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError(email, 'El email es obligatorio');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'El email no es válido');
            isValid = false;
        }

        // Validar usuario
        const user = document.getElementById('user');
        if (!user.value.trim()) {
            showError(user, 'El usuario es obligatorio');
            isValid = false;
        }

        // Validar contraseña
        const pass = document.getElementById('pass');
        const passConfirm = document.getElementById('pass-confirm');
        if (!pass.value) {
            showError(pass, 'La contraseña es obligatoria');
            isValid = false;
        } else if (!validatePassword(pass.value)) {
            showError(pass, 'La contraseña debe tener al menos 8 caracteres, una letra y un número');
            isValid = false;
        } else if (pass.value !== passConfirm.value) {
            showError(passConfirm, 'Las contraseñas no coinciden');
            isValid = false;
        }

        // Validar país
        const pais = document.getElementById('pais');
        if (!pais.value) {
            showError(pais, 'Debe seleccionar un país');
            isValid = false;
        }

        // Validar fumador
        const fumadorOptions = form.querySelectorAll('input[name="fumador"]');
        let fumadorSelected = false;
        fumadorOptions.forEach(option => {
            if (option.checked) fumadorSelected = true;
        });
        if (!fumadorSelected) {
            showError(fumadorOptions[0], 'Debe seleccionar una opción');
            isValid = false;
        }

        if (isValid) {
            // Aquí iría el código para enviar el formulario
            alert('Formulario validado correctamente');
            form.reset();
        }
    });
});