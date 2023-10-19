import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import "../../src/App.css";

import 'bootstrap/dist/css/bootstrap.min.css';


function Layout({children}){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <>
         <div className='grid-container'>
         <Header />
         <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
         {children}
         </div>
       
        </>
        
    )
}
export default Layout;