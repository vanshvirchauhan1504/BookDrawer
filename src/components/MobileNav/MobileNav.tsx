import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import search from '../../assets/search.png'
import msg from '../../assets/msg.png'
import menu from '../../assets/menu.png'


const MobileNav = () => {

    const [toggle,setToggle] = useState(false);

    return (
      <>
      <div className="header-mobile container-fluid">
        <div className="logo desktop">
            <h2>BookDrawer</h2>
        </div>
    </div>
    
      </>
    )
  }

export default MobileNav