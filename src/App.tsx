import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DashboardHeader />
      <DashboardMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersCard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
