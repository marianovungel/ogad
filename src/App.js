import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Sobre from './Screens/Sobre/Sobre';
import Projeto from './Screens/Projeto/Projeto';
import Atual from './Screens/Atual/Atual';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home /> } exact />
            <Route path="/sobre" element={<Sobre /> } exact />
            <Route path="/projeto" element={<Projeto /> } exact />
            <Route path="/atualidade" element={<Atual /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
