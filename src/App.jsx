import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const welcomeMessage = '¡Bienvenido a nuestra tienda!'
  return (
    <>
      
        <NavBar />
        <ItemListContainer welcomeMessage={welcomeMessage} />
   
    </>
  )
}

export default App
