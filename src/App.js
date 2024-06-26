import './App.css';
import { HomePage, OrderPage, AboutPage, ContactPage } from './Pages'
import { Footer, Navigation } from './Components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/about_us' element={<AboutPage/>}/>
        <Route path='/contact_us' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
