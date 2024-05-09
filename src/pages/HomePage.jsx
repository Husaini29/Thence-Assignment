import React from 'react'
import { FaArrowRight,FaPlus, FaMinus } from "react-icons/fa6";

export const HomePage = () => {
  return (
    <div>

        <div className="testimonial-layout">
          <div className="quote-layout">
            <h2 className="success-stories">Success stories</h2>
          </div>
          <h1>
            Every success journey <span>we’ve encountered.</span>
          </h1>
        </div>  

        <div className='performance-metrics'>
            <img className="girl-logo" src='/logo-girl.png' alt="Girl"/>

            <div className='time-efficiency'>
                <div>
                    <img className="sparkle" src='/sparkle.png' alt="sparkle"/>
                    <span className='time-efficiency-percentage'>40%</span>
                </div>
                <div className='time-efficiency-text'>
                    Achieved reduction in project execution time by optimising team availability.
                </div>
            </div>
        </div>

        <div className='staff-deployment-container'>
            <img src="/rocket.svg" alt="rocket" />
            <div>
                <span className='deployment-days'>10 DAYS</span>
                <span className='deployment-text'>Staff Deployment</span>
            </div>
        </div>

        <div className='savings-container'>
            <div className='savings-amount-container'>
                <span className='savings-amount'>$0.5</span>
                <span className='savings-amount-text'>MILLIONS</span>
            </div>
            <div className='savings-text'>
                Reduced client expenses by saving on hiring and employee costs.
            </div>
        </div>

        <div className='insights-container'>
            <div className='insights'>
                <span>Enhance fortune 50 company's insights teams research capabilities</span>
                <div className='carousel'>
                    <span className='carousel-active'></span>
                    <span className='carousel-inactive'></span>
                    <span className='carousel-inactive'></span>
                </div>
            </div>

            <div className='explore'>
                <button className='primary-btn'> 
                    Explore more 
                    <span><FaArrowRight/></span>
                </button>
            </div>

        </div>

        <div className='questions-container'>

            <div className='questions'>
                <span>What's on your mind</span>
                <span>Ask Questions</span>
            </div>
            
            <div className='union'>
                <img src="/union.svg" alt="union" />
            </div>

            <div className='asked-questions'>
                <div>
                    <span>Do you offer freelancers ?</span>
                    <span><FaPlus /></span>
                </div>
                <div>
                    <span className='long-question'>What's the guarantee that I will be satisfied with the hired talent ?</span>
                    <span><FaPlus /></span>
                </div>
                <div className='open-question-container'>
                    <div className='open-question'>
                        <span>Can i hire multiple talents at once?</span>
                        <span><FaMinus /></span>
                    </div>
                    <p className='open-answer'>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
                    </p>
                </div>
                <div>
                    <span>Why should I not go to agency directly ?</span>
                    <span><FaPlus /></span>
                </div>
                <div>
                    <span className='long-question'>Who can help me pick a right skillset and duration for me ?</span>
                    <span><FaPlus /></span>
                </div>
            </div>
        </div>

        <div className='footer'>
            <div className='footer-content'>
                <div> &#169; Talup 2023.All right reserved.</div>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>
  )
}
