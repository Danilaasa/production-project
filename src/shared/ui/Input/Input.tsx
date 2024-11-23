import classNames from "classnames"
import * as cls from "./Input.module.scss"
import { ChangeEvent, FC, InputHTMLAttributes } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string 
}



export const Input: FC<InputProps> = ({ className, value, onChange, type = "text" }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input onChange={onChangeHandler} className={classNames(cls.input, className)} type={type} />
    )
}