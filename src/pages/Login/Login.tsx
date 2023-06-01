import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //eve.holt@reqres.in
        //cityslicka
        await auth.authenticate(email, password);
    }

    useEffect(() => {
        if(auth.email) {
            navigate('/');
        }
    }, [auth])

    return (
        <form onSubmit={onSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" />
        </form>
    );
}

export default Login;
