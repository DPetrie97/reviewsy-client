import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import '../styles/AuthNavbar.css'

const HomeNavbarr = () => {
    return(
        <Navbar id="authNavbar">
            <NavbarBrand id="authNavbarBrand">
                Reviewsy
            </NavbarBrand>
        </Navbar>
    );
};

export default HomeNavbarr;