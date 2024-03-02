import React from 'react'
// import facebook from 'https://www.facebook.com/Monash.University/'
// import instagram from 'https://www.instagram.com/monash_uni/?hl=en'
// import linkedin from 'https://www.linkedin.com/school/monash-university/?originalSubdomain=au'
import './Footer.css'
const footerStyle  = {
  theme: {
    backgroundColor: 'black',
    color:'white'
  }
}
const Footer = () => {
  return (
    <div style={footerStyle.theme}>
      <div className='statement1'> We wish to acknowledge the Wurundjeri People of the Kulin Nations, on whose land we build our game on, pay our respects to their Elders, past and present.</div>
      <h1 className='statement'> Find us on our Social media </h1>
        <div className='social'> Facebook</div>
        <div className='social'> Instagram</div>
        <div className='social'> LinkedIn</div>
      <h2 className='statement'> @Created by Quang, Andrew, Arnav, Khang</h2>
    </div>
  )
}

export default Footer