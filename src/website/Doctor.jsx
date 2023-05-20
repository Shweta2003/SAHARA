import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from 'react-router-dom'
import { Zoom, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img from "../components/bg4.jpg";
import { dataRef } from './blog/firebaseConfigBlog';
import book from "../components/book.jpg";
import book2 from "../components/book2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import grp36 from "../components/Group 36.png"
import doc from "../components/doc.jpg"
import group46 from "../components/Group 46.png";
import seesoon from "../components/seesoom.jpg";
import confirm from "../components/Appointment-Confirmation.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Doctor() {

  // set state
  const [setate,setstatennn] = useState([]);

  const [newset,setnewset] = useState(false);

  const [user, setUser] = useState(null);
  const [allblog, getallblog] = useState([]);

  // main button
  const [main, showmain] = useState(true);

  // get username
  const [user_details, getuser_details] = useState("");

  // when appointment is confirmed
  const [confirmed, setconfirm] = useState(false);

  // get current user
  const [curruser, setcurruser] = useState("");

  // form to check approval
  const [approv, setapprov] = useState(false);

  // to store state name
  const [statename, setstatename] = useState([]);

  // form to send mail for approval
  const [formde, displayform] = useState(false);

  // approval next
  const [approvnext, setapprovnext] = useState(false);

  // get key of data
  const [keydata, setkeydata] = useState([]);

  // key to delete
  const [key, todel] = useState("")

  // get all data
  const [a, geta] = useState([]);

  // data from database
  const [userdata, setuserdata] = useState([]);

  // current city
  const [shospital, selecthospital] = useState([]);

  const [data, userData] = useState({
    user_name: "",
    user_email: ""
  });



  const [data2, setdata2] = useState([]);

  // to select state name for city
  const [selectcity, setselectcity] = useState([]);

  // to show appointment details
  const [showdet, setshowdet] = useState(false);

  const doc_img_arr = [
    "https://tse3.mm.bing.net/th?id=OIP.hsm7Git_ceNJcaIcpVEWKAAAAA&pid=Api&P=0",
    "https://tse1.mm.bing.net/th?id=OIP.NnWzzRHplT2DgCH7WpTDdAHaHa&pid=Api&P=0",
    "https://threebestrated.in/images/DrRajeshKumarGhantaMBBSMSMChApexHospital-Vijayawada-AP.jpeg",
    "https://tse1.mm.bing.net/th?id=OIP.0kVaw9FTp0n6h20LM4T1LgAAAA&pid=Api&rs=1&c=1&qlt=95&w=113&h=113",
    "https://tse3.mm.bing.net/th?id=OIP.I26fg7__4sbat7cBDtc_gAHaEK&pid=Api&P=0",
    "http://dranandshankar.com/img/doctor_images/R-2.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.D6swFqK_ZYSra5dDgfoU4wAAAA&pid=Api&P=0",
    "https://www.sphdelhi.org/wp-content/uploads/2015/11/Dr.-B.S.-Solanki.jpg"

  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setUser(firebase.auth().currentUser);
    if (user !== null) {
      console.log(user._delegate.email)
      setcurruser(user._delegate.email)
    }
  }, [user, setUser])

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
    sending_email: "",
    sending_name: ""

  });

  useEffect(() => {
    dataRef.ref().child("hospital_record").on('value', data => {
      const getdata = Object.values(data.val()).slice(0, 8);
      getallblog(getdata.slice(0, 8));
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
    dataRef.ref().child("user_details").on('value', data => {
      const getdata = Object.values(data.val());
      console.log(getdata)
      geta(getdata);
    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("hospital_record").on('value', data => {
      const getdata = Object.values(data.val());
      const getdata2 = Object.keys(data.val())
      selecthospital(getdata);
      setstatennn(getdata2)
      
    })
  }, [newset])

  useEffect(() => {
    dataRef.ref().child("state").on('value', data => {
      const getdata = Object.keys(data.val());
      setstatename(getdata);
    })
  }, [])

  const form = useRef();

  var i = -1;

  function fun1() {
    for (var j = 0; j < a.length; j++) {
      if (a[j].email === curruser) {
        getuser_details(a[j].name)
      }
    }
  }

  const fun2 = () => {
    userData({
      user_email: "",
      user_name: ""
    })
    setselectcity([]);
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
          purpose: "doctor's guidance",
          sending_name: a[Math.floor(Math.random() * a.length)].doctor,
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
        fun2();
      }
      else {
        setapprovnext(true)
        let i = 0;
        let found = false;
        userdata.map((data) => {
          if (data.to_name === name && data.to_email === email && data.purpose === "doctor's guidance") {
            alert("data found in database")
            found = true;
            setformd(data);
            todel(keydata[i]);
            setapprov(false);
            setshowdet(true);
          }
          else if (data.user_name === name && data.user_email === email && data.purpose === "doctor's guidance") {
            alert("Your appointment has not been confirmed yet")
            found = true;
          }
          i = i + 1;
        })
        if (found === false) {
          data2.map((item) => {
            if (item.to_name === name && item.to_email === email && item.purpose === "doctor's guidance") {
              setconfirm(true)
              setformd(item);
              alert("Your appointment is set!!")
              setshowdet(true)
              setapprov(false);
            }
          })
        }
      }
  }

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

  const onapprov = <div className='approv-body'>{
    confirmed ? <div className='approv-1'>
      <h4 style={{ fontFamily: "'Dancing Script', cursive" }}>Your appointment has been confirmed!! You will get the future related links and details directly on your mail.</h4>
      <img src={seesoon} alt="seesoon" className='seesoon' />

    </div>
      :
      <div className='approv-1'>
        <h4 style={{ fontFamily: "'Dancing Script', cursive" }}>Your appointment request have been approved!! Please check the details and confirm your appointment.</h4>
        <img src={confirm} alt="seesoon" className='seesoon' />

      </div>
  }

    <div className='approv-2' style={{ marginBottom: "10px", backgroundColor: "yellowgreen" }}>
      <h1 style={{ padding: "10.5px", backgroundColor: "yellowgreen" }}> DETAILS OF YOUR SESSION</h1>
      <hr style={{ backgroundColor: "black", height: "2px", margin: "0" }} />
      <div className="approv-col" style={{ backgroundColor: "white", paddingTop: "10px" }}>
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
          <button onClick={confirmation} className={`submit-button bb ${confirmed ? "donotdisplay" : "displayit"}`} style={{ backgroundColor: "yellowgreen" }}>Confirm Appointment</button>

          <button onClick={() => {
            setapprovnext(false)
            displayform(true)
          }} className={`submit-button bb ${confirmed ? "donotdisplay" : "displayit"}`} style={{ backgroundColor: "red" }}>Book a different appointment</button>
        </div>
      </div>
    </div>
  </div>

  function clicked(data1) {
    dataRef.ref().child(`state/${data1}/${data1}`).on('value', data => {
      const getdata = Object.values(data.val());
      setselectcity(getdata);

    })
  }

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
    <div>
      {
        (user === null) ? <div className='doctor-no' >

          <div className='doctor-no-box'>
            <h3 style={{ color: "white" }}>You need to signup to our website to use this page and enjoy all its fuctionalities...</h3>
            <button><Link to="../Login" style={{ color: "#372948" }} >Login</Link></button>
          </div>
        </div>
          : <div style={{ backgroundColor: "rgb(255,236,239)" }}>
            <div className={`main-item ${main ? "displayit" : "donotdisplay"}`}>

              {/* main page */}
              <h1 className='just-head'>CONSULT A <span style={{ color: "rgb(255,206,68)" }}>  DOC </span><span style={{ color: "rgb(112, 6, 103)" }}>TOR </span></h1>
              <div className='just-info-b'><h3 className='just-info'>Welcome to our website. If you're a teenager who is pregnant or think you may be, it's important to know that you're not alone. Many young women have faced similar situations and have gone on to have healthy pregnancies and healthy babies. As a doctor, my goal is to provide you with guidance and support throughout your pregnancy journey. Whether you're looking for information on prenatal care, managing your symptoms, or preparing for labor and delivery, we're here to help. We understand that this may be a challenging time for you, and we want to ensure that you have access to the resources you need to make informed decisions about your health and the health of your baby.</h3>
                <h3 className='just-info-2'>WE UNDERSTAND YOU ARE SCARED, BUT KNOW THAT YOU ARE NOT ALONE</h3></div>
              <div className='top'>
                <img src={grp36} alt="" className='bottom' />
                <div className='doc-app-body'>
                  <img src={book} alt='book' className='counsel-btn-book' data-aos="flip-up" />
                  {/* initial view */}
                  <button onClick={() => {
                    displayform(true)
                    showmain(false)
                    fun1()

                  }} className='counsel-btn' style={{ width: "80%" }} data-aos="flip-up"><span className='do-now'>

                      DO YOU WANT BOOK AN APPOINTMENT WITH DOCTOR?</span></button>
                  <img src={book2} alt='book' className='counsel-btn-book-2' data-aos="flip-down" />
                  <button onClick={() => {
                    showmain(false)
                    setapprov(true)

                  }} className='counsel-btn' style={{ color: "white", width: "80%" }} data-aos="flip-down"><span className='do-now'>
                      DO YOU WANT TO LOOK AT YOUR APPOINTMENT DETAILS?</span></button>
                </div>
              </div>
              <hr style={{ width: "100%", borderWidth: "6px", borderBlockStyle: "dotted", borderColor: "rgb(112, 6, 103)", marginBottom: "-10px" }} />
              <h1 style={{ fontFamily: "'Bruno Ace SC', cursive", margin: "50px 0px",width:"97%",textAlign:"center" }}>Get to know our top doctors</h1>
              <div className='div-carausel'>
              <div className='no-content'>
                <img src={doc} alt="" />
              </div>
              <div className='carausel'>
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
                        <div className='doctor-slide' key={e[0].doctor}>
                          <img src={doc_img_arr[i]} alt="" className='doctor-slide-img' />
                          <p className='doctor-slide-name'>{e[0].doctor}</p>
                          <p className='doctor-slide-hospital'>{e[0].hospital}</p>
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
              <img src={group46} alt='background' className='anon-back' />
              <h1 className='anonymous-head'>
                BOOK AN APPOINTMENT WITH THE NEAREST TRUSTED DOCTOR
              </h1>
              <form id="#my-form" ref={form} onSubmit={sendEmail} className='anon-form'>
                <div className='anon-out'><div className='anon-left'>
                  <div className='anon-b'><label>Select State <span style={{ color: "red", marginLeft: "3px" }}>*</span> </label>
                    <select className='state' name="state" id="state" required onClick={(e) => { clicked(e.currentTarget.value) }}>
                      {
                        statename.map((item) => {
                          return <option key={item} value={item} name={item}>{item}</option>
                        })
                      }
                    </select>
                  </div>

                  <div className='anon-b'><label>Select City <span style={{ color: "red", marginLeft: "3px" }}>*</span> </label>
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
                    <div className='anon-b'> <label>UserName <span style={{ color: "red", marginLeft: "3px" }}>*</span> </label>
                      <input className='state' type="text" name="user_name" value={user_details} onChange={(e) => userData({ ...data, user_name: e.target.value })} /></div>
                    <div className='anon-b'><label>Email <span style={{ color: "red", marginLeft: "3px" }}>*</span> </label>
                      <input className='state' type="email" name="user_email" value={curruser} onChange={(e) => userData({ ...data, user_email: e.target.value })} /></div>
                  </div>
                </div>
                <input type="submit" value="Set An Appointment" className='submit-button' />
              </form>

            </div>

            {/* to check appointment */}
            <div className={`anon-body ${approv ? "displayit" : "donotdisplay"}`}>
              {/* <img src={group47} alt='background' className='anon-back'/> */}
              <h1 className='anonymous-head'>
                CHECK DETAILS OF YOUR APPOINTMENT
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
                <input type="submit" value="Check" className='submit-button' />
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
                        userData({ user_name: "", user_email: "" })
                        fun1()
                      }
                    }>APPLY AGAIN</button>
                  </div>

              }
            </div>

          </div>
      }
    </div>
  )
}
