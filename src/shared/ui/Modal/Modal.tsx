import * as cls from "./Modal.module.scss"
import classNames from "classnames";
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";


interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

const onContentClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
}


export const Modal:FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    const onCloseHandler = useCallback(() => {
        setIsClosing(true)
        timeRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, 300)

    }, [onClose])

    const onKeyDown =  useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onCloseHandler()
        }
    }, [onCloseHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal element={document.getElementById("modal")}>
            <div className={classNames(cls.Modal, className, {
                [cls.opened]: isOpen,
                [cls.isClosing]: isClosing
            })}>
                <div onClick={onCloseHandler} className={classNames(cls.overlay)}>
                    <div className={classNames(cls.content, {
                        [cls.light]: theme === "light",
                        [cls.dark]: theme === "dark"
                    })} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}