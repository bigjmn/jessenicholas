import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Skills from './components/skills/Skills'
import ProjectGrid from './components/projectgrid/ProjectGrid'
import Contact from './components/contact/Contact'
import Bio from './components/bio/Bio'
import Navbar from './components/navbar/Navbar'
import ShockAndDraw from './pages/projects/ShockAndDraw'
import TetrisBuddies from './pages/projects/TetrisBuddies'
import QMazeSolver from './pages/projects/QMazeSolver'
import Welp from './pages/projects/Welp'
import Home from './pages/home/Home'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div>
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}>
        <Route index element={<Bio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<ProjectGrid />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/shockanddraw' element={<ShockAndDraw />} />
        <Route path='/tetrisbuddies' element={<TetrisBuddies />} />
        <Route path='/welp' element={<Welp />} />
        <Route path='/qmazesolver' element={<QMazeSolver />} />
      </Route>
    </Routes>
    </AnimatePresence>
    </div>
  );

};

export default AnimatedRoutes;
