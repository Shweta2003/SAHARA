import React,{useEffect} from "react";
import bg from "../components/donate-and-help.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DonatePage() {
  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className="donatepage"  data-aos="zoom">
      <div class="donate-box">
        
        <h1>One Little Help for Her!! Let's Donate </h1>

      <p>
      Donating to support pregnant teenagers can provide critical support and resources for those who may be facing significant challenges. These young women may lack financial resources, a supportive family or access to healthcare, and may struggle with feelings of isolation or shame. By donating to organizations that offer support to pregnant teenagers, you can help provide resources such as prenatal care, education, counseling, and safe housing. These resources can help ensure that these young women have access to the care and support they need to have healthy pregnancies and successful futures. Your donation can make a real difference in the lives of these young mothers and their babies.
      </p>
      <input type="submit" value="Donate"  data-aos="flip-up"/>
      </div>
      <img className="donate-bg" src={bg} alt=""/>
    </div>
  );
}
