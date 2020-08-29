import React, { Component } from "react";
import "./Styles.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          className=" "
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        ></img>
        <div className=" header-text">
          <h1>Meme Generator</h1>
        </div>
      </div>
    );
  }
}
