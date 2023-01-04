import React from "react";
import MainLayout from "../../layout/MainLayout";

import "./dashboard.scss";

const dashboard = () => {
  return (
    <MainLayout>
      <div className="page-set">
        <div className="text-center align-items-center">
          <h1>WELCOME TO LENDSQR DASHBOARD</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default dashboard;
