import React, { useState } from 'react';
import Header from '../../components/header/Header';
import FormInput from '../../components/form/FormInput';
import SubmitButton from '../../components/form/SubmitButton';
import { Link } from 'react-router-dom';
import recruiterAuthService from '../../services/recruiterAuthService';
import { useAuth } from '../../contexts/AuthConetxt';
import { useNavigate } from 'react-router-dom';

const RecruiterRegistration = () => {
    const navigate = useNavigate();
    const { login, setUserData } = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const handleError=(message)=>{
        setError(message);
        setTimeout(()=>{
            setError('');
        },3000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "email": email,
            "name": name,
            "password": password,
        };

        if (password !== rePassword) {
            handleError("Passwords do not match");
            return;
        }

        try {
            const response = await recruiterAuthService.recruiterRegistration(data);
            login();
            setUserData(response);
            navigate('/');
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-pink-300">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register As Recruiter</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <FormInput id="name" label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <FormInput id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FormInput id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FormInput id="repassword" label="Confirm Password" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />

                    <span className='flex'>
                        <SubmitButton label="Register" />
                        <Link to="/login-recruiter" className='bg-black w-full text-white mx-3 px-4 py-2 rounded text-center'>Sign In</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default RecruiterRegistration;
