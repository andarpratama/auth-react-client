let valid = false;

export const FormValidation = {
    required: (name, value) => {
        if(value === ""){
            setError(name, 'is required')
        } else {
            setSuccess(name)
        }   
    },

    email: (name, value) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) { 
            setSuccess(name)
        } else {
            setError(name, 'is not valid')
        }
    },


    minLength: (name, value, length) => {
        console.log(value.length)
        console.log(length)
        if(value.length >= length){
            setSuccess(name)
        } else {
            setError(name, 'must be ' + length + ' character');
        }
    }

}

export const isValid = () => {
    return valid;
}

const setError = (name, msg) =>{
    const feedbackText = document.getElementById(name).nextElementSibling;
    if(feedbackText.classList.contains('invalid-feedback')){
        console.log('ada');
    } else {
        console.log('no');
    }

    document.getElementById(name).classList.remove('is-valid')
    document.getElementById(name).classList.add('is-invalid')
    document.getElementById(name).nextElementSibling.classList.remove('valid-feedback')
    document.getElementById(name).nextElementSibling.classList.add('invalid-feedback')
    document.getElementById(name).nextElementSibling.innerText = toCapitalize(name) + ' ' + msg
    valid = false;
}

const setSuccess = (name) =>{
    document.getElementById(name).classList.remove('is-invalid')
    document.getElementById(name).classList.add('is-valid')
    document.getElementById(name).nextElementSibling.classList.remove('invalid-feedback')
    document.getElementById(name).nextElementSibling.classList.add('valid-feedback')
    document.getElementById(name).nextElementSibling.innerText = 'This is good!'
    valid = true;
}

function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}