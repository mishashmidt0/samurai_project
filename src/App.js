
import './App.css';
import Header from './components/header/Header';
import Conteiner from './components/conteiner/Conteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Conteiner />
      </div>
    </BrowserRouter>
  );
}


export default App;
