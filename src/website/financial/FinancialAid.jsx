import React,{useEffect} from "react";
import {dataRef} from "../blog/firebaseConfigBlog";
import { ref, set } from "firebase/database";
import "./financial.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import formpart from "../../components/get-help.jpg"
import bg from "../../components/help.jpg"

export class FinancialAid extends React.Component {
  

  constructor(props) {
    super(props);
    AOS.init({duration: 2000});
    this.state = {
      db: "",
      name: "",
      age: "",
      dob: "",
      address: ""
    };
    this.interface = this.interface.bind(this);
  }

 

  componentDidMount() {
    this.setState({ db: dataRef });
  }

  render() {
    return (
      <div className="finance-sector">
        <div className="finance-some">
        <div className="finance-nav">
          
          <img src={bg} className="bg-of-finance" alt=""/>
          <h2 className="finance-text"  data-aos="zoom">
            | Financial Aid for weaker Section |
          </h2>
          </div>

          <p className="finance-p-text">
          One of the biggest concerns as a young parent is around having enough money to care for your child and for yourself.Paying hospital bills after birth is common. The postpartum period is a very fundamental time for the health and wellness of both the birthing parent and baby. In fact, the majority of postpartum spending happens after 60 days following childbirth.Sahara is providing financial aid to such teen mothers .Feel free to ask for help.
          </p>
          </div>
          
          <h3 className="do-some-name"> Fill the below form to get benefitted :</h3>
          
          <div className=" finance-form" data-aos="flip-up">
          <div className="form-part">
            <div className="part-of-it"><b className="finance-form-input">Name :</b>
            <input
              type="Text"
              placeholder="Enter your name"
              value={this.state.author}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            /></div>
            <br />
          
            <div className="part-of-it"><b className="finance-form-input">Age :</b>
            <input
              type="number"
              placeholder="Enter your age"
              value={this.state.author}
              onChange={(e) => {
                this.setState({ age: e.target.value });
              }}
            /></div>
            <br />
            <div className="part-of-it"><b className="finance-form-input">Date of Birth :</b>
            <input
              type="Text"
              placeholder=" Enter your D-O-B"
              value={this.state.author}
              onChange={(e) => {
                this.setState({ dob: e.target.value });
              }}
            /></div>
            <br />
            <div className="part-of-it"><b className="finance-form-input finance-address">
              Enter your address :
            </b>
            <textarea
              name="Address"
              placeholder="Please Enter the Address"
              colums="100"
              value={this.state.author}
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            /></div>
            <br />
            <button onClick={this.interface} className="finance-button">
              Submit Form
            </button>
          </div>
          <img src={formpart} alt="" className="form-bg-financial"/>
          </div>
          <div className="change-of-b"> </div>
      </div>
    );
  }

  interface(event) {
    this.insertData();
  }

  getAlldata() {
    return {
      name: this.state.name,
      age: this.state.age,
      dob: this.state.dob,
      address: this.state.address
    };
  }

  insertData() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Finance_Form/" + data.name), {
      name: data.name,
      age: data.age,
      dob: data.dob,
      address: data.address
    }).then(() => {
      alert("Form Submitted Successfully");
    });
  }
}

export default FinancialAid;
