import React from "react"
import { Link } from "react-router-dom"
import { AuthRegister } from "../services/Auth"

class Register extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
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

    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-5 mx-auto">
                        <form className="py-5 px-5 shadow" style={{borderRadius: '12px'}} >
                            <h4 className="h4 text-center">Register</h4>
                            <h2 className="mb-5 text-center" >Wakkai Josei</h2>
                            <div className="mb-4">                        
                                <input type="text" onChange={this.handleName} id="name" className="form-control py-2" style={{borderRadius: '12px'}} placeholder="Name" />
                            </div>
                            <div className="mb-4">                        
                                <input type="email" onChange={this.handleEmail} id="email" className="form-control py-2" style={{borderRadius: '12px'}} placeholder="Email address / Username" />
                            </div>
                            <div className="mb-4">
                                <input type="password" onChange={this.handlePassword} id="password" className="form-control py-2" style={{borderRadius: '12px'}} placeholder="Password" />
                            </div>
                            <button type="button" onClick={(e) => {AuthRegister(e, this.state)}} className="btn btn-primary w-100 mb-4 py-2 text-uppercase fw-bold" style={{borderRadius: '12px'}}>Login</button>
                            <div className="text-center" >
                                <Link to="/login" className="text-decoration-none text-dark" >Have account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register