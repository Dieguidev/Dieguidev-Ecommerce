import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <ItemListContainer text='Bienvenidos a la ecommerce de Dieguidev' />
      </body>
    </div>
  );
}

export default App;
