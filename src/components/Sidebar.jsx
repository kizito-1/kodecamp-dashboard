import React, { useState } from "react";
import "../styles/sidebar.css";

import { FaAngleDown } from "react-icons/fa";

import { TbSquareKey } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { TbUserSquareRounded } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { BiSolidMagicWand } from "react-icons/bi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { TbSettings2 } from "react-icons/tb";
import { TbMenu2 } from "react-icons/tb";
import evano from "../assets/images/er.png"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Customers");

  const navItems = [
    { icon: <TbSquareKey size={30}/>, label: "Dashboard" },
    { icon: <AiOutlineProduct size={30} />, label: "Product" },
    { icon: <TbUserSquareRounded size={30} />, label: "Customers" },
    { icon: <CiWallet size={30} />, label: "Income" },
    { icon: <BiSolidMagicWand size={30} />, label: "Promote" },
    { icon: <LuMessageCircleQuestion size={30} />, label: "Help" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="top-section">
        {isOpen && <h1 className="logo"><TbSettings2 size={30} /> Dashboard <span className="version">v.01</span></h1>}
        <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
          <TbMenu2 size={30}/>
        </div>
      </div>

      <div className="nav-menu">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`nav-item ${active === item.label ? "active" : ""}`}
            onClick={() => setActive(item.label)}
          >
            <span className="iconz">{item.icon}</span>
            {isOpen && <span className="labelz">{item.label}</span>}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="upgrade-box">
          <p>Upgrade to PRO to get access all features!</p>
          <button>Get Pro Now!</button>
        </div>
      )}

      <div className="profile">
        <img src={evano} alt="User" />
        {isOpen && (
          <div className="details">
            <p className="name">Evano</p>
            <p className="role">Project Manager</p>
          </div>
        )}
        {isOpen && <FaAngleDown />}
      </div>

      
    </div>
  );
};

export default Sidebar;
