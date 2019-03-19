import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CSSModules from "react-css-modules";
import style from "./App.module.css";
import Header from "../Header/Header.jsx";
import Banner from "../Banner/Banner.jsx";
import CategoryCards from "../CategoryCards/CategoryCards.jsx";
import axios from "axios";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </div>
        <Banner />
        <CategoryCards />
      </Fragment>
    );
  }
}

export default CSSModules(App, style, { allowMultiple: true });
