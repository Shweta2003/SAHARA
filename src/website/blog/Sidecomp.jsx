import React from "react";
import bg from "../../components/blogbg.jpg"

function Sidecomp(){
    return(
        <div className="Sidecomp">
            <img src={bg} className="blog-top" alt="" />
            <h1>You are not alone</h1>
        </div>
    )
}

export  default Sidecomp;