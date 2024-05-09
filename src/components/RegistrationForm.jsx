import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { MdError } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

   const [formData,setFormData] = useState({
    name:"",
    email:""
   });

   const [errors,setErrors] = useState({});
   const [isFormFilled,setIsFormFilled] = useState(false);

   const navigate = useNavigate();

    const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required")
    });

    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        await validationSchema.validate(formData,{ abortEarly:false });
        console.log("Form Submitted",  formData);
        setFormData({
          name:"",
          email:""
        });
        navigate("/redirect");
      } catch (error) {
        const newErrors = {};

        error.inner.forEach((err)=>{
          newErrors[err.path] = err.message;
        });

        setErrors(newErrors);
      } 
    }

    useEffect(()=>{
      if(formData.name.length > 0 && formData.email.length >0){
        setIsFormFilled(true)
      }else{
        setIsFormFilled(false);
      }
    },[formData]);

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} placeholder='Enter your name'/>
          {errors.name && <div className='errors'><MdError /> {errors.name}</div>}
        </div>

        <div>
          <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} placeholder='Enter your email'/>
          {errors.email && <div className='errors'><MdError /> {errors.email}</div>}
        </div>
        <button type='submit' disabled={!isFormFilled} className={`primary-btn submit-btn ${!isFormFilled && "disabled"}`}>Submit</button>
    </form>
  )
}

export default RegistrationForm