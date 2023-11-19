import React, { Ref } from "react";
import Select, { StylesConfig } from "react-select";

import theme from "../../../assets/styles/themes/default";

import { Container, Label } from "./styles";

interface IOptionsSelect {
	value: string,
	label: string
}

interface ICustomSelectProps {
	label: string,
	options: IOptionsSelect[],
	customDefaultValue?: IOptionsSelect | undefined,
	inputRef: Ref<Select>,
	onChange: (option: IOptionsSelect) => void
}

const CustomSelect = ({label, options, customDefaultValue, onChange}: ICustomSelectProps) => {
	const colorStyles: StylesConfig<unknown> = {
		control: ((styles, props) => ({
			...styles,
			backgroundColor: theme.colors.primary.lighter,
			height: "64px",
			borderWidth: "2px",
			borderColor: props.isFocused ? theme.colors.primary.medium : theme.colors.primary.main,
			outlineWidth: "0px",
			":hover": {
				borderColor: props.isFocused ? theme.colors.primary.medium : theme.colors.primary.main
			}
		})),
		option: ((styles, props) => ({
			...styles,
			backgroundColor: props.isFocused ? theme.colors.primary.light : theme.colors.primary.lighter,
			color: theme.colors.dark.black,
			":active": {
				color: theme.colors.primary.dark
			}
		}))
	};

	return (
		<Container>
			<Label>{label}</Label>
			<Select
				options={options}
				styles={colorStyles}
				placeholder="Selecione"
				defaultValue={customDefaultValue}
				noOptionsMessage={() => "Sem correspondências"}
				onChange={(selectedOption) => {
					onChange(selectedOption as IOptionsSelect);
				}}
			/>
		</Container>
	);
};

export default CustomSelect;
