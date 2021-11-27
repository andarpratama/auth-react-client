import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">Authentication</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link to="/login" className="nav-link" >Login</Link>
                    <Link to="/register" className="nav-link" >Register</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar