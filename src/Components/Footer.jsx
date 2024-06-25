import { Link } from "react-router-dom"
import logo from "../utils/img/logo192.png"

const Footer = () => {
    return (
        <div style={{backgroundColor: "#f3f6fa"}}>
            <div class="container py-4">
                <div class="row">
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3">
                            <img src={logo} alt="logo" width="30" height="24"></img>
                            <span> BlueMoon <span className='text-primary'>Exporters</span></span>
                        </h5>
                        <ul class="list-unstyled text-muted">
                            <li class="list-group-item">
                                <b><i class="bi bi-building-fill text-primary"></i> Office Address :</b><br/>
                                AS-2, Ashiyana Society, <br/>
                                Sankarpur, Durgapur - 713212 <br/><br/>
                            </li>
                            <li class="list-group-item">
                                <b><i class="bi bi-buildings-fill text-primary"></i> Corporate Address :</b><br/>
                                D-139, Yuri Gagarin Path,<br/>
                                Bank Colony, Durgapur - 713212 <br/><br/>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3">Useful links</h5>
                        <Link className="text-decoration-none text-muted" to="/">Home</Link><br/>
                        <Link className="text-decoration-none text-muted" to="/about_us">About Us</Link><br/>
                        <Link className="text-decoration-none text-muted" to="/contact_us">Contact Us</Link><br/><br/><br/>
                    </div>
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3">Reach Us</h5>
                        <div style={{fontSize: '2rem'}}>
                            <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://api.whatsapp.com/send?phone=917098313001"><i class="bi bi-whatsapp"></i></Link>
                            <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://www.facebook.com/profile.php?id=100011200062946"><i class="bi bi-facebook"></i></Link>
                            <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://www.instagram.com/deep_choudhury05"><i class="bi bi-instagram"></i></Link>
                            <Link className="text-decoration-none text-primay p-3" target="_blank" to="/"><i class="bi bi-envelope-at-fill"></i></Link>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
            <p className='p-3 m-0 text-center'>Copyright @ 2024 Bluemoon Exporters. All Rights Reserved.</p>
        </div>
    )
}

export default Footer