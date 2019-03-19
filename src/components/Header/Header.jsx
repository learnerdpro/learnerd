import React, { Component } from "react";
import "./Header.css";
import CSSModules from "react-css-modules";
import Radium from "radium";
import logo from "./logolight.png";
import logodark from "./logodark.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";

class Header extends Component {
  state = {
    collapseID: "",
    opacity: 90,
    headerClass: "fixed-top navbar-dark",
    logo: logo
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  // componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.handleScroll);
  // };

  handleScroll = e => {
    if (window.scrollY > 30) {
      this.setState({
        headerClass: "fixed-top navbar-light navbar-transparent",
        logo: logodark
      });
    } else {
      this.setState({
        headerClass: "fixed-top navbar-dark",
        logo: logo
      });
    }
  };

  render() {
    const styles = {
      color: "darkgrey",
      ":hover": {
        color: "blue"
      }
    };

    return (
      <div>
        <MDBNavbar
          className={this.state.headerClass}
          expand="md"
          onScroll={this.handleScroll}
          scrolling
          transparent
          light
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <img
                src={this.state.logo}
                alt="temp-logo"
                style={{ height: 40, display: "block" }}
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
            <MDBCollapse
              id="navbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#!">HOW IT WORKS</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">LOG IN</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">SIGN UP</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    );
  }
}

export default Radium(Header);
