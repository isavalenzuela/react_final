import React from 'react';

const MyProject = (props) => {

  /*   function Card(props) {
      return
      console.log(props);
    } */

  return (
    <div className="card">
      <h3 className="card__title">{props.name}</h3>
      <button className='card__button' href={props.deployLink}>Deploy en Vercel</button>
    </div>
  )
}

export default MyProject