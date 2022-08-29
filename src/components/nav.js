import React,{useState} from 'react'
import { Link } from "react-router-dom"

const Nav = ()=>{
  const [open,setisopen] = useState(false)
  const [openphone,setisphoneopen] = useState(false)
  const [styles,setstyles]= useState({
     'rotate':-43,
     'display':'none'
  })
  const changestyle = ()=>{
    if(styles.rotate < 0){
      setisopen(true)
      setstyles({...styles,rotate:137})
    }
   else{
     setisopen(false)
     setstyles({...styles,rotate:-43})
      console.log(styles.rotate)
      
   }
  }
    return(
        <nav className='navbar'>
          <div className='nav-container'>
            <div className='logo-container' id='logo-container'>
                <h2 className='logo'>Ainzu</h2>
                <div className='arrow' id='arrow' style={{transform: `rotate(${styles.rotate}deg)`}} onClick={()=>{
                  changestyle()}}></div>
            </div>
            <div id="nav-icon2" onClick={()=>{setisphoneopen(!openphone)}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
           <div className='phone-container'>        
            <div className={openphone?'open-phone':'close-phone'}>
               <Link to='/ainzooal/' style={{textDecoration:'none'}}><h2>Home</h2></Link>
               <Link to='/ainzooal/commands' style={{textDecoration:'none'}}><h2>Commands</h2></Link>
               <Link to='/ainzooal/FAQ' style={{textDecoration:'none'}}><h2>FAQ</h2></Link>
            </div>
           </div>
            <div className={open?'open':'close'} styles={{display:open?'':styles.display}}>
              <Link to='/ainzooal/' style={{textDecoration:'none'}}><h2>Home</h2></Link>
              <Link to='/ainzooal/commands' style={{textDecoration:'none'}}> <h2>Commands</h2></Link>
              <Link to='/ainzooal/FAQ' style={{textDecoration:'none'}}><h2>FAQ</h2></Link>
            </div>
           
          </div>
        </nav>
    )
}
export default Nav;