import React from "react";
import Iframe from "react-iframe";

const CategoryCards = () => {
  //const source = "https://awwapp.com/static/widget/js/aww.min.js";
  return (
    <div>
      <Iframe
        url="https://awwapp.com/static/widget/js/aww.min.js"
        width="600px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
  );
};

export default CategoryCards;
