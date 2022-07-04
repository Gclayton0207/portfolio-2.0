import React from 'react'
import CV from '../../assets/Giovanni Clayton Full stack.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contato'className='btn btn-primary'>Vamos conversar</a>
    </div>
  )
}

export default CTA