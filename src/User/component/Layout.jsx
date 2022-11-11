import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PublicRouter from "../routes/PublicRouter";
import ProductViewModal from "./ProductViewModal";

const Layout = () => {

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <Routes>
            {PublicRouter.map((route, index) => {
              const Page = route.component;
              return <Route 
              key={index} 
              path={route.path} 
              element={<Page />} 
              />
            })}
          </Routes>
        </div>
      </div>
      <Footer />
      <ProductViewModal/>
    </div>
  );
};

export default Layout;
