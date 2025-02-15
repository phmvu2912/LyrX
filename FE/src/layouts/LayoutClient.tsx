import { Outlet } from "react-router-dom"
import HeaderClient from "../components/client/header/HeaderClient"

const LayoutClient = () => {
    return (
        <>
            {/* Header */}
            <HeaderClient />
            {/* End Header */}

            {/* Main */}
            <div>
                <Outlet />
            </div>
            {/* End Main */}
        </>
    )
}

export default LayoutClient