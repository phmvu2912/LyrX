import { Route, Routes } from "react-router-dom"
import { home } from "../constants/path"
import LayoutClient from "../layouts/LayoutClient"
import HomePage from "../pages/client/HomePage"

const Routers = () => {
    return (
        <Routes>
            {/* Layout Client */}
            <Route path={home} element={<LayoutClient />} >
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default Routers