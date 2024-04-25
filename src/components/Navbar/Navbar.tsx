import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import search from '../../assets/search.png'
import msg from '../../assets/msg.png'
import MobileNav from '../MobileNav/MobileNav'

const Navbar = () => {
  return (
    <>

    <div className="holderMobile">
      <MobileNav/>
    </div>
    

    <div className='holderDesktop'>

    
    <div className="header container-fluid">
        <div className="logo desktop">
            <h2>BookDrawer</h2>
        </div>
        <div className="logo mobile">
            
        </div>
    </div>
    <div className="nav-con container-fluid">
      <div className="nav">
        <div className='tab-container'>
          <Link className='.link' to="/sign-up">
            <div className='tab'>
              <img src={home} alt="" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/sign-up">
            <div className='tab'>
              <img src={search} alt="" />
              <span>Search</span>
            </div>
          </Link>
          <Link to="/sign-up">
            <div className='tab'>
              <img src={msg} alt="" />
              <span>Chats</span>
            </div>
          </Link>
        </div>
      </div>
    </div>

    
    </div>
  
    </>
  )
}

export default Navbar