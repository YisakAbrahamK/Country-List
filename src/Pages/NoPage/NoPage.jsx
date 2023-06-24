import React from "react";

const NoPage = () => {
  return (
    <div>
      <div style={CSS404}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

const CSS404 = {
  color: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75vh",
  flexDirection: "column",
};

export default NoPage;
