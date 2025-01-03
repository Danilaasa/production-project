import { FC } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm"
import classNames from "classnames";



interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(className)} >
            <LoginForm />
        </Modal>
    )
}