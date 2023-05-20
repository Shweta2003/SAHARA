import React from "react";
import {dataRef} from "./firebaseConfigBlog";
import { ref, onValue } from "firebase/database";
import { NavLink } from "react-router-dom";

const db = dataRef;

function Particular(props) {
  return (
    <div className="P-main">
      {props.index % 2 === 0 ? (
        <>
          <img className="P-img" src={props.img} alt=""></img>{" "}
          <div className="P-description">
            {props.description.substring(0, 220)}.........
          </div>
        </>
      ) : (
        <>
          <div className="P-description">
            {props.description.substring(0, 220)}.........
          </div>
          <img className="P-img" src={props.img} alt=""></img>
        </>
      )}

      <NavLink className="P-read" to={`/Blog/review/${props.id}`}>
        Read me
      </NavLink>
    </div>
  );
}

function ShowReview(review, index) {
  return (
    <Particular
      index={index}
      key={review.key}
      img={review.data.img}
      description={review.data.content}
      id={review.data.author}
    />
  );
}

export default class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewsData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Reviews");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ reviewsData: records });
    });
  }

  render() {
    return (
      <div class="b-sections">{this.state.reviewsData.map(ShowReview)}</div>
    );
  }
}
