import React, { useState, useEffect, useRef } from 'react'
import legal from "../components/legal.webp"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import doc from "../components/backback2.jpg";
import { dataRef } from './blog/firebaseConfigBlog';
import group46 from "../components/backbackback.jpeg";
import seesoon from "../components/seesoom.jpg";
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firebase from 'firebase/compat/app';
import confirm from "../components/Appointment-Confirmation.jpg";
import 'firebase/compat/auth';

export const Legalguide = () => {
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
    "https://tse1.mm.bing.net/th?id=OIP.un5ygVz2Gtz-diBDtwQXNwAAAA&pid=Api&P=0",
    "https://www.livelaw.in/h-upload/2023/03/10/750x450_462822-fq3ocm-wcaafgcy.webp",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Debabrata_Saikia_Cropped.png",
    "https://tse3.mm.bing.net/th?id=OIP._Qn2P_dAqXGw5VwNKjf11AHaFj&pid=Api&P=0",
    "https://tse3.mm.bing.net/th?id=OIP._Qn2P_dAqXGw5VwNKjf11AHaFj&pid=Api&P=0",
    "https://cdn.siasat.com/wp-content/uploads/2021/06/BS-Prasad.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.1tKwaruZh7sUaRZ1RVC99QHaEJ&pid=Api&P=0",
    "https://tse3.mm.bing.net/th?id=OIP.9bqsAZ7mHl0rQE9xd6VwMgHaFI&pid=Api&P=0"
  ];

  useEffect(() => {
    setUser(firebase.auth().currentUser);
    if (user !== null) {
      console.log(user._delegate.email)
      setcurruser(user._delegate.email)
    }
  }, [user, setUser])

  useEffect(() => {
    dataRef.ref().child("user_details").on('value', data => {
      const getdata = Object.values(data.val());
      geta(getdata);
    })
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  

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
    dataRef.ref().child("legal_record").on('value', data => {
      const getdata = Object.values(data.val()).slice(0, 8);
      getallblog(getdata);
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
        console.log(a[j].name);
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

    if (name === '' || email === '') {
      alert("enter complete details!!")
    }
    else {
      if (formde) {
        const state = formData.get('state');
        console.log(state);

        dataRef.ref().child(`legal_record/${state}`).on('value', data => {
          const getdata = Object.values(data.val());
          selecthospital(getdata);
        var templateParams = {
          sending_email: "bandismita7@gmail.com",
          purpose: "legal guidance",
          sending_name: getdata[Math.floor(Math.random() * getdata.length)].name,
          user_name: `${name}`,
          user_email: `${email}`
        };
        emailjs.send('service_c9tddfh', 'template_b8b5w7a', templateParams, 'Z5XcQD91gLjF0ixVr')
          .then((result) => {
              console.log(result.text);
              alert("Email sent to nearest law office successfully!!")
          }, (error) => {
              console.log(error.text);
              alert("couldn't send mail... try again!!")
          });

        dataRef.ref().child("appointment_request").push(templateParams);
        fun2();
      })
      }
      else {
        setapprovnext(true)
        let i = 0;
        let found = false;
        userdata.map((data) => {
          if (data.to_name === name && data.to_email === email && data.purpose === "legal guidance") {
            alert("data found in database")
            found = true;
            setformd(data);
            todel(keydata[i]);
            setapprov(false);
            setshowdet(true);
          }
          else if (data.user_name === name && data.user_email === email && data.purpose === "legal guidance") {
            alert("Your appointment has not been confirmed yet")
            found = true;
          }
          i = i + 1;
        })
        if (found === false) {
          data2.map((item) => {
            if (item.to_name === name && item.to_email === email && item.purpose === "legal guidance") {
              setconfirm(true)
              setformd(item);
              alert("Your appointment is set!!")
              setshowdet(true);
              setapprov(false);
            }
          })
        }
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
        <div className='b'><p className='approv-p-left'>Consultant's name </p><p>:</p><p className='approv-p-right'>{formd.doctor_name}</p></div>
        <div className='b'><p className='approv-p-left'>Contact Office on</p><p>:</p> <p className='approv-p-right'> {formd.sending_email}</p></div>
        <div className='b'><p className='approv-p-left'>Office </p><p>:</p> <p className='approv-p-right'>{formd.sending_name}</p></div>
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
    <div className='main-legal-body'>
      <div className={`main-item ${main ? "displayit" : "donotdisplay"}`}>
      <div className='top-b'>
        <img src={legal} alt="" className='legal-background' />
        <h1 data-aos="flip-left"  className='legal-head'>EXPERIENCE o TRUST o RESULT</h1>
      </div>
      <div className='legal-btn-class' data-aos="flip-right" >
        <button className='legal-enter' onClick={() => {
          displayform(true)
          showmain(false)
          fun1()

        }} >BOOK FREE CONSULTATION</button>
        <div className='break'>|</div>
        <button className='legal-check' onClick={() => {
          showmain(false)
          setapprov(true)

        }}>CHECK YOUR APPOINTMENT DETAILS</button>
      </div>
      <div className='legal-next-body'>
        <p style={{ marginTop: "70px", fontSize: "20px", width: "100%", textAlign: "center" }}>Legal consultants are professionals who provide legal advice and guidance to clients on specific legal matters. They may work independently, or as part of a legal firm or consultancy. Legal consultants may specialize in a particular area of law, such as corporate law, intellectual property law, or employment law, among others. They may also provide services such as contract review, negotiation, and drafting, as well as legal research and analysis. Clients may seek the services of legal consultants for a variety of reasons, including to navigate complex legal issues, to minimize legal risks, or to ensure compliance with applicable laws and regulations. You can go through legal procedure and know your rights and raise the voice against the immoral acts you experienced.</p>
        <h1 style={{ fontFamily: "'Bruno Ace SC', cursive", margin: "50px 0px", width: "97%", textAlign: "center" }} data-aos="flip-left">Get to know our top consultants</h1>

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
                    <div className='doctor-slide' key={e[0].name}>
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
      </div>
      {/* to enter data */}
      <div className={`anon-body ${formde ? "displayit" : "donotdisplay"}`}>
        <img src={group46} alt='background' className='anon-back' />
        <h1 className='anonymous-head' >
          BOOK AN APPOINTMENT WITH THE NEAREST LEGAL CONSULTANT
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
  )
}


