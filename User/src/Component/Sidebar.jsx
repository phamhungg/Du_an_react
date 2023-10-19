import React from 'react';
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill,BsBagFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill}from 'react-icons/bs';
import { Link } from 'react-router-dom'; 



function Sidebar({openSidebarToggle, OpenSidebar}) {
    
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Link to="/" className='custom-link' style={{display: 'flex'}}>
                <BsCart3  className='icon_header'/> SHOP
                </Link>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
               <Link to="/admin" style={{display: 'flex'}}>
                    <BsGrid1X2Fill className='icon'/> Trang Chủ
              </Link>
            </li>
            <li className='sidebar-list-item'>
               <Link to="/danhmuc" style={{display: 'flex'}}>
                     <BsFillGrid3X3GapFill className='icon'/> Danh Mục
               </Link>
            </li>
            <li className='sidebar-list-item'>
               <Link to="/sp" style={{display: 'flex'}}>
                     <BsBagFill  className='icon'/> Sản Phẩm
               </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="" style={{display: 'flex'}}>
                    <BsPeopleFill className='icon'/> Khách Hàng
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{display: 'flex'}}>
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{display: 'flex'}}>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{display: 'flex'}}>
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar