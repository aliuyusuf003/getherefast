// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6 max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
