import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, dataRef} from '../blog/firebaseConfigBlog';
import {Link, useNavigate} from 'react-router-dom'
import "./smita2.css"
import bg from "../../components/We-are-here-for-you.jpg";

export default function Register() {
  const navigate = useNavigate();
  const form = useRef();
  let [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    guardian_name: "",
    guardian_phone_no: "",
    relation: "",
    address: ""
  })

  const fun1 = () => {
    setuserdata({
      name: "",
    email: "",
    password: "",
    phone_no: "",
    guardian_name: "",
    guardian_phone_no: "",
    relation: "",
    address: ""
    })
    navigate("../Login")
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    
    console.log(userdata)
    createUserWithEmailAndPassword(auth,userdata.email,userdata.password).then(
      (res) => {
        let data = {name: userdata.name,
        email: userdata.email,
        password: "*****",
        phone_no: userdata.phone_no,
        guardian_name: userdata.guardian_name,
        guardian_phone_no: userdata.guardian_phone_no,
        relation: userdata.relation,
        address:userdata.address}
        console.log(userdata)
        dataRef.ref().child("user_details").push(data);
        alert("You are registered into SAHARA successfully!!");
        fun1();

      }
    ).catch(
      (error) => {
        alert(`Couldn't create account..${error.message}`)
        console.log(error);
      }
    )
  }


  return (
    <>
    <h1 style={{width:"100%",textAlign:"center",fontWeight:"800",fontSize:"50px",color:"black"}}>REGISTER YOURSELF</h1>
    <div className="register-body">
      
      <form ref={form} onSubmit={sendEmail} className='smita-form'>
        <div className="pre">
          <h1> Applicant's Information</h1>

          <div className='data'><p> Name<span style={{color:"red",marginLeft:"3px"}}>*</span> </p> <input type="Text" required placeholder="Enter your full name" value={userdata
            .name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })} /> </div>

          <div className='data'><p>  Email-id<span style={{color:"red",marginLeft:"3px"}}>*</span></p><input type="email" value={userdata.email} required placeholder="Enter your Email-id" onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} /> </div>

          <div className='data'><p>  Password<span style={{color:"red",marginLeft:"3px"}}>*</span>  </p><input type="password" value={userdata.password} required placeholder="Enter Password" onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} /> </div>

          <div className='data'><p>  Phoneno <span style={{color:"red",marginLeft:"3px"}}>*</span>  </p><input type="text" required value={userdata.phone_no} placeholder=" Enter your Phoneno" onChange={(e) => setuserdata({ ...userdata, phone_no: e.target.value })} style={{zIndex:"4"}}/> </div>

          <div className="pre">
            <h1> Applicant's Guardian Information</h1></div>

          <div className='data'><p>  Name  <span style={{color:"red",marginLeft:"3px"}}>*</span>    </p><input type="Text" value={userdata.guardian_name} required placeholder="Guardian's Name" onChange={(e) => setuserdata({ ...userdata, guardian_name: e.target.value })} /> </div>

          <div className='data'><p>  Phoneno<span style={{color:"red",marginLeft:"3px"}}>*</span>   </p><input type="Text" required value={userdata.guardian_phone_no} placeholder="Guardian Phone no" onChange={(e) => setuserdata({ ...userdata, guardian_phone_no: e.target.value })}  style={{zIndex:"4"}}/> </div>
        </div>
        <div className="pre">
          <h1>Relation with Guardian </h1>
        </div>

        <div className='data1'>  <label htmlFor="101">
          <input type="radio" value="Mother" name="Category" id="101" required onClick={(e) => setuserdata({ ...userdata, relation: e.target.value })} />Mother
        </label>
          <label htmlFor="102">
            <input type="radio" value="Father" name="Category" id="102" required onClick={(e) => setuserdata({ ...userdata, relation: e.target.value })} />Father
          </label>
          <label htmlFor="103">
            <input type="radio" value="Others" name="Category" id="103" required onClick={(e) => setuserdata({ ...userdata, relation: e.target.value })} />Others
          </label>
        </div>
        {
                    userdata.relation === "Others" ? <div className='data'><p>If others </p> 
                    <input type="text" placeholder="Relation with Guardian" value={userdata.others} onPointerLeave={(e) => setuserdata({ ...userdata, relation: e.target.value })}/> </div>
                     :
                     console.log("no")
                  }
        <div className='data'><p>Enter your address<span style={{color:"red",marginLeft:"3px"}}>*</span> </p>
          <textarea name="Address" placeholder="Please Enter the Address" rows=" 1 " value={userdata.address} required onChange={(e) => setuserdata({ ...userdata, address: e.target.value })} /> </div>
        <input type="submit" value="submit" className='submit-button' style={{width:"100px",padding:"5px",margin:"15px"}}/>
        <h4 style={{color:"white"}}>Already have an Account? <Link to="../Login" style={{color:"rgb(255,153,0)",paddingLeft:"10px"}} >LogIn</Link></h4>
      </form>
      <img src={bg} alt='bg' className='register-bg'/>

    </div>
    </>
  )
}
