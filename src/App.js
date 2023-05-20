import Homepage from "./website/Homepage.jsx"
import React,{useState, useEffect} from 'react'
import './App.css';
import './website/blog/style.css'
import './responsive.css';
import Header from "./website/Header.jsx";
import About from "./website/About.jsx";
import Login from "./website/Login.jsx";
import Reviews from "./website/blog/Reviews.js";
import SpecialReview from "./website/blog/SpecialReview.js";
import Stories from "./website/blog/Stories.js";
import SpecialStory from "./website/blog/SpecialStory.js";
import MainForm from "./website/blog/mainFunction.js";
import SpecialBlog from "./website/blog/SpecialBlog.js";
import Blogs from "./website/blog/Blogs.js";
import Register from "./website/register/Register.jsx";
import Donate from "./website/Donate.jsx";
import Counselling from "./website/Counselling.jsx";
import Complaint from "./website/Complaint.jsx";
import Doctor from "./website/Doctor.jsx";
import Footer from "./website/Footer.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Pageforappointment from "./website/Pageforappointment.jsx";
import { FinancialAid } from "./website/financial/FinancialAid.jsx";
import Menu from "./website/blog/Menu.jsx";
import Sidecomp from "./website/blog/Sidecomp.jsx";
import { Legalguide } from "./website/Legalguide.jsx";
import FAQ from "./website/FAQ.jsx";


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element = {
          <>
            <Homepage/>
          </>
        }>
        </Route>
        <Route exact path="/AboutUs" element = {
          <>
            <About />
          </>
        }>
        </Route>
        <Route exact path="/Login" element = {
          <>
            <Login />
          </>
        }>
        </Route>
        <Route exact path="/Register" element = {
          <>
            <Register />
          </>
        }>
        </Route>
        <Route exact path="/FAQ" element = {
          <>
            <FAQ />
          </>
        }></Route>
        <Route exact path="/Donate" element = {
          <>
            <Donate />
          </>
        }>
        </Route>
        <Route path="/Blog" element={<><Sidecomp/> <Menu/><Blogs /></>} />
        <Route exact path="/Blog/blog" element={<><Sidecomp/> <Menu/><Blogs /></>} />
        <Route exact path="/Blog/blog/:id" element={<><Sidecomp/> <Menu/><SpecialBlog /></>} />
        <Route exact path="/Blog/review" element={<><Sidecomp/> <Menu/><Reviews /></>} />
        <Route exact path="/Blog/review/:id" element={<><Sidecomp/> <Menu/><SpecialReview /></>} />
        <Route exact path="/Blog/story" element={<><Sidecomp/> <Menu/><Stories /></>} />
        <Route exact path="/Blog/story/:id" element={<><Sidecomp/> <Menu/><SpecialStory /></>} />
        <Route exact path="/Blog/shareYourStory" element={<><Sidecomp/> <Menu/><MainForm /></>} />
        <Route exact path="/Blog/back" element={<><Sidecomp/> <Menu/><Blogs /></>} />
        <Route exact path="/Counselling" element = {
          <>
            <Counselling />
          </>
        }>
          </Route>
          <Route exact path="/Complaint" element = {
          <>
            <Complaint />
          </>
        }>
        </Route>
        <Route exact path="/Doctor" element = {
          <>
            <Doctor />
          </>
        }>
        </Route>

        <Route exact path="/Appointmentpurposeonly" element = {
          <>
            < Pageforappointment/>
          </>
        }>
        </Route>

        <Route exact path="/LegalGuide" element = {
          <>
            < Legalguide/>
          </>
        }>
        </Route>

        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
