import React from "react";
import { createPortal } from "react-dom";

import { Overlay, Container, CloseModalButton } from "./styles";
import { ReactComponent as XIcon } from "../../assets/imgs/x-icon.svg";

interface IModalProps {
	children: React.ReactNode;
	handleCloseModal: () => void;
}

const Modal = ({children, handleCloseModal}: IModalProps) => {
	const modalRoot = document.getElementById("modal-root");

	return modalRoot ?
		createPortal(
			<ModalContent handleCloseModal={handleCloseModal}>
				{children}
			</ModalContent>,
			modalRoot,
		) : null;
};

export const ModalContent = ({children, handleCloseModal}: IModalProps) => {
	return (
		<Overlay>
			<Container>
				<CloseModalButton type="button" onClick={handleCloseModal}>
					<>
						<XIcon />
					</>
				</CloseModalButton>
				{children}
			</Container>
		</Overlay>
	);
};

export default Modal;
