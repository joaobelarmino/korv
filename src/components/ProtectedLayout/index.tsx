import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedLayout = ({children, adminOnly = false}: {children: React.ReactNode, adminOnly?: boolean}) => {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if(!auth.email){
			navigate("/login");
		}

		if(adminOnly && !auth.isAdmin) {
			navigate("/not-found");
		}
	}, [auth]);

	return <>{ children }</>;
};

export default ProtectedLayout;
