import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { dataRef } from './blog/firebaseConfigBlog';
import book from "../components/book.jpg";
import book2 from "../components/book2.jpg";
import group46 from "../components/Group 46.png";
import group47 from "../components/th-removebg-preview (1).png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import seesoon from "../components/seesoom.jpg";
import confirm from "../components/Appointment-Confirmation.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import doc from "../components/doc.jpg"

export default function Counselling() {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  // set state
  const [setate,setstatennn] = useState([]);

  // to store state name
  const [statename,setstatename] = useState([]);

  // to select state name for city
  const [selectcity,setselectcity] = useState([]);

  // when appointment is confirmed
  const [confirmed, setconfirm] = useState(false);

  // data from database
  const [userdata, setuserdata] = useState([]);

  // main button
  const [main, showmain] = useState(true);

  // form to check approval
  const [approv, setapprov] = useState(false);

  // get key of data
  const [keydata, setkeydata] = useState([]);

  // key to delete
  const [key, todel] = useState("")

  // for slider data
  const [allblog, getallblog] = useState([]);

  // to show appointment details
  const [showdet, setshowdet] = useState(false);

  const [data2, setdata2] = useState([]);

  // form to send mail for approval
  const [formde, displayform] = useState(false);

  const [newset,setnewset] = useState(false);

  // approval next
  const [approvnext, setapprovnext] = useState(false);

  const [data, userData] = useState({
    user_name: "",
    user_email: ""
  });

  // current city
  const [shospital,selecthospital] = useState([]);

  const [formd, setformd] = useState({
    purpose: "",
    to_name: "",
    to_email: "",
    mode: "",
    day: "",
    date: "",
    time: "",
    address: "",
    doctor_name: "",
    sending_email:"",
    sending_name:""

  });

  const doc_img_arr = [
    "https://tse3.mm.bing.net/th?id=OIP.5Da_cAOsdKZMVics3oYTTwAAAA&pid=Api&P=0",
    "https://tse1.mm.bing.net/th?id=OIP.puoxo1SpZDcAnNvU-otWrQAAAA&pid=Api&P=0",
    "https://tse3.mm.bing.net/th?id=OIP.bvIAQq73HWBeNb9GLb-mgQHaHa&pid=Api&P=0",
    "https://gumlet.assettype.com/pratidintime%2Fimport%2F2021%2F11%2FDr.-Dhrubajyoti-Borah.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://tse4.mm.bing.net/th?id=OIP.PqegkfizLigNAIUYHTggoAAAAA&pid=Api&P=0",
    "https://tse2.mm.bing.net/th?id=OIP.F7AxBWOQLU8-sdzaSe036AHaKR&pid=Api&P=0",
    "https://www.kauveryhospital.com/doctorimage/recent/Dr-Suresh-Kumar-B2022-06-08-10:25:52am.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.XH_ToFbyyuuL_885CUGP6wAAAA&pid=Api&P=0"

  ];

  useEffect(() => {
    dataRef.ref().child("state").on('value', data => {
      const getdata = Object.keys(data.val());
      setstatename(getdata);
    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("appointment_request").on('value', data => {
      const getdata = Object.values(data.val());
      const getkey = Object.keys(data.val())
      setuserdata(getdata);
      setkeydata(getkey);

    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("confirmed_appointment").on('value', data => {
      const getdata = Object.values(data.val());
      setdata2(getdata);

    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("counselling_record").on('value', data => {
      const getdata = Object.values(data.val()).slice(0,8);
      getallblog(getdata);
      
    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("counselling_record").on('value', data => {
      const getdata = Object.values(data.val());
      const getdata2 = Object.keys(data.val())
      selecthospital(getdata);
      setstatennn(getdata2)
      
    })
  }, [newset])

  var i = -1;

  const form = useRef();

  const confirmation = () => {
    emailjs.send('service_c9tddfh', 'template_ejhfzco', formd, 'Z5XcQD91gLjF0ixVr')
          .then((result) => {
              console.log(result.text);
              alert("Email sent to nearest hospital successfully!!")
          }, (error) => {
              console.log(error.text);
              alert("couldn't send mail... try again!!")
          });
    setconfirm(true)
    dataRef.ref().child("confirmed_appointment").push(formd);
    dataRef.ref().child(`appointment_request/${key}`).remove();


  }

  const fun1 = () => {
    userData({
      user_email:"",
      user_name:""
    })
    setselectcity([]);
  }

  

  const onapprov = <div className='approv-body'>{
    confirmed?<div className='approv-1'>
    <h4 style={{fontFamily:"'Dancing Script', cursive"}}>Your appointment has been confirmed!! You will get the future related links and details directly on your mail.</h4>
    <img src={seesoon} alt="seesoon" className='seesoon'/>
    
    </div>
    :
    <div className='approv-1'>
    <h4 style={{fontFamily:"'Dancing Script', cursive"}}>Your appointment request have been approved!! Please check the details and confirm your appointment.</h4>
    <img src={confirm} alt="seesoon" className='seesoon'/>
    
    </div>
  }
    
    <div className='approv-2' style={{marginBottom:"10px",backgroundColor:"yellowgreen"}}>
    <h1 style={{padding:"10.5px", backgroundColor:"yellowgreen"}}> DETAILS OF YOUR SESSION</h1>
    <hr style={{backgroundColor:"black",height:"2px",margin:"0"}}/>
    <div className="approv-col" style={{backgroundColor:"white",paddingTop:"10px"}}>
    <div className='b'><p className='approv-p-left' >purpose</p><p>:</p><p className='approv-p-right'> {formd.purpose}</p></div>
    <div className='b'><p className='approv-p-left'>name of patient</p><p>:</p><p className='approv-p-right'> {formd.to_name}</p></div>
    <div className='b'><p className='approv-p-left'>email of patient </p><p>:</p><p className='approv-p-right'> {formd.to_email}</p></div>
    <div className='b'><p className='approv-p-left'>mode</p><p>:</p> <p className='approv-p-right'>{formd.mode}</p></div>
    <div className='b'><p className='approv-p-left'>day </p><p>:</p><p className='approv-p-right'>{formd.day}</p></div>
    <div className='b'><p className='approv-p-left'>date</p><p>:</p> <p className='approv-p-right'> {formd.date}</p></div>
    <div className='b'><p className='approv-p-left'>time</p> <p>:</p><p className='approv-p-right'> {formd.time}</p></div>
    <div className='b'><p className='approv-p-left'>address </p><p>:</p><p className='approv-p-right'> {formd.address}</p></div>
    <div className='b'><p className='approv-p-left'>DOctor's name </p><p>:</p><p className='approv-p-right'>{formd.doctor_name}</p></div>
    <div className='b'><p className='approv-p-left'>Contact hospital on</p><p>:</p> <p className='approv-p-right'> {formd.sending_email}</p></div>
    <div className='b'><p className='approv-p-left'>Hospital </p><p>:</p> <p className='approv-p-right'>{formd.sending_name}</p></div>
    <div className='btn-class'>
    <button onClick={confirmation} className={`submit-button bb ${confirmed ? "donotdisplay" : "displayit"}`} style={{backgroundColor:"yellowgreen"}}>Confirm Appointment</button>
    
    <button onClick={() => {
      setapprovnext(false)
      displayform(true)
    }} className={`submit-button bb ${confirmed ? "donotdisplay" : "displayit"}`} style={{backgroundColor:"red"}}>Book a different appointment</button>
    </div>
    </div>
  </div>
  </div>

  function clicked(data1){
    dataRef.ref().child(`state/${data1}/${data1}`).on('value', data => {
      const getdata = Object.values(data.val());
      setselectcity(getdata);

    })

    
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('user_name');
    const email = formData.get('user_email');

      if (formde) {
        const state = formData.get('state');
        setnewset(true);
        let a;
        let count = 0;

        setate.map((e) => {
          if(e === state){
            a = shospital[count];
          }
          count ++;
        })

        var templateParams = {
          sending_email: "bandismita7@gmail.com",
          purpose:"counselling",
          sending_name: a[Math.floor(Math.random() * a.length)].name,
          user_name: `${name}`,
          user_email: `${email}`
        };
        emailjs.send('service_pjwes2r', 'template_pnug3pc', templateParams, 'UWhSxUpfsU1hpadFb')
          .then((result) => {
              console.log(result.text);
              alert("Email sent to nearest hospital successfully!!")
          }, (error) => {
              console.log(error.text);
              alert("couldn't send mail... try again!!")
          });

        dataRef.ref().child("appointment_request").push(templateParams);
        alert("email sent successfully!!")
        fun1();
      }
      else {
        setapprovnext(true)
        console.log(userdata);
        let i = 0;
        let found = false;
        userdata.map((data) => {
          if (data.to_name === name && data.to_email === email && data.purpose === "counselling") {
            alert("data found in database")
            found = true;
            setformd(data);
            todel(keydata[i]);
            setapprov(false);
            setshowdet(true);
          }
          else if (data.user_name === name && data.user_email === email && data.purpose === "counselling") {
            alert("Your appointment has not been confirmed yet")
            found = true;
          }
          i = i + 1;
        })
        if (found === false) {
          data2.map((item) => {
            if (item.to_name === name && item.to_email === email && data.purpose === "counselling") {
              setconfirm(true)
              setformd(item);
              alert("Your appointment is set!!")
              setshowdet(true)
              setapprov(false);
            }
          })
        }
      }

    };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (

    <div className="so-much-for-div">
      <div className={`top-head-of-counsel ${main ? "displayit" : "donotdisplay"}`}>
        <h1 className='something-h1'>GET A FREE COUNSELLING!!</h1>
        <div className='q1' data-aos="flip-left"><img src={group47} alt=''/><h1>Are you worried about your identity getting disclosed?</h1></div>

        <div className='q2' data-aos="flip-right"><h1>Are you worred about the society's judgement?</h1><img src={group47} alt=''/></div>

        <div className='q1' data-aos="flip-left"><img src={group47} alt=''/><h1> Unable to understand the situation and don't know what to do?</h1></div>

        <div className='q2' data-aos="flip-right"><h1>Don't have courage to talk about it with your friends and families?</h1><img src={group47} alt=''/></div>
        <h1 className='a1' data-aos="flip-up">Don't worry!!!! We have got your back</h1>
      <div className=" counselling-body">
      <img src={book} alt='book' className='counsel-btn-book'/>
        {/* initial view */}
        <button onClick={() => {
          showmain(false)
          displayform(true)
        }} className='counsel-btn' data-aos="zoom-out-left"><span>
          
          DO YOU WANT TO GET A FREE COUNSELLING SESSION?</span></button>
          <img src={book2} alt='book' className='counsel-btn-book-2'/>
        <button onClick={() => {
          showmain(false)
          setapprov(true)
        }} className='counsel-btn' style={{color: "white"}} data-aos="zoom-out-right"><span>
          DO YOU WANT TO LOOK AT YOUR APPOINTMENT DETAILS?</span></button>
      </div>
      <div className='carausel counsel-carausel'>
        <h1 style={{fontFamily: "'Bruno Ace SC', cursive", width:"100%",textAlign:"center",fontSize:"330%"}}>Get to know our best phychiatrists and doctors</h1>
        <div className='div-carausel'>
              <div className='no-content' style={{marginLeft:"-15%"}}>
                <img src={doc} alt="" />
              </div>
                <Carousel swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  keyBoardControl={true}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px">
                  {
                    allblog.slice(0, 8).map((e) => {
                      i++;
                      return (
                        <div className='doctor-slide' key={e[0].name} style={{overflowY:"hidden"}}>
                          <img src={doc_img_arr[i]} alt="" className='doctor-slide-img' />
                          <p className='doctor-slide-name'>{e[0].name}</p>
                          <p className='doctor-slide-hospital'>{e[0].position}</p>
                        </div>
                      )
                    })
                  }

                </Carousel>
              </div>
              </div>
      </div>

      {/* to enter data */}
      <div className={`anon-body ${formde ? "displayit" : "donotdisplay"}`}>
        <img src={group46} alt='background' className='anon-back'/>
        <h1 className='anonymous-head'>
          BOOK AN APPOINTMENT WHILE KEEPING YOURSELF ANONYMOUS
        </h1>
        <form id="#my-form" ref={form} onSubmit={sendEmail} className='anon-form'>
        <div className='anon-out'><div className='anon-left'>
        <div className='anon-b'><label>Select State <span style={{color:"red",marginLeft:"3px"}}>*</span> </label>
          <select className='state' name="state" id="state" required onClick={(e) => {clicked(e.currentTarget.value)}}>
          {
            statename.map((item) => {
              return <option key={item} value={item} name={item}>{item}</option>
            })
          }
          </select>
          </div>

          <div className='anon-b'><label>Select City <span style={{color:"red",marginLeft:"3px"}}>*</span> </label>
          <select className='state' name="city" id="city" required >
          {
            selectcity.map((item) => {
              return <option key={item} value={item} name={item}>{item}</option>
            })
          }
          </select>
          </div>
          </div>
          <div className='anon-right'>
          <div className='anon-b'> <label>UserName <span style={{color:"red",marginLeft:"3px"}}>*</span> </label>
          <input className='state' type="text" name="user_name" value={data.user_name} onChange={(e) => userData({ ...data, user_name: e.target.value })} placeholder='enter any username'/></div>
          <div className='anon-b'><label>Email <span style={{color:"red",marginLeft:"3px"}}>*</span> </label>
          <input className='state' type="email" name="user_email" value={data.user_email} onChange={(e) => userData({ ...data, user_email: e.target.value })} placeholder='enter valid email'/></div>
          
          </div>
          </div>
          <input type="submit" value="Send" className='submit-button'/>
        </form>
      </div>

      {/* to check appointment */}
      <div className={`anon-body ${approv ? "displayit" : "donotdisplay"}`}>
      {/* <img src={group47} alt='background' className='anon-back'/> */}
        <h1 className='anonymous-head'>
          CHECK DETAILS OF YOUR SESSION
        </h1>
        <form id="#my-form" ref={form} onSubmit={sendEmail} className='anon-form'>
          <div className='anon-out-b'><div className='anon-b'>
            <label>UserName</label>
          <input className='state' type="text" name="user_name" value={data.user_name} onChange={(e) => userData({ ...data, user_name: e.target.value })} />
          </div>
          <div className='anon-b'>
            <label>Email</label>
          <input className='state' type="email" name="user_email" value={data.user_email} onChange={(e) => userData({ ...data, user_email: e.target.value })} />
          </div>
          </div>
          <input type="submit" value="Check" className='submit-button'/>
        </form>
      </div>
      {/* if appointment yet not approved */}

      <div className={`${approvnext ? "displayit" : "donotdisplay"}`}>
        {
          showdet === true ? onapprov
        :
        <div className='not-approv' >
          <h4>Maybe your application is in wait list for approval... wait for some more time or try applying once again!!</h4>
          <button className='submit-button' onClick={
            () => {
              setapprovnext(false)
              displayform(true)
              setapprov(false)
              userData({user_name:"" , user_email:""})
            }
          }>APPLY AGAIN</button>
        </div>
          
        }
      </div>
      




    </div>
  );
};


