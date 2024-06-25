import React from "react";

const Page = () => {

    return (
        <>
            <div className="container">
                <h4 className="text-primary text-center">ABOUT US</h4><br/>
                <p className="fst-italic">
                    BlueMoon Exporters is a leading entity in the agriculture export sector, dedicated to delivering high-quality agricultural products from India to global markets. With a firm commitment to excellence and sustainability, BlueMoon Exporters specializes in sourcing and exporting a diverse range of agricultural commodities, including grains, spices, fruits, and vegetables. Our extensive network of farmers and suppliers ensures that we maintain stringent quality standards from farm to table, adhering to international regulations and certifications. At BlueMoon Exporters, we leverage our deep industry expertise and logistics capabilities to provide reliable and timely delivery, meeting the diverse needs of our global clientele. Our mission is to foster enduring partnerships, promote agricultural excellence, and contribute to the global food supply chain responsibly.
                </p>
                <div className="row py-5">
                    <div className="col-12 col-md-6">
                        <h5 className="text-primary text-center"><i class="bi bi-people-fill"></i> Mission</h5>
                        <p className="fst-italic">
                            "At BlueMoon Exporters, our mission is to deliver the finest agricultural products from India to the world, ensuring unparalleled quality and sustainability. We are dedicated to supporting our farmers, preserving the environment, and enhancing the well-being of our global community through ethically sourced and meticulously handled produce."
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5 className="text-primary text-center"><i class="bi bi-search"></i> Vision</h5>
                        <p className="fst-italic">
                            "Our vision is to be a global leader in agricultural exports, known for our commitment to quality, innovation, and sustainability. We strive to create lasting partnerships with customers and communities worldwide, fostering growth and prosperity through the excellence of Indian agriculture."
                        </p>
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