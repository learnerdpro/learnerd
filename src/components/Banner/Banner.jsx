import React from "react";
import { MDBContainer } from "mdbreact";
import { MDBBtn } from "mdbreact";
import CSSModules from "react-css-modules";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div>
      {/* <MDBBtn className={style.rounded}>Default</MDBBtn> */}
      <main className={style.banner} />
    </div>
  );
};
export default CSSModules(Banner, style, { allowMultiple: true });
