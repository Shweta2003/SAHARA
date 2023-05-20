import { FinancialAid } from "./financial/FinancialAid";
import DonatePage from "./DonatePage";
import { useState,useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {Link} from 'react-router-dom'

export default function Donate() {
  const [user,setUser] = useState(null);
  

 useEffect( () => {setUser(firebase.auth().currentUser)
        
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
        : <div>

        <FinancialAid />
        <DonatePage />
      </div>
      }
    </div>
  );
}
