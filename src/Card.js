import React from 'react';


// function card(prop) {
const Card = (prop) => {
  
    const myStyle = {
      "width": "100%",
      "max-width": "300px"
    }
  
    return (
      <div className="card" style={myStyle}>
  
        <img src={prop.image}
        className="card-img-top" alt="..."/>
  
        <div className="card-body">
          <h5 className="card-title">{prop.title}</h5>
          <p className="card-text">{prop.description}</p>
          <a href="#" className="btn btn-primary">{prop.buttonLabel}</a>
        </div>
      </div>
    )
}

export default Card;