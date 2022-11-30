
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Prueba from './components/Prueba';
import Textito from './components/Textito';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenidos a Tienda Ropita!"}/>
      <Carousel/>
      <Footer/>
      <Prueba>
        <Textito/>
      </Prueba>
    </div>
  )
}

export default App;
