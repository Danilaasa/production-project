import classNames from "classnames"
import * as cls from "./PageLoader.module.scss"
import { Loader } from "widgets/Loader/ui/Loader"

export const PageLoader = () => {
    return (
        <div className={classNames(cls.PageLoader)} >
            <Loader />
        </div> 
    )
}