// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Sidebar />}></Route>
    <Route path="" element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
