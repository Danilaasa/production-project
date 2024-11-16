import classNames from "classnames"
import * as cls from "./Loader.module.scss"

export const Loader = () => {
    return (
        <div className={classNames(cls.lds_ring)} >
            <div></div><div></div><div></div><div></div>
        </div>
    )
}