import * as cls from "./Sidebar.module.scss"
import {FC, useState} from "react";
import classNames from "classnames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}


export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.sidebar, cls[className], {
            [cls.collapsed]: collapsed
        })} >
            <button onClick={onToggle} >toggle</button>
            <div className={cls.switchers} >
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}