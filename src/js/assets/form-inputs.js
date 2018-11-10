export default function formInputs() {
    let inputs = [];
    const form = document.querySelector('.contact__form-container');

    inputs = inputs.concat(Array.from(document.querySelectorAll('.contact__input')));
    inputs.push(document.querySelector('.contact__message'));

    const onInputBlurHandler = (e) => {
        const field = e.currentTarget;

        if (field.value.length > 0) {
            field.classList.add('contact__input--filled');
        } else {
            field.classList.remove('contact__input--filled');
        }
    };

    inputs.forEach( input => {
        input.addEventListener('blur', onInputBlurHandler);
    });

    const onClearBtnClickHandler = (e) => {
        e.preventDefault();
        if (e.target.closest('.contact__clear-field')) {
            const input = e.target.closest('.contact__field').querySelector('input');

            if (input.value.length === 0) {
                return;
            }
            
            input.value = '';
            input.focus();
        } else {
            return;
        }
    };

    form.addEventListener('click', onClearBtnClickHandler);
}