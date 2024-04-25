import { Link, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
export default function RootLayout() {
 
  return (
    <>
      <Navbar/>
      <p className='h1'>NAVBAAR</p>
      {console.log("LOADED")}
      <ul>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </>
    
  )
}