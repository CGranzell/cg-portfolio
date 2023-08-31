import React from 'react';

const Footer = () => {
  return (
    <footer className="h-40 bg-black border-t-2 mt-40 font-poppins flex flex-col md:flex-row justify-evenly items-center">
      <p className=" font-semibold text-2xl text-yellow">
        Christoffer Granzell
      </p>
      <p className=" text-md text-yellow">
        ©2023 Granzell. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
