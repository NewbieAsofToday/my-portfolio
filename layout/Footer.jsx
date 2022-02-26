import React from "react";

const Footer = () => {
  return (
    <footer className='foot'>
      <div>This website is built by Euger Bonete with NextJS.</div>
      <style jsx>{`
        .foot {
          margin-top: 10rem;
          /* background: red; */
          height: 10vh;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
