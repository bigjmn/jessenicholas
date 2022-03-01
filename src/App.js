import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import {Route, Routes, Link, BrowserRouter, useLocation} from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'

import {AnimatePresence} from 'framer-motion'


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>










    </div>
  );
}

export default App;
