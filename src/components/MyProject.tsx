import React from 'react'

type Props = {
  name: string,
  deployLink: any,
  latestDeployments: any,
  alias: any,
}

const MyProject = ({ name, deployLink, latestDeployments, alias }: Props) => {
  return (
    <div className="card">
      <p className="card__title">{name}</p>
      <a href={'https://www.vercel.com'} target="_blank" rel="noreferrer">
        <button className="card__button" onClick={deployLink}>Deploy en Vercel</button>
      </a>
    </div >
  )
}

export default MyProject