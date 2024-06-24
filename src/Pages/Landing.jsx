import { Container, Navbar} from 'react-bootstrap'

const Page = () => {
    return (
        <>
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="#home">Bluemoon Exporters</Navbar.Brand>
                {/*
                <Nav className="me-auto justify-content-end">
                    <Nav.Link href="#contact_us">Contact Us</Nav.Link>
                </Nav>
                */}
            </Container>
        </Navbar>
        </>
    )
}

export default Page