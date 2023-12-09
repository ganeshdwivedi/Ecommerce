import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Prvider from "../redux/Prvider";

function layout({ children }) {
  return (
    <>
      <Prvider>
        <Nav />
        <main> {children}</main>
        <Footer />
      </Prvider>
    </>
  );
}

export default layout;
