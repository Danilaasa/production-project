import * as cls from "./Sidebar.module.scss"
import { FC, useState } from "react";
import classNames from "classnames";
import { ThemeSwitcher } from "../../ThemeSwitcher/index";
import { LangSwitcher } from "../../../widgets/LangSwitcher/ui/LangSwitcher";
import { Button } from "../../../shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}


export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid="sidebar" 
            className={classNames(cls.sidebar, cls[className], {
                [cls.collapsed]: collapsed
            })} >
            <button data-testid="button" onClick={onToggle} >toggle</button>
            <div className={cls.switchers} >
                <Button >s</Button>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}