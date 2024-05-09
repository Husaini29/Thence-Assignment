import React from 'react'
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {

  return (
      <div>
        <div className="registration-container">
          <div>
            <h2 className="registration">Registration Form</h2>
          </div>
          <h1>
            Start your sucess <span>Journey here.</span>
          </h1>
        </div>  

        <RegistrationForm/>
      </div>    
  )
}

export default RegistrationPage