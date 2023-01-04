import React, { useContext } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineCloseCircle,
  AiOutlineBell,
  AiOutlineCaretDown,
} from "react-icons/ai";

import { SideBarContext } from "../../context/context";
import Input from "../Input/Input";
import Logo from "../../assets/logo.svg";
import "./topnav.scss";
import { avatar } from "../../images";

const TopNav = () => {
  const { toggleSidebar } = useContext(SideBarContext);

  return (
    <div className="topnav">
      <div className="topnav__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="topnav__search">
        <Input type="search" placeholder="Search.." name="search" />
        <span>
          <FiSearch />
        </span>
      </div>
      <div className="topnav__user-feature">
        <h6 className="text-underline cursor:pointer">Docs</h6>
        <span className="mb-2">
          {" "}
          <AiOutlineBell />{" "}
        </span>
        <div className="user-details">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h6>
            Ebilite{" "}
            <span>
              <AiOutlineCaretDown />
            </span>
          </h6>
        </div>
      </div>
      <div onClick={toggleSidebar} className="sidebar-toggle">
        <RiMenu4Line />
      </div>
      <div className="sidebar-close">
        <i>
          <AiOutlineCloseCircle />
        </i>
      </div>
    </div>
  );
};

export default TopNav;
