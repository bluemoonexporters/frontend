import potato from "../utils/img/potato.jpg"
import onion from "../utils/img/onions.jpg"
import pepper from "../utils/img/pepper.jpg"
import veg from "../utils/img/vegetable.png"

const Component = () => {
    return(
        <div style={{backgroundColor: "#f3f6fa"}}>
            <div className="container">
                <h3 className="text-center text-primary py-5">WHAT DO WE DELIVER ?</h3>
                <div class='row text-center'>
                    <div className="col-6 col-lg-3">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={potato} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Potato</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={onion} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Onions</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={pepper} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Chili</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={veg} alt="Card"/>
                            <div class="card-body">
                                <h5>Other Agricultural Products</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Component