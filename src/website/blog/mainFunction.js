import React from "react";
import { dataRef} from "./firebaseConfigBlog";
import { ref, set } from "firebase/database";

export class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      author: "",
      content: "",
      img: "",
    };
    this.interface = this.interface.bind(this);
  }

  componentDidMount() {
    this.setState({ db: dataRef });
  }

  render() {
    return (
      <div>
        <form className="ShareStory">
          <p className="share-form-text">Enter author name :</p>
          <textarea
            required
            cols="100"
            name="Name"
            value={this.state.author}
            onChange={(e) => {
              this.setState({ author: e.target.value });
            }}
          />

          <p className="share-form-text">Paste the link of image here :</p>
          <textarea
            required
            cols="100"
            name="Name"
            value={this.state.img}
            onChange={(e) => {
              this.setState({ img: e.target.value });
            }}
          />

          <p className="share-form-text">Write your blog/review/story here :</p>
          <textarea
            required
            rows="6"
            cols="100"
            name="Name"
            value={this.state.content}
            onChange={(e) => {
              this.setState({ content: e.target.value });
            }}
          />
          <div className="share-buttons">
            <button
              className="shareStory-button "
              id="addblog"
              onClick={this.interface}
            >
              PUBLISH BLOG
            </button>
            <button
              className="shareStory-button"
              id="addstory"
              onClick={this.interface}
            >
              PUBLISH STORY
            </button>
            <button
              className="shareStory-button"
              id="addreview"
              onClick={this.interface}
            >
              PUBLISH REVIEW
            </button>
          </div>
        </form>
      </div>
    );
  }

  interface(event) {
    const id = event.target.id;
    if (id === "addblog") {
      this.insertBlog();
    } else if (id === "addstory") {
      this.insertStory();
    } else if (id === "addreview") {
      this.insertReview();
    }
  }

  getAlldata() {
    return {
      author: this.state.author,
      content: this.state.content,
      img: this.state.img,
    };
  }

  insertBlog() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Blogs/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Blog Published Successfully");
    });
  }

  insertStory() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Stories/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Story Published Successfully");
    });
  }

  insertReview() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Reviews/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Review Published Successfully");
    });
  }
}

export default MainForm;
