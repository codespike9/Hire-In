import React, { useState } from 'react';
import FormInput from '../../components/form/FormInput'
import SubmitButton from '../../components/form/SubmitButton'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import recruiterAuthService from '../../services/recruiterAuthService';
import { useAuth } from '../../contexts/AuthConetxt';
import { useNavigate } from 'react-router-dom';

const RecruiterLogin = () => {

  const navigate=useNavigate();
  const {login,setUserData,location}=useAuth();
  const [identification, setIdentification] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login:', { email, password });
    const data={
      "identification":identification,
      "password":password
    }
    recruiterAuthService.recruiterLogin(data).then((data)=>{
      login();
      setUserData(data);
      if(location)
        navigate(location);
      else
        navigate("/");
    })
  };

  return(
    <div >
        <Header/>
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-pink-300">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login as Recruiter</h2>
            <FormInput id="email" label="Email" type="text" value={identification} onChange={(e) => setIdentification(e.target.value)} />
            <FormInput id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className='flex'><SubmitButton label="Login" /><Link to="/register-recruiter" className='bg-black w-full text-white mx-3 px-4 py-2 rounded text-center'>SignUp</Link></span>
        </form>
        </div>
    </div>

  )
};


export default RecruiterLogin;
