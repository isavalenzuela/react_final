import React from 'react'

type Props = {
  name: string,
  deployLink: any,
}

const MyProject = ({ name, deployLink }: Props) => {
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <button className="card__button" onClick={deployLink}>Deploy en Vercel</button>
    </div>
  )
}

export default MyProject