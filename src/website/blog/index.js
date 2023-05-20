import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import Navbar from "./Navbar";
import Sidecomp from "./Sidecomp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MainBlog = () => {

return(
  <BrowserRouter>
    <Sidecomp />
    <Navbar></Navbar>
  </BrowserRouter>
);
}
