import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, setTheme, theme }) => {
  return (
    <div className='container'>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Layout;
