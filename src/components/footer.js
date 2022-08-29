import React from 'react'
import { Link } from "react-router-dom"
const Footer = ()=>{
    return(
        <footer>
          <div className='footer-container'>
            <h3>Copyright © 2022</h3>
            <h2>Informations &amp; Contacts:</h2>
            <div className='footer-body'>
              <div className='info'>
                 <Link to='/ainzooal/FAQ' style={{textDecoration:'none'}}><h2>FAQ</h2></Link>
                 <Link to='/ainzooal/commands' style={{textDecoration:'none'}}><h2>Commands</h2></Link>
              </div>
              <span></span>
              <div className='socials'>
                <a>Official Discord server</a>
                <a>Email contact</a>
              </div>
            </div>
          </div>
        </footer>
    )
}
export default Footer;