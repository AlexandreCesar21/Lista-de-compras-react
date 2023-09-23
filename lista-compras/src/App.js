import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./layout/Header";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Redes from "./pages/Redes";
import Tecnologia from "./pages/Tecnologia";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
          <Route path="/Redes" element={<Redes/>}/>
          <Route path="/Tecnologia" element={<Tecnologia/>}/>
        </Routes>
      </BrowserRouter>
      <h1>Testando</h1>
    </div>
  );
}

export default App;
