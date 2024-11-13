import "./styles/index.scss"
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";



export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page" >
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}