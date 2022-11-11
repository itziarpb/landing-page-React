import React from "react";
import imagenCard from "../../img/500x325.png";

const Card =()=>{
    return (
        <div className="card ">
        <img src={imagenCard} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" className="btn btn-primary">Find out more!</a>
  </div>
</div>
)}

export default Card;