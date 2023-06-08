import React from 'react';

import { Input } from './styles';

type InputProps = {
    type?: "text" | "password" | "email" | "search",
    id: string,
    name?: string,
    placeholder: string,
    value: string | number,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const InputText = ({type = "text", id, name, placeholder, onChange}: InputProps) => {
  return <Input type={type} id={id} name={name} placeholder={placeholder} onChange={onChange}/>;
}

export default InputText;
