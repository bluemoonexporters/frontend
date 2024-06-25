import logo from "../utils/img/logo192.png"

const Footer = () => {
    return (
        <div style={{backgroundColor: "#f3f6fa"}}>
            <div class="container py-4">
                <div class="row">
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3">
                            <img src={logo} alt="logo" width="30" height="24"></img>
                            <span> Bluemoon <span className='text-primary'>Exporters</span></span>
                        </h5>
                        <ul class="list-unstyled text-muted">
                            <li class="list-group-item">
                                <b>Office Address :</b><br/>
                                AS-2, Ashiyana Society, <br/>
                                Sankarpur, Durgapur - 713212 <br/><br/>
                            </li>
                            <li class="list-group-item">
                                <b>Corporate Address :</b><br/>
                                D-139, Yuri Gagarin path,<br/>
                                Bank Colony, Durgapur  <br/><br/>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3">Useful links</h5>
                            <ul class="list-unstyled text-muted">
                                <li class="list-group-item"> </li>
                            </ul>
                        </div>
                    <div class="col-xs-12 col-lg-4">
                        <h5 class="mb-3"> </h5>
                            <ul class="list-unstyled text-muted">
                                <li class="list-group-item"> </li>
                            </ul>
                        </div>
                </div>
            </div>
            <p className='p-3 m-0 text-center'>Copyright @ 2024 Bluemoon Exporters. All Rights Reserved.</p>
        </div>
    )
}

export default Footer