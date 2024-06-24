import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { HomePage, OrderPage, AboutPage, ContactPage } from './Pages'
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar>
        <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand'>Bluemoon Exporters</Link>            
            </Navbar.Brand>
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

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/about_us' element={<AboutPage/>}/>
      <Route path='/contact_us' element={<ContactPage/>}/>
    </Routes>

    <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>copyright @ 2024 Bluemoon Exporters. All Rights Reserved.</p>
    </footer>
  </>
  );
}

export default App;
