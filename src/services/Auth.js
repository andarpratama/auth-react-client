import { FormValidation, isValid } from "./FormValidation";
// import swal from "sweetalert";

export const AuthLogin = (input) => {
    let response = {};
    FormValidation.required('email', input.email);
    FormValidation.email('email', input.email);
    FormValidation.required('password', input.password)
    FormValidation.minLength('password', input.password, 4)
    
    if(isValid()){
        const users = JSON.parse(localStorage.getItem("users"));
        users.forEach(user => {
            if(input.email === user.email){
                response.name = 'registered';
            } else {
                response.name = 'not registered';
            }
        });
        return response
    } else {
        response.name = 'invalid'
        return response
    }

}

export const AuthRegister = (e, input) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    if(users){
        users.push({
            name: input.name,
            email: input.email,
            password: input.password
        })
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = [];
        users.push({
            name: input.name,
            email: input.email,
            password: input.password
        })
        localStorage.setItem("users", JSON.stringify(users));
    }

}