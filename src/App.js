import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import ShockAndDraw from './pages/projects/ShockAndDraw'
import TetrisBuddies from './pages/projects/TetrisBuddies'
import QMazeSolver from './pages/projects/QMazeSolver'
import Welp from './pages/projects/Welp'

import PageTemplate from './pages/pagetemplate/PageTemplate'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shockanddraw' element={<ShockAndDraw />} />
          <Route path='/tetrisbuddies' element={<TetrisBuddies />} />
          <Route path='/welp' element={<Welp />} />
          <Route path='/qmazesolver' element={<QMazeSolver />} />
          <Route path='/pagetemplate' element={<PageTemplate />} />
        </Routes>


      </BrowserRouter>




    </div>
  );
}

export default App;
