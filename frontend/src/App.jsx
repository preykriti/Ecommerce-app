
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Orders from './pages/Orders';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App