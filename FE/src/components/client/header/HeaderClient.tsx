import { Bell, Settings, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import { home } from "../../../constants/path"

const HeaderClient = () => {
    return (
        <header className="header bg-[#CDC5BF]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4">
                    <div className="font-bold text-4xl cursor-pointer">
                        <Link to={home}>LyrX</Link>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="">
                            <form action="/search">
                                <input
                                    type="search"
                                    placeholder="Nhập tên bài hát, nghệ sĩ,..."
                                    name="kq"
                                    className="rounded-md p-1 outline-none px-2 text-sm bg-[#F5F5F5]"
                                />
                            </form>
                        </div>

                        <div className="cursor-pointer">
                            <Bell />
                        </div>
                        <div className="cursor-pointer">
                            <UserRound />
                        </div>
                        <div className="cursor-pointer">
                            <Settings />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderClient