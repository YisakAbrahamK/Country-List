import React from "react";
import { Header, Footer, Main } from "../../Containers";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
