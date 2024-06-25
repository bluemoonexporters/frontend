import { Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Component = () => {
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                    <Link to="/" className='navbar-brand text-uppercase fw-bold'>Bluemoon <span className='text-primary'>Exporters</span></Link>            
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Component