import { Container, Nav, Navbar} from 'react-bootstrap'

const Component = () => {
    return(
        <>
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>            
                    <Nav className="me-auto justify-content-end w-100">
                        <Nav.Link href="/" className='active text-uppercase fw-bold'>Home</Nav.Link>
                        <Nav.Link href="/order" className='text-uppercase fw-bold'>Order</Nav.Link>
                        <Nav.Link href="/about_us" className='text-uppercase fw-bold'>About Us</Nav.Link>
                        <Nav.Link href="/contact_us" className='text-uppercase fw-bold'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Component