import img from "../utils/img/world-map.png"

const Component = () => {
    return(
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-md-6 order-md-2">
                        <br/><br/>
                        <h3 className="text-center text-primary mt-5 pt-5">WHERE DO WE DELIVER ?</h3>
                        <p className="text-muted mt-5">We deliver all over the world.</p>
                    </div>
                    <div className="col-12 col-md-6 order-md-1">
                        <img className="my-5 w-100" src={img} alt="world map" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component