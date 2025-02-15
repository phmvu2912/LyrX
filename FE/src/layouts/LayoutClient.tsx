import { Outlet } from "react-router-dom"
import HeaderClient from "../components/client/header/HeaderClient"

const LayoutClient = () => {
    return (
        <>
            {/* Header */}
            <HeaderClient />
            {/* End Header */}

            {/* Main */}
            <div className="container mx-auto py-6">
                <Outlet />
            </div>
            {/* End Main */}

            {/* Footer */}

            {/* End Footer */}
        </>
    )
}

export default LayoutClient