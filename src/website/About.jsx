import React,{useEffect} from 'react'
import maharashtra from "../components/maharashtra.gif";
import 'react-multi-carousel/lib/styles.css';
import vision from "../components/vision-removebg-preview.png";
import mission from "../components/mission-removebg-preview.png"
import bgbg from "../components/bgbgbg.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);
  return (
    <div>
      
      <div className='do-about-some' >
      <img src={bgbg} alt='' className='about-bg'/>
      <h1 className='bout-head' data-aos="fade-up">About Us</h1>
      <p class="AB" data-aos="fade-up">

          Welcome to our website!!!This is a Teenage Pregnancy Counselling and Guidance website that is expected to provide a safe and supportive online community for teenage girls who are pregnant or at the risk of becoming pregnant. The website will offer guidanceand support to help them make informed decisionsabout their future, including access to financial aid, medical consultations, and counselling services. The fundraising section of the website will allow people to donate money to support the cause, which will help in providing financial assistance to teenage mothers. The website is expected to create awareness about teenage pregnancy, its causes and consequences, and reduce the stigma associated with it.
      </p>
      </div>
      
      <div className='btbt'>
            <div class="region1"data-aos="flip-left" >
                <img src={vision} className='vision-img' alt=''/>

              <div class="vision-heading"><h3>Vision</h3></div>

              <div class="vision-content">
                <p>To create a world-class integrated healthcare delivery system in India, entailing the finest medical skills combined with compassionate patient care.</p></div>

            </div>
            <div class="region2" data-aos="flip-right">
                <img src={mission} className='vision-img' alt=''/>

              <div class="Mission-heading"><h3>Mission</h3></div>

              <div class="Mission-content">
                <p>To be a globally respected healthcare organisation known for Clinical Excellence and Distinctive Patient Care</p></div>

            </div>
        </div>

        <div class="Map">
          <h1 style={{fontFamily: "'Bruno Ace SC', cursive",fontSize:"60px"}} data-aos="fade-right">Make Use Of Your Second Chance</h1>

          <img src={maharashtra} alt="data" className='map-img' />

        </div>
          <h1 className='val'>Our Values</h1>
          <img src={bgbg} alt='' className='bgbgbg'/>
        <div class="about-container1">
          
          <div class="A container1-child" style={{backgroundColor:"#A49DFF"}} data-aos="flip-left">

            <div class="about-content" style={{color:"white"}}>
              <h3>Teamwork</h3>
              <ul>
                <li>Proactively support each other and operate as one team</li>
                <li>Respect and value people at all levels with different opinions, experiences and backgrounds</li>
                <li>Demonstrate moral courage to speak up and do the right things</li>
              </ul>
            </div>

          </div>
          <div class="A container1-child" style={{backgroundColor:"#FE9C9C"}} data-aos="flip-up">
            <div class="about-content" style={{color:"white"}}>
              <h3>Integrity</h3>
              <ul>
                <li>Be principled, open and honest</li>
                <li>Model and live our Values</li>
                <li>Demonstrate moral courage to speak up and do the right things</li>
              </ul>
            </div>

          </div>
          <div class="A container1-child" style={{backgroundColor:"#A7FFAB"}} data-aos="flip-right">


            <div class="about-content" style={{color:"black"}}>
              <h3>Innovation</h3>
              <ul>
                <li>Continuously improve and innovate to exceed expectations</li>
                <li>Adopt a ‘can-do’ attitude</li>
                <li>Challenge ourselves to do things differently</li>
              </ul>
            </div>

          </div>
        </div>
        <div class="about-container2">
          <div class="A container2-child" style={{backgroundColor:"#FFFA88"}} data-aos="flip-left">

            <div class="about-content" style={{color:"black"}}>
              <h3>Quality</h3>
              <ul>
                <li>Continuously improve and innovate to exceed expectations</li>
                <li>Adopt a ‘can-do’ attitude</li>
                <li>Challenge ourselves to do things differently</li>
              </ul>
            </div>


          </div>

          <div class="A container2-child" style={{backgroundColor:"#9A249C"}} data-aos="flip-right">
            <div class="about-content" style={{color:"white"}}>
              <h3>Ownership</h3>
              <ul>
                <li>Be responsible and take pride in our actions</li>
                <li>Take initiative and go beyond the call of duty</li>
                <li>Deliver commitment and agreement made.</li>
              </ul>
            </div>


          </div>


        </div>
        </div>
        )
}
