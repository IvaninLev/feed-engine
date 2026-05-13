import { Input } from '@headlessui/react';

 interface InputProps {

    name:string,
    type:string,
    value:string,
     placeholder?:string,
     errors?:string,
    onChange:(value:string) => void,
}

export default function CustomInput(
    {   name,
        type,
        value,
        onChange,
        placeholder,
        errors,
        }:
    InputProps ){

return(
    <div>
    <Input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name={name}
        placeholder={placeholder}
        className="w-80 border-b-2 border-b-[#3F3F3F] bg-transparent p-1 outline-0"
        type={type}
    />

    {errors && (
        <span className="text-red-700">{errors}</span>
    )}
    </div>

);
    }
