import React from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

import Input from "../Input/Input";

const Filter = () => {
  return ReactDOM.createPortal(
    <div className="filter-modal">
      <div className="close-modal">
        <AiFillCloseCircle />
      </div>
      <form action="">
        {/* Organisation (Select) */}
        <Input placeholder="User" type="text" name="user" />
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Date" type="date" name="date" />
        <Input placeholder="Phone Number" type="tel" name="phone" />
        {/* Status (Select) */}
        <div className="filter-buttons">
          <button>Reset</button>
          <button>Filter</button>
        </div>
      </form>
    </div>,
    document.body
  );
};

export default Filter;
