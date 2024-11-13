import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouteConfig/RouteConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => {
                return (
                    <Route key={path} path={path} element={ <Suspense fallback={<div>loading...</div>} >
                        <div className="page-wrapper" >
                            {element}
                        </div>
                    </Suspense>} />
                )
            })}
        </Routes>
    );
};
