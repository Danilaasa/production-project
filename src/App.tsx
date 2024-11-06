import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom"
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useContext} from "react";
import classNames from "classnames";
import {ThemeProvider} from "./theme/ThemeProvider";
import {ThemeContext} from "./theme/themeContext";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", theme)} >
            <button onClick={toggleTheme} >изменить тему</button>
            <Link to="/about" >
                перейти на about
            </Link>
            <Routes>
                <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}>
                    <MainPageAsync />
                </Suspense>} />
                <Route path="/about" element={<Suspense fallback={<div>подождите</div>} >
                    <AboutPageAsync />
                </Suspense>} />
            </Routes>
        </div>
    )
}