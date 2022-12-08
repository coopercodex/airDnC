import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
    </div>
  );
}

export default App;
