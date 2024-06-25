import potato from "../utils/img/potato.jpg"
import onion from "../utils/img/onions.jpg"
import pepper from "../utils/img/pepper.jpg"

const Component = () => {
    return(
        <>
            <div className="container">
                <h3 className="text-center text-primary mt-5 pb-5">WHAT DO WE DELIVER ?</h3>
                <div class='row text-center'>
                    <div className="col-md-4">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={potato} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Potato</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={onion} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Onions</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card m-2" style={{Width: '18rem'}}>
                            <img class="card-img-top" src={pepper} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title">Chili</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-center">And every other kind of agricultural products.</h6>
            </div>
        </>
    )
}

export default Component