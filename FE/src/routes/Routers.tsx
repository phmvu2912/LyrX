import { Route, Routes } from "react-router-dom"
import { home } from "../constants/path"
import LayoutClient from "../layouts/LayoutClient"

const Routers = () => {
    return (
        <Routes>
            {/* Layout Client */}
            <Route path={home} element={<LayoutClient />} >
                <Route index element={<div>Homepage</div>} />
            </Route>
        </Routes>
    )
}

export default Routers