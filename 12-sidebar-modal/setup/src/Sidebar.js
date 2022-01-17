import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {useGlobalContext} from './context';

const Sidebar = () => {
  const {isSideBarOpen, closeSidebar} = useGlobalContext();
  return <aside className={`sidebar show-sidebar`}>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="coding addict" />
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className="links">
      {links.map((link)=>{
        const {id,url,text,icon}= link;
        return(
          <li key={id}>
            <a href={url}>{icon}{text}</a>
            </li>
        )
      })}
    </ul>
    <ul className="social-icon">
      {social.map((sicon)=>{
        const {id,url,icon}= sicon;
        return <li key={id}>
          <a href={url}>{icon}</a>
          </li>
      })}
    </ul>
  </aside>
}
export default Sidebar
