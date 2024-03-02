import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Layout from "./components/Layout";

import "./index.css";

export function App() {
    const Error = lazy(() => import('./components/Error'))

    return (
        <BrowserRouter>
            <Suspense fallback={
                <>
                    <Layout/>
                    <div className="Loading">
                        <div className="titles"><h1>Loading...</h1></div>
                    </div>
                </>
            }>                
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            {/*path for 404 page not found errors*/}
                            <Route path="*" element={<Error/>}/>
                        </Route>
                    </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
