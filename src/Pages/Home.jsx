import { Container, Carousel} from 'react-bootstrap'
import crops_img from "../utils/img/crops.png"
import orange_img from "../utils/img/orange.png"
import flower_img from "../utils/img/flower.png"

const Page = () => {
    return (
        <>
        <Container>
            <Carousel class="text-light">
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
        </>
    )
}

export default Page