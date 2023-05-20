import React,{useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Dropdown from './Dropdown';
import dropimg from '../components/dropdown.png';

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  const [showres, setResBox] = useState(false);
  const [loginornot,setloginornot] = useState("Login");
  const [user,setUser] = useState(null);


  useEffect( () => {setUser(firebase.auth().currentUser)
    console.log(user)
    if(user !== null){
      setloginornot("Sign Out")
    }
    else{
      setloginornot("Login")
    }
},[user,setUser])

  const history = useNavigate();
  function dropClick1(){
    setShowBox(false);
    
  }
  function dropClick2(){
    setShowBox(true);
    
  }
  function handleClick(){
    history("./Login")
  }

  function handleClick1(){
    setResBox(!showres)
  }
  
  return (
    <header className={`header ${showBox ? 'show' : ''}`}>

      <div className="response">
        <button className='droping'><img src={dropimg} alt="droping" onClick={handleClick1}/></button>
        <Dropdown head={`${showres ? "" : "show"}`}/>
      </div>
        <ul className="header-list">
          <Link to="./" className="ul">Home</Link>
          <Link to="./Blog" className="ul">Blog</Link>
          <Link to="./FAQ" className="ul">FAQs</Link>
          <Link to="./Complaint" className="ul">Complaint</Link> 
          <Link to="./Counselling" className="ul">Counselling</Link> 
          <div className='drop-class' onMouseLeave={dropClick1} >
          <Link to="#" className={`ul drop ${showBox ? 'show' : ''}`} onMouseEnter={dropClick2}>More</Link> 
          <Dropdown />
          </div>
           <button className='login' onClick={handleClick}>{loginornot}</button>
        </ul>
        
      </header>
  )
}
