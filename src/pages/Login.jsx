import React from "react";
import { Link } from "react-router-dom";
import { AuthLogin } from "../services/Auth";
import { useNavigate } from "react-router";
import swal from 'sweetalert';


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    
    handleLogin = (e) => {
        e.preventDefault()
        
        const authLogin = AuthLogin(this.state);
        if(authLogin.name === 'invalid'){
            swal("Failed", "Some input is invalid!", "warning");
        } else if(authLogin.name === 'not registered') {
            swal("Oh no!", "Account is not registered!", "error");
        } else {
            this.props.navigate('/')
            swal("Success!", "You are loged!", "success");
        }
    }
    
    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-5 mx-auto">
                        <form className="py-5 px-5 shadow" style={{borderRadius: '12px'}} >
                            <h4 className="h4 text-center">Login</h4>
                            <h2 className="mb-5 text-center" >Wakkai Josei</h2>
                            <div className="mb-4">                        
                                <input type="email" onChange={this.handleEmail} id="email" className="form-control py-3" style={{borderRadius: '14px'}} placeholder="Email address / Username" />
                                <div className="invalid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="mb-4">
                                <input type="password" onChange={this.handlePassword} id="password" className="form-control py-3" style={{borderRadius: '14px'}} placeholder="Password" />
                                <div className="invalid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <button onClick={(e) => this.handleLogin(e)} type="submit" className="btn btn-primary w-100 mb-4 py-3 text-uppercase fw-bold" style={{borderRadius: '14px'}}>Login</button>
                            <div className="text-center" >
                                <Link to="/register" className="text-decoration-none text-dark" >Dont have account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}


export default WithNavigate;