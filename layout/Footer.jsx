import React from "react";

const Footer = () => {
  return (
    <footer className='foot'>
      <p>This website is built with Next.JS</p>
      <style jsx>{`
        .foot {
          margin-top: 10rem;
          height: 10vh;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
