<<<<<<< HEAD
import { Container, Carousel } from 'react-bootstrap'
import crops_img from "../utils/img/crops.png"
import orange_img from "../utils/img/orange.png"
import flower_img from "../utils/img/flower.png"
=======
// import { Container, Carousel} from 'react-bootstrap'
// import crops_img from "../utils/img/crops.png"
// import orange_img from "../utils/img/orange.png"
// import flower_img from "../utils/img/flower.png"
import './Home.css'
>>>>>>> b7adedf (Image Section)

const Page = () => {
    return (
        <>
        <div className='home-page'>
            <header className='w-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <h2 className='mb-0 text-white fw-bold'>Welcome to</h2>
                            <h1 className='mb-5 text-white fw-bold text-center text-sm-start'>Bluemoon Exporters</h1>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        {/*
        <Container>
            <Carousel className='text-light'>
                <Carousel.Item>
                    <img className='d-block w-100' src={crops_img} alt='First slide'/>
                    <Carousel.Caption>
                        <h3>Premium Quality Coffee Beans</h3>
                        <p>Discover the rich aroma and bold flavor of our premium quality coffee beans. Sourced from the finest coffee plantations, our beans are carefully selected and processed to ensure the highest standards of excellence. Perfect for coffee enthusiasts and connoisseurs, our coffee beans are exported globally, bringing a taste of perfection to every cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={orange_img} alt='Second slide'/>
                    <Carousel.Caption>
                        <h3>Fresh Fruits</h3>
                        <p>Experience the burst of freshness with our export-quality citrus fruits. Our oranges, lemons, and grapefruits are grown in sun-kissed orchards, ensuring they are packed with flavor and nutrients. Handpicked and meticulously packaged, our citrus fruits reach international markets in peak condition, providing a refreshing and healthy option for consumers worldwide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={flower_img} alt='Third slide'/>
                    <Carousel.Caption>
                        <h3>Organic Avocados</h3>
                        <p>Our avocados are organically grown in lush, nutrient-rich soils, ensuring the best taste and health benefits.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        */}
        </>
    )
}

export default Page