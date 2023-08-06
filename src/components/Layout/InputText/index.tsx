import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister, Path, UseFormWatch, ValidationValue, ValidationValueMessage, ValidationRule } from "react-hook-form";

import { InputWrapper, Container, Input, Label, ErrorMessage, InputIcon } from "./styles";
import invalidIcon from "../../../assets/imgs/invalid-icon.svg";
import openedEye from "../../../assets/imgs/opened-eye-icon.svg";
import closedEye from "../../../assets/imgs/eye-slash-icon.svg";

type InputProps<T extends FieldValues> = {
    type?: "text" | "password" | "email" | "search",
    id: Path<T>,
    placeholder: string,
	required?: string | false,
	errorsFromValidations: FieldErrors<T>,
	pattern?: ValidationRule<RegExp> | undefined,
	register: UseFormRegister<T>,
	watch: UseFormWatch<T>
}

const InputText = <T extends FieldValues>({
	type = "text",
	id,
	placeholder,
	required = false,
	errorsFromValidations,
	pattern = undefined,
	register,
	watch
}: InputProps<T>) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [inputType, setInputType] = useState<string>(type);
	const value = watch(id);

	function handlePasswordTypeChange() {
		setInputType((prevState) => prevState === "text" ? "password" : "text");
		setIsPasswordVisible((prevState) => !prevState);
	}

	const treatedPattern = inputType === "email" ? {
		value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		message: "Insira um e-mail válido para prosseguir"
	} : pattern;

	return (
		<Container>
			<InputWrapper data-is-focused={isFocused} aria-invalid={errorsFromValidations[id] ? "true" : "false"}>
				<Input
					className={value ? "filled" : ""}
					type={inputType}
					id={id}
					onFocus={() => setIsFocused(true)}
					aria-invalid={errorsFromValidations[id] ? "true" : "false"}
					{...register(id, {
						required: required,
						pattern: treatedPattern
					})}
					onBlur={() => setIsFocused(false)}
				/>
				<Label htmlFor={id}>{placeholder}</Label>
				{(type === "password" && !isPasswordVisible && !errorsFromValidations[id]) && (
					<InputIcon
						src={openedEye}
						alt="Ícone de botão para visualizar a senha"
						onClick={handlePasswordTypeChange}
						draggable="false"
					/>
				)}
				{(type === "password" && isPasswordVisible && !errorsFromValidations[id]) && (
					<InputIcon
						src={closedEye}
						alt="Ícone de botão para esconder a senha"
						onClick={handlePasswordTypeChange}
						draggable="false"
					/>
				)}
				{errorsFromValidations[id] && (
					<InputIcon src={invalidIcon} alt={"Ícone de campo inválido"} draggable="false" />
				)}
			</InputWrapper>
			{errorsFromValidations[id] && (<ErrorMessage>{String(errorsFromValidations[id]?.message)}</ErrorMessage>)}
		</Container>

	);
};

export default InputText;
