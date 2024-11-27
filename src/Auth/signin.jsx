import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Spinner from '../Spinner/Spinner';

const defaultForm = {
    email: '',
    password: ''
}

export default function Signin() {
const {Login} = useContext(AuthContext);
const [formField, setFormField] = useState(defaultForm);
const {email, password} = formField;
const [isVisible, setIsVisible] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

const handleVisible = () => {
    setIsVisible(!isVisible);
}

const handleChange = (e)=> {
    const {name, value} = e.target;
    setFormField({...formField, [name] : value})
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const fetchApi = await fetch('https://getform.io/f/aqooqwpa', {
        method: 'POST',
        headers: {
          'content-type' : 'Application/json',
        },
        body: JSON.stringify(formField)
      })
      const response = await fetchApi.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      console.log(formField);
      setIsLoading(false);
      Login();
      setFormField(defaultForm);
      navigate('/')

    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
      setIsLoading(false)
    }
};


  return (
    <div className='form-container'>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder='Enter Your Email Address' value={email} onChange={handleChange} required />
        <span>
        <input type={isVisible ? 'text' : 'password'} name='password' placeholder='Enter Your Password' value={password} onChange={handleChange} required />
        <div className="wrap" onClick={handleVisible}>
            {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
        </span>
        <button disabled={isLoading}>
          {isLoading ? <Spinner/> : 'LOG IN'}
        </button>
        <p onClick={()=> navigate('/signup')}>Don't have an Account yet? Sign up</p>
      </form>
    </div>
  )
}
