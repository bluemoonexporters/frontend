import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { HomePage, OrderPage, AboutPage, ContactPage } from './Pages'
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand'>Bluemoon Exporters</Link>            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>            
              <Nav className="me-auto justify-content-end w-100">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/order">Order</Nav.Link>
                  <Nav.Link href="/about_us">About Us</Nav.Link>
                  <Nav.Link href="/contact_us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/about_us' element={<AboutPage/>}/>
      <Route path='/contact_us' element={<ContactPage/>}/>
    </Routes>

    <footer>
      <p className='p-3 m-0 text-center'>copyright @ 2024 Bluemoon Exporters. All Rights Reserved.</p>
    </footer>
  </>
  );
}

export default App;
