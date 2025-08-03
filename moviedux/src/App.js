import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid'

function App() {
  return (
    <div className="App">
      
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
