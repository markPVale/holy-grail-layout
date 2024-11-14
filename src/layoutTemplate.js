import React from "react";

const LayoutTemplate = ({ children }) => {
  return (
    <>
      <header className="App-header">Header</header>
      <div>
        <main className="main-container">{children}</main>
      </div>
      <footer className="footer">Footer</footer>
    </>
  );
};

export default LayoutTemplate;
