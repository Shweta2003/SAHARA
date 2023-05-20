import React, { useState , useRef , useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import loginbg from '../components/login-bg.jpg';
import { auth, dataRef } from './blog/firebaseConfigBlog';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

export default function Login() {
  const [user,setUser] = useState(null);
  const form = useRef();
  const [userdata,setuserdata] = useState({
    email:"",
    password:""
  })
  

 useEffect( () => {setUser(firebase.auth().currentUser)
        
},[user,setUser])

const navigate = useNavigate();

function fun1(){
  setuserdata({email:"",password:""})
  navigate(`../`)
}

  const sendEmail = (e) => {
    e.preventDefault(); 
    console.log(userdata)
    signInWithEmailAndPassword(auth,userdata.email,userdata.password).then(
      (userCredential) => {
        alert("Successfully logged in !!");
        setUser(userCredential)
        fun1()
      }
    ).catch(
      (error) => {
        alert(`Couldn't login..${error.message}`)
        console.log(error);
      }
    )
    }

  const signoutfun = () => {
    alert("Do you want to sign Out of SAHARA ?")
    signOut(auth).then((res) => {console.log( "sign out")
      setUser(null)
  }
    ).catch((err) => console.log(err.message))
  }
  return (
    <div className='login-b'>
      <img src={loginbg} alt="" style={{objectFit:"cover"}}/>
      {
        user === null ? <div className="login-body">
        
        
          <form ref={form} onSubmit={sendEmail} className='login-form'>
          <h1 style={{fontWeight:"800"}}>LOGIN</h1>
            <div className='data' style={{marginTop:"-20px"}}><h4 className='q'>  Email-id<span style={{color:"red",marginLeft:"3px"}}>*</span>  </h4><input type="email" value={userdata.email} required placeholder="Enter your Email-id" onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} style={{marginTop:"-20px",backgroundColor:"white",border:"1px solid black",padding:"7px",color:"black"}} /> </div>
  
            <div className='data' style={{marginTop:"20px"}}><h6 className='q'>  Password <span style={{color:"red",marginLeft:"3px"}}>*</span> </h6><input type="password"  value={userdata.password} required placeholder="Enter Password" onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} style={{marginTop:"-20px",backgroundColor:"white",border:"1px solid black",padding:"7px",color:"black"}}/> </div>
            <input type='submit' value="SUBMIT" className='submit-button' style={{marginTop:"3vw",marginBottom:"1vw"}}/>
            <h4 className='ttt' style={{marginTop:"30px",marginBottom:"-60px"}}>Don't have an Account? Create One Now <Link to="../Register" style={{color:"blue",paddingLeft:"10px"}}>Register</Link></h4>
          </form>
      </div>
      : <div className='signout'>
        <button onClick={signoutfun} >Sign Out</button>
      </div>
      }
    </div>
    
  )
}
