import { Outlet } from "react-router-dom"
import HeaderClient from "../components/client/header/HeaderClient"
import PlayerControls from "../components/client/player_controls/PlayerControls"
import FooterClient from "../components/client/footer/FooterClient";

const LayoutClient = () => {

    //* Test player controls
    const displayStt = false;

    return (
        <>
            {/* Header */}
            <HeaderClient />
            {/* End Header */}

            {/* Main */}
            <div className="">
                <div className=" container mx-auto py-6 overflow-y-auto">
                    <Outlet />
                </div>

                <PlayerControls display={displayStt} />

            </div>
            {/* End Main */}

            {/* Footer */}
            <FooterClient />
            {/* End Footer */}
        </>
    )
}

export default LayoutClient