import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function layout({ children }) {
  return (
    <>
      <Nav />
      <main> {children}</main>
      <Footer />
    </>
  );
}

export default layout;
