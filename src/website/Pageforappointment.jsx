import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Calendar from 'react-calendar';
import {dataRef} from './blog/firebaseConfigBlog';

const Pageforappointment = () => {
  const [date, setDate] = useState(new Date());
  const [userdata, setuserdata] = useState([]);
  const [keydata, setkeydata] = useState([]);
  const form = useRef();
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
    sending_name: "",

  });

  useEffect(() => {
    dataRef.ref().child("appointment_request").on('value', data => {
      const getdata = Object.values(data.val());
      const getkey = Object.keys(data.val())
      setuserdata(getdata);
      setkeydata(getkey);

    })
  }, [])

  function fun1(){
    setformd({purpose: "",
    to_name: "",
    to_email: "",
    mode: "",
    day: "",
    date: "",
    time: "",
    address: "",
    doctor_name: "",
    sending_email: "",
    sending_name: "",})
  }
 
  const sendEmail = (e) => {
    const formData = new FormData(e.target);
    const name = formData.get('to_name');
    const email = formData.get('to_email');
    const purpose = formData.get("purpose");
    e.preventDefault();

    

    let i = 0;

    userdata.map((data) => {
      if (data.user_name === name && data.user_email === email && data.purpose === purpose) {
        console.log(data);
        const d = {
          purpose: formd.purpose,
          to_name: formd.to_name,
          to_email: formd.to_email,
          mode: formd.mode,
          day: formd.day,
          date: formd.date,
          time: formd.time,
          address: formd.address,
          doctor_name: data.sending_name,
          sending_email: data.sending_email,
          sending_name: data.sending_name,
        }
        const sub = dataRef.ref().child("appointment_request");
        sub.child(keydata[i]).set(d);
        alert("done");
      //   emailjs.sendForm('service_pjwes2r', 'template_d7wxkqt', form.current, 'UWhSxUpfsU1hpadFb')
      // .then((result) => {
      //     console.log(result.text);
      //     alert("Approval email sent successfully!!")
      // }, (error) => {
      //     console.log(error.text);
      //     alert("Couldn't sent email... try again!!")
      // });
      }
      fun1()
      i = i + 1;
    })

  };


  

  return (
    <div className='app'>
      <h1 className='text-center'>BOOK AN APPOINTMENT</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} minDate={new Date()} />
      </div>
      <p className='bold'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <h1 className='text-center'>APPOINTMENT DETAILS</h1>
      <form id="#my-form" ref={form} onSubmit={sendEmail}>
        <div className='form'>
          <label htmlFor="purpose" className='label' >Purpose of Appointment</label>

          <select className='val' name="purpose" id="purpose" onClick={(e) => setformd({ ...formd, purpose: e.currentTarget.value })} required>
            <option value="counselling" name="counselling">counselling</option>
            <option value="doctor's appointment" name="doctor's appointment">doctor's guidance</option>
            <option value="legal guidance" name="legal guidance">legal guidance</option>
          </select>
        </div>

        <div className='form'>
          <label className='label'>Patient Name</label>
          <input className='val' type="text" name="to_name" onChange={(e) => setformd({ ...formd, to_name: e.target.value })} required />
        </div>

        <div className='form'>
          <label className='label'>Email</label>
          <input className='val' type="email" name="to_email" onChange={(e) => setformd({ ...formd, to_email: e.target.value })} required />
        </div>

        <div className='form'>
          <label className='label'>Mode</label>
          <div className='val'>
            <input type="radio" id="Online" name="mode" value="Online" onChange={(e) => setformd({ ...formd, mode: e.target.value })} />
            <label htmlFor="Online">Online</label>
            <input type="radio" id="Offline" name="mode" value="Offline" onChange={(e) => setformd({ ...formd, mode: e.target.value })} />
            <label htmlFor="Offline">Offline</label>
          </div>
        </div>

        <div className='form'>
          <label className='label'>Day</label>
          <input className='val' type="text" name='day' readOnly value={date.toDateString().substring(0, 3)} onMouseLeave={(e) => setformd({ ...formd, day: date.toDateString().substring(0, 3) })}  required></input>
        </div>

        <div className='form'>
          <label className='label'>Date</label>
          <input className='val' type="text" name='date' readOnly value={date.toDateString().substring(4, 7) + " / " + date.toDateString().substring(9, 11) + " / " + date.toDateString().substring(12, 16)} onMouseLeave={(e) => setformd({ ...formd, date: date.toDateString().substring(4, 7) + " / " + date.toDateString().substring(9, 11) + " / " + date.toDateString().substring(12, 16) })}  required></input>
        </div>

        <div className='form'>
          <label className='label'>Time Slot</label>
          <input className='val' type="time" id="time" name="time" onChange={(e) => setformd({ ...formd, time: e.target.value })}  required/>
        </div>

        <div className='form'>
          <label className='label'>Complete Address</label>
          <textarea className='val' name="address" onChange={(e) => setformd({ ...formd, address: e.target.value })}  required/>

        </div>

        <div className='form'>
          <label className='label' htmlFor="doctor">Name of Appointer
          </label>
          <input className='val' type="text" id="doctor" name="doctor_name" onChange={(e) => setformd({ ...formd, doctor_name: e.target.value })}  required/>

        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Pageforappointment;

