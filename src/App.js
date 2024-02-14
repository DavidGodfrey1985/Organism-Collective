import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ToiGuyHome from "./pages/toi_guy/ToiguyHome";
import ToiguyReel from "./pages/toi_guy/ToiguyReel";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="toiguy" element={<ToiGuyHome />} />
          <Route path="toiguy/reel" element={<ToiguyReel />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
