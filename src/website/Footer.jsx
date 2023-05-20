import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import facebook from '../components/facebook.png';
import insta from '../components/insta.png';
import mail from '../components/mail.png';
import twitter from '../components/twitter.png'

export default function Footer() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("./About")
    }
  return (
    <div className='Footer'>
        <div className='section-1'>
            <h1 className='About-us'>About Us</h1>
            <div className='par'>
            <div className='part'>
                <p onClick={handleClick}>Contact</p>
                <p onClick={handleClick}>Address</p>
                <p onClick={handleClick}>Email</p>
            </div>
            <div className='part'>
                <p onClick={handleClick}>Cookies</p>
                <p onClick={handleClick}>Privacy</p>
            </div>
            <div className='part'>
                <p onClick={handleClick}>Benificiaries</p>
                <p onClick={handleClick}>Terms and Conditions</p>
            </div>
        </div>
        </div>
        <div className='vertical-line'></div>
        <div className='section-2'>
            <Link to="/ContactUs"><img src={facebook} className='sec2img' alt='facebook'/></Link>
            <Link to="/ContactUs"><img src={insta} className='sec2img' alt='facebook'/></Link>
            <Link to="/ContactUs"><img src={twitter} className='sec2img' alt='facebook'/></Link>
            <Link to="/ContactUs"><img src={mail} className='sec2img' alt='facebook'/></Link>
        </div>
        
    </div>
  )
}
