import classes from './Home.module.css'
import {Outlet} from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'

const Home = () => {


  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>

  )
}
export default Home
