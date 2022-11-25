
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenidos a Tienda Ropita!"}/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
