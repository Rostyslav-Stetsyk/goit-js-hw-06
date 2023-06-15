const formRef = document.querySelector('form.login-form');
const formData = {}

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(even) {
    even.preventDefault();
    const { email, password } = even.currentTarget.elements;
    if (email.value !== '' && password.value !== '') {
        formData.email = email.value;
        formData.password = password.value;
        console.log(formData);
        even.currentTarget.reset();
    } else {
        window.alert('You need fill in all the fiels!')
    }
}