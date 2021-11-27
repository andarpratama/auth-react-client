import { Link } from "react-router-dom"

const Login = () => {
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-5 mx-auto">
                    <form className="py-5 px-5 shadow" style={{borderRadius: '12px'}} >
                        <h4 className="h4 text-center">Login</h4>
                        <h2 className="mb-5 text-center" >Wakkai Josei</h2>
                        <div class="mb-4">                        
                            <input type="email" class="form-control py-2" style={{borderRadius: '12px'}} placeholder="Email address / Username" />
                        </div>
                        <div class="mb-4">
                            <input type="password" class="form-control py-2" style={{borderRadius: '12px'}} placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-4 py-2 text-uppercase fw-bold" style={{borderRadius: '12px'}}>Login</button>
                        <div className="text-center" >
                            <Link to="/register" className="text-decoration-none text-dark" >Dont have account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login