import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp() {
  return (
    <Navbar className="nav-result">
      <Container>
        <Navbar.Brand className="nav-brand">
          <img
            src={require("../../assets/images/logo.png")}
            alt="undefined"
            width="90"
            height="56.23"
            className="d-inline-block align-top"
          />{" "}
          <span className="nav-span">ארגון רופאים לתזונה</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
