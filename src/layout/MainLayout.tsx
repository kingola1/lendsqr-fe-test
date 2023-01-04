import React, { PropsWithChildren, useState } from "react";

import TopNav from "../Components/TopNav/TopNav";
import SideBar from "../Components/SideBar/SideBar";
import { SideBarContext } from "../context/context";

import "./main-layout.scss";

const MainLayout = ({ children }: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="main">
      <SideBarContext.Provider value={{ showSidebar, toggleSidebar }}>
        <TopNav />
        <SideBar />
        {children}
      </SideBarContext.Provider>
    </div>
  );
};

export default MainLayout;
