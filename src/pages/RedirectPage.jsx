import React, { useState,useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom/dist';

const RedirectPage = () => {

    const navigate = useNavigate();

    const [countdown,setCountDown] = useState(5);
 
    useEffect(()=>{
        if(countdown > 0){
            const timer = setInterval(()=>{
                setCountDown(prev => prev -1);
            },1000); 
            return ()=> clearInterval(timer);
        }
        
    },[countdown]);

    useEffect(()=>{
        
        setTimeout(() => {
            // Redirect to home page after 5 seconds
            navigate("/");
          }, 5000);
    },[]);

  return (
    <div>
        <div className='redirect-container'>
            <div>
                <span className='check-icon'><FaCheckCircle /></span>
            </div>
            <div className='success-text'>
                <p>Success Submitted</p>
                <h1>Congratulations</h1>
                <div>
                    Your Request has been successfully submitted to us.We 
                    <span>will validate your information and reach out to your</span>
                    <span>shortly with updates.</span>
                </div>
            </div>
        </div>

        <div className='redirect-text'>
            <span>Redirecting you to Homepage in</span> 
            <h4>{countdown} seconds.</h4>
        </div>

    </div>
  )
}

export default RedirectPage;