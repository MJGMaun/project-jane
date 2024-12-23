import moment from "moment";
import AnimatedTitle from "./AnimatedTitle";
import Countdown from "./Countdown";

const TimeTogether = () => {
  return (
	<section id="time together" className="pb-36">
            <div className="w-screen text-black-50">
                <div className="flex size-full flex-col items-center py-10">
                    <p className="font-general text-sm uppercase md:text-[10px]">
                        How about a countdown and a countup?
                    </p>

                    <div className="relative size-full">
                        <AnimatedTitle
                            title="Tim<b>e</b> T<b>o</b>geth<b>e</b>r"
                            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                        />
                    </div>

					<div className="mt-11 grid w-full grid-cols-1 gap-7 md:grid-cols-1 place-items-center">
						<Countdown title="Days since we finally made it official ❤︎" timeTillDate="01 17 2023, 12:00 am" timeFormat="MM DD YYYY, h:mm a" mode="countup" />
						<Countdown title="Countdown to our 2nd anniversary 🫰" timeTillDate="01 17 2025, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
						<Countdown title="Countdown to when you're going home to me 👅" timeTillDate="12 15 2025, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
					</div>

                </div>
            </div>
        </section>
  )
}

export default TimeTogether