import React from "react";
import { Route,Routes, Navigate } from "react-router-dom";
import "../assets/css/styles.css"
import "../assets/js/scripts"

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import PublicRouter from "../routes/PublicRouter";

function MasterLayout(){
    return (
        <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>
                <Routes>
  
                                {PublicRouter.map((route,index)=>{
                                    const Page = route.component
                                    return (
                                        <Route 
                                        key={index}
                                        path={route.path}
                                        element = {<Page />}
                                        />
                                    )
                                })}

                             <Route path="/" element={<Navigate to="/admin/dashboard" replace={true} />} />
                </Routes>
                

                </main>
                <Footer />
            </div>

        </div>
    </div>
    )
}

export default MasterLayout