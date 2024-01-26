import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/detalle/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/carrito' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
