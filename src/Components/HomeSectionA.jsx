import img from "../utils/img/vegitables_collections.png"

const Component = () => {
    return(
        <>
            <div style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
                <div className="container text-white p-5">
                    <br/>
                    <p class="h3 pt-5 mt-5">Nurturing Nature, Exporting Quality</p>
                    <p class="h2 fw-bold pb-3">Bluemoon <span className="text-primary">Exporters</span></p>
                    <a type="button" class="btn btn-primary text-white btn-lg mb-5" href="https://api.whatsapp.com/send?phone=917098313001"><i class="bi bi-cart-fill"></i> Order Now</a>
                    <br/><br/><br/>
                </div>
            </div>
        </>
    )
}

export default Component