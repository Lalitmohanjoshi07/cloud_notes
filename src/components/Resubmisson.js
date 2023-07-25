import React from 'react'
import {Link} from 'react-router-dom'
const Resubmisson = () => {

  return (
    <div className='container py-3'style={{border:"solid black 1px",borderRadius:'5px',maxWidth:'50%',backgroundColor:'wheat',position:'absolute',top:'20%',left:'20%'}}>
        <p>please conferm Resubmisson</p>
        <Link className="btn btn-primary"to="/">login</Link>
    </div>
  )
}

export default Resubmisson
