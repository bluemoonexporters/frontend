import './App.css';
import { HomePage, OrderPage, AboutPage, ContactPage } from './Pages'
import { Header } from './Components';
// import Footer from './Components/Footer'
import Navigation from './Components/Navigation'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/about_us' element={<AboutPage/>}/>
        <Route path='/contact_us' element={<ContactPage/>}/>
      </Routes>
      {/* <Footer/> */}
      <footer style={{ backgroundColor:"#d4d4d4"}}>
        <p className='p-3 m-0 text-center'>Copyright @ 2024 Bluemoon Exporters. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
