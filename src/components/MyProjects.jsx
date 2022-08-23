import React from 'react';

const MyProjects = () => {

  function Card(props) {

    console.log(props);
    return (
      <div className="card" key={props.key}>
        <div className="card__image">
          <img
            className="card__image-background"
            src={props.background}
            alt={props.name}
          />
          <img
            className="card__imagen-icon"
            src={props.icon}
            alt={props.name}
          />
        </div>
        <div className="card__parrafo">
          <h3 className="card__titulo">{props.name}</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      MyProjects
      
    </div>
  )
}

export default MyProjects