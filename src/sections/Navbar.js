import React, { useState} from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import Logout from "../components/Logout";
import '../styles/Navbar.css'

const Navbarr = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
            <BrowserRouter>
            <Navbar light>
            {/* <div>
            <img className="logo" src={logo} alt="reviewsy logo"/>
            </div> */}
                <NavbarBrand href="/" >Reviewsy: Genuine Gaming Reviews</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="toggle" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="NavLink" href="/About">About</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <Link to="/donation"><NavLink className="NavLink" to="/donation">Donation</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contactus"><NavLink className="NavLink" to="/contactus">Contact Us</NavLink></Link>
                    </NavItem> */}
                    <NavItem>
                        <Logout setSession={props.setSession} />
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </BrowserRouter>
    );
};

export default Navbarr;