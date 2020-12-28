import React from 'react';
import { render } from "react-dom";

import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";

import App from './components/app';

function onChange(newValue: any) {
  console.log("change", newValue);
}

// Render editor
render(
  <AceEditor
    mode="c_cpp"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
  />,
  document.getElementById("contents")
);
