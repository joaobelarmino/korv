import React from "react";

import { CheckboxContainer, Checkbox as SCheckbox, CheckboxLabel } from "./styles";

interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement>{
	id: string,
	label: string,
	defaultChecked: boolean,
	onChange: () => void
}

const Checkbox = (props: ICheckboxProps) => {
	return (
		<CheckboxContainer>
			<SCheckbox type="checkbox" {...props}/>
			<CheckboxLabel htmlFor={`${props.id}`}>{props.label}</CheckboxLabel>
		</CheckboxContainer>
	);
};

export default Checkbox;
