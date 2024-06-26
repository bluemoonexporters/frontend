import { Link } from 'react-router-dom';
import logo from "../utils/img/logo192.png"

const Component = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo" width="30" height="24"></img>
                        <Link to="/" className='navbar-brand text-uppercase fw-bold'> Bluemoon <span className='text-primary'>Exporters</span></Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/about_us">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact_us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Component