import { Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from "../utils/img/logo192.png"

const Component = () => {
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" width="30" height="24"></img>
                        <Link to="/" className='navbar-brand text-uppercase fw-bold'> Bluemoon <span className='text-primary'>Exporters</span></Link>            
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Component