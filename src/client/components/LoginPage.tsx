import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../api/api-service';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Updated to useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await apiService('/auth/login', 'POST', { email, password });
            localStorage.setItem('token', token);
            navigate('/main'); // Updated to use navigate
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;