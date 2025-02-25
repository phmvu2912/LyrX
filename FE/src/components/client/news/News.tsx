import { Newspaper } from "lucide-react"
import { Link } from "react-router-dom"

const News = () => {
    return (
        <>
            <div className="heading py-1 flex items-center justify-between border-l-8 pl-2 border-[#CDC5BF]">
                <div className="flex items-center gap-x-2">
                    <h1 className="font-semibold text-xl">Tin tức</h1>
                    <Newspaper size={18} />
                </div>
                <Link to={'#'} className="underline text-sm">Xem thêm</Link>
            </div>

            <div className="content rounded-md space-y-2">
                <div className="news_card bg-[#CDC5BF] flex items-stretch gap-x-2 p-2 rounded-md">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={100} />
                    </div>

                    <div className="info">
                        <h3 className="title font-semibold">Abc</h3>
                        <p className="overview text-sm truncate w-64">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates eius adipisci aut aperiam nemo obcaecati possimus animi quo expedita, ipsam, modi, ut iure. Atque repellat saepe adipisci mollitia rerum?
                        </p>
                    </div>
                </div>

                <div className="news_card bg-[#CDC5BF] flex items-stretch gap-x-2 p-2 rounded-md">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={100} />
                    </div>

                    <div className="info">
                        <h3 className="title font-semibold">Abc</h3>
                        <p className="overview text-sm truncate w-64">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates eius adipisci aut aperiam nemo obcaecati possimus animi quo expedita, ipsam, modi, ut iure. Atque repellat saepe adipisci mollitia rerum?
                        </p>
                    </div>
                </div>

                <div className="news_card bg-[#CDC5BF] flex items-stretch gap-x-2 p-2 rounded-md">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={100} />
                    </div>

                    <div className="info">
                        <h3 className="title font-semibold">Abc</h3>
                        <p className="overview text-sm truncate w-64">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates eius adipisci aut aperiam nemo obcaecati possimus animi quo expedita, ipsam, modi, ut iure. Atque repellat saepe adipisci mollitia rerum?
                        </p>
                    </div>
                </div>

                <div className="news_card bg-[#CDC5BF] flex items-stretch gap-x-2 p-2 rounded-md">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={100} />
                    </div>

                    <div className="info">
                        <h3 className="title font-semibold">Abc</h3>
                        <p className="overview text-sm truncate w-64">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates eius adipisci aut aperiam nemo obcaecati possimus animi quo expedita, ipsam, modi, ut iure. Atque repellat saepe adipisci mollitia rerum?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News