import React from "react";

import { Footer as SFooter, Container, Text, ContactsContainer, Contacts } from "./styles";
import { Wrapper } from "../Layout/styles";

import { ReactComponent as LogoSmallWhite } from "../../assets/imgs/logo-small-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/imgs/email-icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/imgs/phone-icon.svg";


const Footer: React.FC = () => {
	return (
		<SFooter>
			<Wrapper>
				<Container>
					<LogoSmallWhite aria-description="Korv Logo" />
					<Text>© Todos os direitos reservados, 2023</Text>
					<ContactsContainer>
						<Text>Em caso de problemas, entre em contato com a CTI:</Text>
						<Contacts>
							<div>
								<EmailIcon aria-description="Email Illustration" />
								<Text>cti.ptb@ifsp.edu.br</Text>
							</div>
							<div>
								<PhoneIcon aria-describedby="Phone illustration" />
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
