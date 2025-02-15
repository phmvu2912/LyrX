import { useTimer } from "react-timer-hook"

const CountdownTimer = ({ expiryTimestamp }: any) => {

    const {
        // totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        // start,
        // pause,
        // resume,
        // restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="flex justify-center">

            {
                isRunning ? (
                    <div className="space-y-4" >
                        <p className="font-semibold text-lg">Đếm ngược thời gian phát hành</p>
                        <div className="flex gap-x-4 font-semibold">
                            <div className="text-center">
                                <p className="rounded-lg bg-black text-center py-6 text-xl text-white min-w-[60px]">{days}</p> <span>ngày</span>
                            </div>

                            <div className="text-center">
                                <p className="rounded-lg bg-black text-center py-6 text-xl text-white min-w-[60px]">{hours}</p> <span>giờ</span>
                            </div>

                            <div className="text-center">
                                <p className="rounded-lg bg-black text-center py-6 text-xl text-white min-w-[60px]">{minutes}</p> <span>phút</span>
                            </div>

                            <div className="text-center">
                                <p className="rounded-lg bg-black text-center py-6 text-xl text-white min-w-[60px]">{seconds}</p> <span>giây</span>
                            </div>
                        </div>
                    </div >
                ) : (
                    <div className="text-xl font-semibold"> Sản phẩm đã ra mắt!</div>
                )
            }
        </div>
    )
}

export default CountdownTimer