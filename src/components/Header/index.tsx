import React, { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";

import { Header as SHeader, HamburguerIcon, Chevron, DropdownMenu, MenuItem, LabelItem } from "./styles";

import chevronIcon from "../../assets/imgs/chevron-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/imgs/user-icon.svg";
import { ReactComponent as ExitIcon } from "../../assets/imgs/exit-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/imgs/home-icon.svg";

const Header: React.FC = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
	const [ shouldHandleClick, setShouldHandleClick ] = useState<boolean>(true);
	const [ isMobile, setIsMobile ] = useState<boolean>(window.innerWidth <= 767);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { logout, isAdmin } = useAuth();

	function handleHeaderClick() {
		if (shouldHandleClick) {
			setIsMenuOpen((prevState) => !prevState);
		}
	}

	useEffect(() => {
		function handleResizeEvent() {
			setIsMobile(window.innerWidth <= 767);
		}

		function handleDocumentClick({target}: MouseEvent) {
			if(isMenuOpen && !dropdownRef.current?.contains(target as Node)) {
				setIsMenuOpen(false);
				setShouldHandleClick(false);
				setTimeout(() => {
					setShouldHandleClick(true);
				}, 100);
			}
		}

		window.addEventListener("resize", handleResizeEvent);
		document.addEventListener("mouseup", handleDocumentClick);

		return () => {
			window.removeEventListener("resize", handleResizeEvent);
			document.removeEventListener("mouseup", handleDocumentClick);
		};
	}, [isMenuOpen]);

	return (
		<SHeader onClick={handleHeaderClick}>
			{!isMobile && (
				<HamburguerIcon type="button" data-dropdown-open={isMenuOpen}>
					<div></div>
					<div></div>
					<div></div>
				</HamburguerIcon>
			)}
			{isMobile && (
				<>
					<span>Home</span>
					<Chevron
						src={chevronIcon}
						className={isMenuOpen ? "open" : ""}
						alt="Ícone indicativo do status do menu suspenso"
					/>
				</>
			)}
			<DropdownMenu data-is-mobile={isMobile} data-dropdown-open={isMenuOpen} ref={dropdownRef}>
				<MenuItem to="/">
					<HomeIcon />
					<LabelItem>Início</LabelItem>
				</MenuItem>
				{isAdmin() && (
					<>
						<MenuItem to="/users">
							<UserIcon />
							<LabelItem>Administrar usuários</LabelItem>
						</MenuItem>
						<MenuItem to="/regions">
							<UserIcon />
							<LabelItem>Administrar regiões</LabelItem>
						</MenuItem>
					</>
				)}
				<MenuItem to="/login" onClick={logout}>
					<ExitIcon />
					<LabelItem>Sair</LabelItem>
				</MenuItem>
			</DropdownMenu>
		</SHeader>
	);
};

export default Header;
