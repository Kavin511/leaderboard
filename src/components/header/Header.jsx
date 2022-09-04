import {React, useRef} from 'react'
import { Container } from 'reactstrap'
import './header.css'
import 'remixicon/fonts/remixicon.css'


const navLinks=[
    {
        display:'Home',
        url:"#"
    },
    {
        display:'About',
        url:"#about"
    },
    {
        display:'Contact us',
        url:"#contact_us"
    },
    {
        display:'Testimonials',
        url:"#testimonials"
    }
]

export const Header = () => {
    const menuRef=useRef()
    const menuToggle=()=> menuRef.current.classList.toggle('active_menu')
  return (
    <header className='header'>
        <Container>
        <div className="navigation">
            <h2>Duroos</h2>
         <div className="nav">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav_list">
                   {
                    navLinks.map((item,index)=>(
                        <li key={index}  className="nav_item">
                        <a href={item.url}>{item.display}</a>
                    </li>
                    ))
                   }
                </ul>
            </div>
        </div>
        <div className='mobile_menu'>
            <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
        </div>
        </div>
       
    </Container>
    </header>
    )
}
