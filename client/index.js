/**
 * index.js
 * Application entry point.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Application Content
function Content(props) {
  Component(props);
  return (
    <p>{props.text}</p>
  );
}

var content = ReactDOM.render(
  <Content text='Content goes here.' />,
  document.getElementById("content")
);

