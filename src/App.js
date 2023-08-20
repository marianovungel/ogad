import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Sobre from './Screens/Sobre/Sobre';
import Projeto from './Screens/Projeto/Projeto';
import Atual from './Screens/Atual/Atual';
import Contato from './Screens/Contato/Contato';
import Colaboradores from './Screens/Colaboradores/Colaboradores';
import Slide from './Components/Slide/Slide';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home /> } exact />
            <Route path="/sobre" element={<Sobre /> } exact />
            <Route path="/temas" element={<Projeto /> } exact />
            <Route path="/atualidade" element={<Atual /> } exact />
            <Route path="/contatos" element={<Contato /> } exact />
            <Route path="/colaboacao" element={<Colaboradores /> } exact />
            <Route path="/slide" element={<Slide /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
