import React from "react";
import { Outlet } from "react-router-dom";

const Tracagem = () => {
  return (
    <div className={"page-container"}> 
      <Outlet />
    </div>
  );
};

export default Tracagem;
