import React from "react";
import MainLayout from "../../layout/MainLayout";

import "./dashboard.scss";

const dashboard = () => {
  return (
    <MainLayout>
      <div className="page-set">
        <div className="text-center align-items-center mt-5">
          <h1 className="mg-top">WELCOME TO LENDSQR DASHBOARD</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default dashboard;
