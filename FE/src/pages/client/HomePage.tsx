import { Link } from "react-router-dom"
import CountdownTimer from "../../components/common/CountdownTimer"

const HomePage = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);

    return (
        <>
            {/* New album countdown */}
            <section className="">
                <div className="font-bold text-2xl pb-2 flex justify-between items-center">
                    <h1>Album nổi bật sắp phát hành</h1>

                    <Link to={'#'} className="underline text-sm">Xem tất cả</Link>
                </div>

                <div className="border-2 rounded-md p-4 px-6 gap-x-4 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <div className="thumbnai">
                            <img src="https://picsum.photos/200" className="" />
                        </div>

                        <div className="space-y-3">
                            {/* album */}
                            <p className="font-semibold">Album</p>

                            {/* title */}
                            <h2 className="font-bold text-6xl">Übermensch</h2>

                            {/* artist */}
                            <p className="underline text-xl">
                                <Link to={'/gd'}>G-dragon</Link>
                            </p>

                            {/* genre */}
                            <div className="flex gap-x-3">
                                <span className="font-semibold">Thể loại: </span>
                                <ul className="flex gap-x-2">
                                    <li className="underline hover:text-[#CDC5BF]"><Link to={'#'}>K-Pop</Link></li>
                                    <li className="underline hover:text-[#CDC5BF]"><Link to={'#'}>Hiphop</Link></li>
                                </ul>
                            </div>

                            {/* list tracks */}
                            <div className="underline text-sm cursor-pointer">Xem danh sách bài hát</div>
                        </div>
                    </div>

                    {/* Countdown */}
                    <div className="w-[50%]">
                        <CountdownTimer expiryTimestamp={time} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage