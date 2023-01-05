import React, { useEffect } from 'react';
import "./NavBar.css";
import prof from "../../images/images 3.jpg";
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

// import { useStateContext } from '../../Contexts/ContextProvider.js';



const Navbar = () => {


  return (
    <div className="main">
          <div className="menu"><AiOutlineMenu/></div>
          <div
            onClick={() => {""}}
            className="profile"
          >
            <div className="image"><RiNotification3Line/></div>
          </div>
    </div>
  );
};

export default Navbar;
