import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.email){
            navigate('login');
        }
    }, [auth]);

    return <>{ children }</>;
}

export default ProtectedLayout;
