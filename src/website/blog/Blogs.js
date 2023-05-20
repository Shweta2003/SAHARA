import React from "react";
import { dataRef } from "./firebaseConfigBlog";
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

      <NavLink className="P-read" to={`/Blog/blog/${props.id}`}>
        Read me
      </NavLink>
    </div>
  );
}

function ShowBlog(blog, index) {
  return (
    <Particular
      index={index}
      key={blog.key}
      img={blog.data.img}
      description={blog.data.content}
      id={blog.data.author}
    />
  );
}

export default class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      blogsData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Blogs");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ blogsData: records });
    });
  }

  render() {
    return <div class="b-sections">{this.state.blogsData.map(ShowBlog)}</div>;
  }
}
