import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'


function App() {
  const welcomeMessage = '¡Bienvenido a nuestra tienda!'
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes> 
            <Route path="/" element={<ItemListContainer welcomeMessage={welcomeMessage}/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            
          </Routes>
        </BrowserRouter>
   
    </>
  )
}

export default App
