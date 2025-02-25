import { ChartNoAxesCombined } from 'lucide-react'
import { Link } from 'react-router-dom'

const Chart = () => {
    return (
        <>
            <div className="heading py-1 flex items-center justify-between border-l-8 pl-2 border-[#CDC5BF]">
                <div className="flex items-center gap-x-2">
                    <h1 className="font-semibold text-xl">Bảng xếp hạng</h1>
                    <ChartNoAxesCombined size={18} />
                </div>
                <Link to={'#'} className="underline text-sm">Xem thêm</Link>
            </div>

            <div className="content rounded-md space-y-1">
                <div className="chart_card bg-[#CDC5BF] flex items-center gap-x-2 p-2 rounded-md">
                    <div className="index">
                        <p className='font-bold text-lg px-2'>1</p>
                    </div>

                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={50} />
                    </div>

                    <div className="info flex flex-col">
                        <Link to={'#'} className="title font-semibold hover:underline">Abc</Link>
                        <Link to={'#'} className="artists text-sm truncate w-64 hover:underline">
                            G-dragon
                        </Link>
                    </div>
                </div>

                <div className="chart_card bg-[#CDC5BF] flex items-center gap-x-2 p-2 rounded-md">
                    <div className="index">
                        <p className='font-bold text-lg px-2'>2</p>
                    </div>

                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={50} />
                    </div>

                    <div className="info flex flex-col">
                        <Link to={'#'} className="title font-semibold hover:underline">Abc</Link>
                        <Link to={'#'} className="artists text-sm truncate w-64 hover:underline">
                            G-dragon
                        </Link>
                    </div>
                </div>

                <div className="chart_card bg-[#CDC5BF] flex items-center gap-x-2 p-2 rounded-md">
                    <div className="index">
                        <p className='font-bold text-lg px-2'>3</p>
                    </div>

                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" className="rounded-md" width={50} />
                    </div>

                    <div className="info flex flex-col">
                        <Link to={'#'} className="title font-semibold hover:underline">Abc</Link>
                        <Link to={'#'} className="artists text-sm truncate w-64 hover:underline">
                            G-dragon
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart