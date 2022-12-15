import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
