import React from "react";

import { Footer as SFooter, Container, Text, ContactsContainer, Contacts } from "./styles";
import { Wrapper } from "../Layout/styles";

import logoSmallWhite from "../../assets/imgs/logo-small-icon.svg";
import emailIcon from "../../assets/imgs/email-icon.svg";
import phoneIcon from "../../assets/imgs/phone-icon.svg";


const Footer: React.FC = () => {
	return (
		<SFooter>
			<Wrapper>
				<Container>
					<img src={logoSmallWhite} alt="Korv Logo" />
					<Text>© Todos os direitos reservados, 2023</Text>
					<ContactsContainer>
						<Text>Em caso de problemas, entre em contato com a CTI:</Text>
						<Contacts>
							<div>
								<img src={emailIcon} alt="email illustration" />
								<Text>cti.ptb@ifsp.edu.br</Text>
							</div>
							<div>
								<img src={phoneIcon} alt="phone illustration" />
								<Text>(11) 2541-0120</Text>
							</div>
						</Contacts>
					</ContactsContainer>
				</Container>
			</Wrapper>
		</SFooter>
	);
};

export default Footer;
