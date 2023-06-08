import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.email){
            navigate('login');
        }
    }, [auth]);

    return <>{ children }</>;
}

export default ProtectedLayout;
