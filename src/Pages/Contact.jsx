import React from "react";
import { Link } from "react-router-dom"

const Page = () => {

    return (
        <>
            <div className="container">
                <h4 className="text-primary text-center">CONTACT US</h4><br/>
                <div className="fst-italic text-center">
                    <b><i class="bi bi-telephone-fill text-primary"></i> Phone</b><br/>
                    <p>
                        +91 7098313001<br/>
                        +91 8158811863
                    </p>
                    <b><i class="bi bi-building-fill text-primary"></i> Office Address</b><br/>
                    AS-2, Ashiyana Society, <br/>
                    Sankarpur, Durgapur - 713212 <br/><br/>
                    <b><i class="bi bi-buildings-fill text-primary"></i> Corporate Address :</b><br/>
                    D-139, Yuri Gagarin Path,<br/>
                    Bank Colony, Durgapur - 713212 <br/><br/>

                    <b> Social Media Links</b><br/>
                    <div style={{fontSize: '2rem'}}>
                        <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://api.whatsapp.com/send?phone=917098313001"><i class="bi bi-whatsapp"></i></Link>
                        <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://www.facebook.com/profile.php?id=100011200062946"><i class="bi bi-facebook"></i></Link>
                        <Link className="text-decoration-none text-primay p-3" target="_blank" to="https://www.instagram.com/deep_choudhury05"><i class="bi bi-instagram"></i></Link>
                        <Link className="text-decoration-none text-primay p-3" target="_blank" to="mailto:deepchoudhurybai@gmail.com"><i class="bi bi-envelope-at-fill"></i></Link>
                    </div>

                </div>
                <div className="text-center">
                    <a type="button" href="/" class="btn btn-outline-primary btn-lg m-5">Back to Home</a>
                </div>
            </div>
        </>
    )
}

export default Page