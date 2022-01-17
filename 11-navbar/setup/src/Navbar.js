import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks]=useState(false);
  const linksContainerRef=useRef(null);
  const linksRef = useRef(null);
  useEffect(()=>{
    let height = linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height=`${height}px`
    }
    else{
      linksContainerRef.current.style.height='0px'
    }
    
  },[showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button 
          onClick={()=>setShowLinks(!showLinks)}
          className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id} >
                  <a href={url}>{text}</a>
                </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
         {social.map((sicon)=>{
           const {id,url,icon}=sicon;
           return <li key={id}>
              <a href={url}>{icon}</a>
             </li>
         })}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar
