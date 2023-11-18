import React from "react";
import Modal from "../Modal";

import { IUsers } from "../../pages/Users/types";
import RegistrationForm from "../RegistrationForm";

interface IRegistrationModalProps {
	handleCloseModal: () => void;
	isVisible: boolean;
	userInfo?: IUsers;
	isEditing?: boolean;
}

const RegistrationModal = ({handleCloseModal, isVisible, userInfo, isEditing = false}: IRegistrationModalProps) => {
	if(!isVisible) return null;

	return (
		<Modal handleCloseModal={handleCloseModal}>
			<RegistrationForm userInfo={userInfo} isEditing={isEditing}/>
		</Modal>
	);
};

export default RegistrationModal;
