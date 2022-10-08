import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import Login from "./pages/auth/login";
// import Users from "./pages/users/Users";
// import UsersCard from "./pages/users/UsersCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <DashboardHeader />
      <DashboardMenu /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersCard />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
