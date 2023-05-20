import React, { useState, useEffect, useRef } from 'react';
import Group_4 from '../components/Group 6.png';
import mom from '../components/mom.jpg';
import police from '../components/police.jpg';
import a2 from '../components/donate.png';
import { useNavigate} from 'react-router-dom';
import bg1 from '../components/bg1.webp';
import bg2 from'../components/bg2.jpg';
import bg3 from '../components/bg3.jpg';
import bg4 from '../components/bg4.jpg';
import portrait from '../components/portrait-mom.jpg';
import bg5 from '../components/bg5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { dataRef } from './blog/firebaseConfigBlog';

export default function 
Homepage() {
  const[showbtn, setshowbtn] = useState(false);
  const [blogData,setBlogData] = useState([]);
  const [storyData,setstoryData] = useState([]);
  const [reviewData,setReviewData] = useState([]);

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  useEffect(() => {
    dataRef.ref().child("Blogs").on('value', data => {
      const getdata = Object.values(data.val()).slice(0,5);
      setBlogData(getdata);
    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("Stories").on('value', data => {
      const getdata = Object.values(data.val()).slice(0,2);
      setstoryData(getdata);
    })
  }, [])

  useEffect(() => {
    dataRef.ref().child("Reviews").on('value', data => {
      const getdata = Object.values(data.val()).slice(0,1);
      setReviewData(getdata);
    })
  }, [])

  const navigate = useNavigate();
  function clickHandle(p){
    navigate(`./${p}`)
  }

  function onshow(){
    setshowbtn(true)

  }
  function ongo(){
    setshowbtn(false)
  }
  return (
    <div className="App">
        <img src={Group_4} alt="logo" className="logo"/>
        <div className='sample'>
          <ul className='note3'>
            <li className='note'>|</li>
            <li className='note'>Blogs</li>
            <li className='note'>|</li>
            <li className='note'>Stories</li>
            <li className='note'>|</li>
            <li className='note'>Reviews</li>
            <li className='note'>|</li>
          </ul>
          <div className="slider">
            <div className="slide-track">

              {/* slider part */}
                {
                  blogData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
                {
                  storyData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
                {
                  reviewData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
                {
                  blogData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
                {
                  storyData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
                {
                  reviewData.map((e) => {
                    return <div className="slide"><div className='inside' onMouseEnter={onshow} onMouseLeave={ongo}>
                    <img src={e.img} className="img" alt='img'/>
                    <p className='ppp'>{e.content.substring(0,400)}</p>
                    <button className={`button-of-slide${showbtn? 'show':''}`} onClick={() => clickHandle('Blog')}>Read More</button>
                    </div></div>
                  })
                }
              
            </div>
</div>
          <p className='note' onClick = {() => {clickHandle('Blog')}} onScrollCapture={() => clickHandle('AboutUs')}>See more blogs, stories and reviews...</p>
        </div>
        <div className='card1'>
          <img src={mom} className="c1" alt="Mom card"/>
          <img src={bg1} className="c2" alt= "portrait mom" />
          <img src={bg2} className="c2" alt= "portrait mom" />
          <img src={bg4} className="c3" alt="portrait mom" />
          <div className="card-inner">
            <div className='card-in cardA'>
            <button className='button1 b11' data-aos="zoom-out-left"  onClick = {() => {clickHandle('Doctor')}} >Listen To A Doctor</button>
            <p className='define p2' data-aos="zoom-out-left"  >Welcome to our website. If you're a teenager who is pregnant or think you may be, it's important to know that you're not alone. Many young women have faced similar situations and have gone on to have healthy pregnancies and healthy babies. As a doctor, my goal is to provide you with guidance and support throughout your pregnancy journey. Whether you're looking for information on prenatal care, managing your symptoms, or preparing for labor and delivery, we're here to help. We understand that this may be a challenging time for you, and we want to ensure that you have access to the resources you need to make informed decisions about your health and the health of your baby.</p>
            </div>
            <div className='card-in cardB'>
            <p className='define p1' data-aos="zoom-out-right" >Being a pregnant teen can be overwhelming, confusing, and scary. You are not alone; there are around 500,000 pregnant teens  every year. As a pregnant teen, you might be wondering how to break the news to your boyfriend and your parents, what you will choose for your pregnancy, how this will affect you finishing school, what your friends will say about you, or about how you will be able to provide for your baby. We are here to help you .The good news is there are resources, services, and support just for you.Our pregnancy educators are ready to help you figure out you if you’re pregnant, help you get a free and confidential pregnancy test and offer you a safe place to talk about your pregnancy options.</p>
            <button className='button1 b12' data-aos="zoom-out-right"  onClick = {() => {clickHandle('Counselling')}}>Free Counselling</button>
            </div>
          </div>

        </div>
        <div className='new-home-slider'>
  <div id="myCarousel" class="slide carousel " data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner">
      <div class="item active">
        <div style={{ width:"100%", height:"400px", backgroundColor:"#E1BAFF"}}>
                <h1 className='so-do-i'>It's not just about you, think of the life you will bring into this world too!!</h1>
        </div>
      </div>

      <div class="item">
        <div style={{width:"100%" , height:"400px", backgroundColor:"#E1BAFF"}}>
        <h1 className='so-do-i'>Gather the courage to take the right step!! Don't be scared, we are here for you!!</h1>
        </div>
      </div>
    
      <div class="item">
        <div style={{width:"100%", height:"400px", backgroundColor:"#E1BAFF"}}>
        <h1 className='so-do-i'>If the burden becomes unbearable, scream!!! ask for help!! Don't try to mature before age</h1>
        </div>
      </div>
    </div>

    {/* <!-- Left and right controls --> */}
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
        <div className='file-complaint'>

           <img src={police} alt="police" className='bg31'/>
           <img src={bg5} alt="police1" className='bg3'/>
          <button className='button1 b21' data-aos="zoom-in" onClick = {() => {clickHandle('Complaint')}}>File A Complaint</button>
          <p className='define k' data-aos="zoom-in" >Don't let wrong things go unheard or unchallenged If u think u have been  sexually harassed or assaulted Speak up and let the immoral act get meted.<br/> You can  follow a legal procedure and get justice against it.<br/>We are here to guide you with appropriate steps.You can contact  NGO ,Police ,legal consultants and women helpline</p>
        </div>
        <div className='donate'>
          <img src={a2} className="bg41" alt="donate"/>
          <img src={portrait} alt="police1" className='bg4'/>
          <button className='button1 b22' data-aos="zoom-in" onClick = {() => {clickHandle('Donate')}}>Donate And Help</button>
          <p className='define k2 ' data-aos="zoom-in" >Donate online to provide  help to  pregnant teenagers.<br/> Your  one little donation will give them another chance in life.<br/>You're free to donate anything as per your convenience.<br/> We appreciate any and every contribution you make.<br/>We will keep you updated and assured that your donation is actually helping pregnant teenagers across India.</p>
        </div>
        
    </div>
  )
}
