import React, { useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { FiLogOut } from "react-icons/fi";

import "./sidebar.scss";
import menuList from "../../config/sideBarRoutes";
import Menus from "../Menus/Menus";
import { SideBarContext } from "../../context/context";

const SideBar = () => {
  const { showSidebar } = useContext(SideBarContext);

  return (
    <>
      <aside
        className={`sidebar__fixed--vertical ${showSidebar ? "show" : ""}`}
      >
        <nav className="sidebar__nav">
          <ul>
            {menuList.others.map((_, i) => (
              <Menus key={i} {..._} />
            ))}

            <span className="Label">CUSTOMERS</span>
            {menuList.customers.map((_, i) => (
              <Menus key={i} {..._} />
            ))}

            <li>
              <span className="Label">BUSINESSES</span>
            </li>
            {menuList.businesses.map((_, i) => (
              <Menus key={i} {..._} />
            ))}

            <li>
              <span className="Label">SETTINGS</span>
            </li>
            {menuList.settings.map((_, i) => (
              <Menus key={i} {..._} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
