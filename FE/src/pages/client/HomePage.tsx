import { Link } from "react-router-dom";
import Chart from "../../components/client/chart/Chart";
import News from "../../components/client/news/News";
import CountdownTimer from "../../components/common/CountdownTimer";

const HomePage = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);



    return (
        <div className="space-y-8">
            {/* album feature */}
            <section className="space-y-2">
                <div className="font-bold text-2xl py-1 flex justify-between items-center border-l-8 pl-2 border-[#CDC5BF]">
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

            <section>
                <div className="flex gap-x-6 items-start">
                    <div className="space-y-10">
                        {/* music for weekend */}
                        <div className="flex-1 space-y-2">
                            <div className="heading py-1 flex items-center justify-between border-l-8 pl-2 border-[#CDC5BF]">
                                <div className="flex items-center gap-x-2">
                                    <h1 className="font-semibold text-xl">Tuần này nghe gì?</h1>
                                    {/* <Newspaper size={18} /> */}
                                </div>
                                <Link to={'#'} className="underline text-sm">Hiện tất cả</Link>
                            </div>

                            <div className="content grid grid-cols-4 gap-x-6 gap-y-4">
                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content for you */}
                        <div className="flex-1 space-y-2">
                            <div className="heading py-1 flex items-center justify-between border-l-8 pl-2 border-[#CDC5BF]">
                                <div className="flex items-center gap-x-2">
                                    <h1 className="font-semibold text-xl">Đã nghe gần đây</h1>
                                    {/* <Newspaper size={18} /> */}
                                </div>
                                {/* <Link to={'#'} className="underline text-sm">Hiện tất cả</Link> */}
                            </div>

                            <div className="content grid grid-cols-4 gap-x-6 gap-y-4">
                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>

                                <div className="flex-col space-y-2">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200" className="rounded-md" />
                                    </div>

                                    <div className="info ">
                                        <h2 className="font-bold text-3xl">Übermensch</h2>
                                        <Link to={'#'} className="text-md hover:underline">G-dragon</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News */}
                    <div className="news w-[30%] space-y-6">
                        <div className="space-y-2">
                            <Chart />
                        </div>

                        <div className="space-y-2">
                            <News />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomePage