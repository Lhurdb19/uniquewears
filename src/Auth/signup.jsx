import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Spinner from '../Spinner/Spinner';

const defaultForm = {
    fullName: '',
    email: '',
    phone: '',
    password: ''
}

export default function Signup() {
    const [form, setForm] = useState(defaultForm);
    const [isVisible, setIsVisible] = useState(false);
    const {fullName, email, phone, password} = form;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setIsLoading(true);
        try {
          const fetchApi = await fetch('https://getform.io/f/aqooqwpa', {
            method: 'POST',
            headers: {
              'content-type' : 'Application/json',
            },
            body: JSON.stringify(form)
          });
          const response = await fetchApi.json();
          if (!response.ok) {
            throw new Error(response.message);
          }
          console.log(form);
          setIsLoading(false);
          setForm(defaultForm)
          navigate('/')

        } catch (error) {
          console.log(error.message);
          window.alert(error.message)
          setIsLoading(false)
        }
    };

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setForm({...form, [name] : value})
    }

    const handleVisible = ()=> {
        setIsVisible(!isVisible)
    }


  return (
    <div className='form-container'>
      <h2>SignUp Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='fullName' placeholder='Enter Your Full Name' value={fullName} onChange={handleChange} required />
        <input type="text" name='email' placeholder='Enter Your Email Address' value={email} onChange={handleChange} required />
        <input type="tel" name='phone' placeholder='Enter Your Phone Number' value={phone} onChange={handleChange} required />
        <span>
        <input type={isVisible ? 'text' : 'password'} name='password' placeholder='Enter Your Password' value={password} onChange={handleChange} required />
        <div className="wrap" onClick={handleVisible}>
            { isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
        </span>
        <button type='submit' disabled={isLoading}>
          {isLoading ? <Spinner/> : 'SUBMIT'}
        </button>
        <p onClick={()=> navigate('/login')}>Do you have an Existing Account? Log in</p>
      </form>
    </div>
  )
}
