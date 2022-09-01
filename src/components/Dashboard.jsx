import React from 'react'

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className='dashboard-main'>
        <h1>Hello, I'm Isa</h1>
        <div className='about-me'>
          <div className='about-me--container'>
            <h2>About me</h2>
            <img className='about-me--photo' src="foto.jpeg" alt="" />
          </div>
          <div className='about-me--desc'>My name is Camila Isadora Valenzuela Fierro
            and I'm a software engineer student, cat mom and coffee lover.
            I'm also a sociologist and as such, I believe we
            learn and work better when we make connections with others.
          </div>
          <div>This section is under construction 🛠</div>
        </div>
        <p className='contact-me--title'>Where to find me?</p>
        <div className='contact-me--container'>
          <p>You can click one of these buttons or, if you prefer, you can <a className='email-link' href="mailto: cami.valenzuela@uc.cl">send me an email.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard