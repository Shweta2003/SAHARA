import React,{useState, useEffect} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {Link} from 'react-router-dom'
import Legal from '../components/expert-legal-guidance.webp'
import NGO from '../components/download (2).png';
import Police from '../components/download 3.png';
import women_help from '../components/women_help.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Complaint() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  useEffect( () => {setUser(firebase.auth().currentUser)
    console.log(user)
},[user,setUser])

  return (
    <div>
      {
        (user === null) ? <div className='doctor-no'>
          <div className='doctor-no-box'>
          <h3 style={{color:"white"}}>You need to signup to our website to use this page and enjoy all its fuctionalities...</h3>
          <button><Link to="../Login" style={{color:"#372948"}} >Login</Link></button>
          </div>
        </div> 
        : <div className='complaint'>
        <p to="" className="head-p">
          Back
        </p>
        <div className="complaint-head">
          <h1>COMPLAINT <br/>SECTION</h1>
          <h5 style={{textAlign:'justify',width:"700px"}}>Don't let wrong things go unheard or unchallenged If u think u have been  sexually harassed or assaulted Speak up and let the immoral act get meted. You can  follow a legal procedure and get justice against it.We are here to guide you with appropriate steps.You can contact  NGO, Police, legal consultants and women helpline</h5>
          
        </div>
        <div className="scroll" style={{top: "22%",  width: "100%"}}>
          <marquee width="auto" direction="left" height="80px">
            <h3 style={{color:"red", fontFamily:"'Bruno Ace SC', cursive"}}>
              Please know that all your details are safe and we are only concerned
              about your safety. All the helpline numbers are completely trustable
              and authenticated. Trust on us !!!
            </h3>
          </marquee>

        </div>
        
        <div className='comp-box-body'>
          <div className='comp-box' data-aos="flip-left">
            
            <img src={Police} alt="" className='comp-img'/>
            <h1 className='comp-name'>Police HelpLine</h1>
            <p className='comp-p' data-aos="zoom-out-left">Many countries have police helplines specifically for women. These helplines are designed to provide support, assistance, and resources to women who are victims of violence, harassment, or abuse. The specific number for the women's police helpline may vary region wise. We have provided some data below you can access it and get proper police help. Let's seek justice together!!
            </p>
            <a href="https://m.indiacustomercare.com/maharastra-police-contacts#gsc.tab=0" className='comp-link'><button>PROCEED</button></a>
          </div>
          <div className='comp-box' data-aos="flip-left" data-aos-delay="500">
            <img src={Legal} alt="" className='comp-img'/>
            <h1 className='comp-name'>Legal Consultancy</h1>
            <p className='comp-p' data-aos="zoom-out-left"> Legal consultants may specialize in a particular area of law, such as corporate law, intellectual property law, or employment law, among others. They may also provide services such as contract review, negotiation, and drafting, as well as legal research and analysis. You can go through legal procedure and know your rights and raise the voice against the immoral acts you experienced.
            </p>
            <Link to="../Legalguide" className='comp-link'><button>PROCEED</button></Link>
          </div>
          <div className='comp-box'data-aos="flip-right" data-aos-delay="500">
            <img src={NGO} alt="" className='comp-img'/>
            <h1 className='comp-name'>NGO HelpLine</h1>
            <p className='comp-p' data-aos="zoom-out-right">There are several NGOs that provide support and resources to pregnant teenagers. These organizations provides information, advice, and support to pregnant teenagers and their families, including access to healthcare services, counseling, and education programs.Let's find the right organization for you and share your problems and try to find solutions together!!
            </p>
            <a href="https://www.ncwwomenhelpline.in" className='comp-link'><button>PROCEED</button></a>
          </div>
          <div className='comp-box' data-aos="flip-right">
            <img src={women_help} alt='' className='comp-img'/>
            <h1 className='comp-name'>Women HelpLine</h1>
            <p className='comp-p' data-aos="zoom-out-right">The services offered by women's helplines may include crisis intervention, safety planning, emotional support, and advocacy for women's rights. some, women's helplines are available 24/7 and may be accessed anonymously. The specific number for the women's helpline may vary by  region. We have provided you some of the links , feel free to contact for help.
            </p>
            <a href="https://www.ncwwomenhelpline.in" className='comp-link'><button>PROCEED</button></a>
          </div>
        </div>
        </div>
        
        
      }
    </div>
  )
}
