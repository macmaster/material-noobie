/**
 * index.js
 * Application entry point.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Application Content
function Content(props) {
  return (
    <h1>{props.title}</h1>
  );
}

var content = ReactDOM.render(
  <Content title='I love nature!' />,
  document.getElementById("content")
);

