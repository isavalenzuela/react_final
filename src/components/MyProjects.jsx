import React from 'react';

const MyProjects = () => {

  /*   function Card(props) {
      return
      console.log(props);
    } */

  return (
    <div className="card" key={props.key}>
      <h3 className="card__titulo">{props[11][0].name}</h3>
      <button className='card__button' href={props[11][0].alias[0]}>Deploy en Vercel</button>
    </div>
  )
}

export default MyProjects