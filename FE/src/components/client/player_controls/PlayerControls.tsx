import { MicVocal, Play, Repeat2, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react"

type PlayerControlsProps = {
    display: boolean
}

const PlayerControls = ({ display }: PlayerControlsProps) => {
    return (

        display && (
            <div className="fixed bottom-0 w-full bg-[#CDC5BF] h-[100px]">

                <div className="h-full flex items-center justify-between">
                    <div className="container mx-auto">
                        <div className="h-full flex items-center justify-between">
                            <div className="flex-1 flex justify-start items-center gap-x-2">
                                <div className="thumbnail">
                                    <img src="https://picsum.photos/200" width={82} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <div className="title font-semibold">
                                        <h3>Abc</h3>
                                    </div>

                                    <div className="artists">
                                        <p>mck</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex-col space-y-2">
                                <div className="w-full">
                                    <input type="range" className="w-full"/>
                                </div>

                                <div className="flex flex-col items-center gap-y-2">
                                    <div className="flex items-center gap-x-6">
                                        <div className="">
                                            <Shuffle size={32} />
                                        </div>
                                        <div className="">
                                            <SkipBack fill="#111" size={32} />
                                        </div>
                                        <div className="">
                                            <Play fill="#111" size={32} />
                                        </div>
                                        <div className="">
                                            <SkipForward fill="#111" size={32} />
                                        </div>
                                        <div className="">
                                            <Repeat2 size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* media controls */}
                            <div className="flex-1 flex justify-end items-center gap-x-4">
                                <div className="">
                                    <MicVocal size={24} />
                                </div>
                                <div className="">
                                    <Volume2 size={24} />
                                </div>
                                <div className="p-0 m-0">
                                    <input type="range" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=""></div>

                </div>
            </div>
        )
    )
}

export default PlayerControls