import { useParams } from "react-router-dom";
import React from "react";
import story from "./story";

function SpecificReview() {
  const { id } = useParams();
  console.log(id);
  const found = story.find((obj) => {
    return String(obj.id) === id;
  });
  console.log(found);
  return (
    <div className="specific">
      <img className="specific-img" src={found.img} alt="" />
      <p className="specific-text">{found.description}</p>
    </div>
  );
}

export default SpecificReview;
