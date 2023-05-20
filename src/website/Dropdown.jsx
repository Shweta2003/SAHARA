import React,{useState, useEffect} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {Link} from 'react-router-dom';

export default function Dropdown(head) {
  const [showBox, setShowBox] = useState(false);
  const [loginornot,setloginornot] = useState("Login");
  function handleClick(){
    setShowBox(!showBox);
  }

  const [user,setUser] = useState(null);


  useEffect( () => {setUser(firebase.auth().currentUser)
    console.log(user)
    if(user !== null){
      setloginornot("Sign Out")
    }
    else{
      setloginornot("Login")
    }
},[])

  return (
    <>
    <div className="dropdown-content">
            <Link to="./Login" className='ul'>Login</Link>
            <Link to="./Doctor" className='ul'>Consult Doctor</Link>
            <Link to="./Donate" className='ul'>Donate & help</Link>
            <Link to="./AboutUs" className='ul'>AboutUs</Link>
          </div>
    <div className={`responsive-drop-${head.head}${showBox ? "show" : ""}`}>
        <Link to="./" className="ul cl" onClick={handleClick}>Home</Link>
        <Link to="./Blog" className="ul cl" onClick={handleClick}>Blog</Link>
        <Link to="#" className="ul cl" onClick={handleClick}>FAQs</Link>
        <Link to="./Complaint" className="ul cl" onClick={handleClick}>Complaint</Link> 
        <Link to="./Counselling" className="ul cl" onClick={handleClick}>Counselling</Link> 
        <Link to="./Login" className='ul cl' onClick={handleClick} >{
          user !== null? "Sign Out"
          : "Login"
}</Link>
        <Link to="./Doctor" className='ul cl' onClick={handleClick}>Consult Doctor</Link>
        <Link to="./Donate" className='ul cl' onClick={handleClick}>Donate & help</Link>
        <Link to="./AboutUs" className='ul cl' onClick={handleClick}>AboutUs</Link>
    </div>
    </>
  )
}
