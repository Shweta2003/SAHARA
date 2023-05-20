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

      <NavLink className="P-read" to={`/Blog/story/${props.id}`}>
        Read me
      </NavLink>
    </div>
  );
}

function ShowStory(story, index) {
  return (
    <Particular
      index={index}
      key={story.key}
      img={story.data.img}
      description={story.data.content}
      id={story.data.author}
    />
  );
}

export default class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      storiesData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Stories");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ storiesData: records });
    });
  }

  render() {
    return (
      <div class="b-sections">{this.state.storiesData.map(ShowStory)}</div>
    );
  }
}
