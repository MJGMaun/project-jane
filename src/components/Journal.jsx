import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

export const Entry = ({
    date,
    title,
    text
}) => {
    return (
        <div className="px-5 max-w-4xl">
            <div className="inline-flex flex-col sm:flex-row">
                <p className="journal__entry-date">@ {date}</p>
                <p className="journal__entry-title"> — {title}</p>
            </div>
            <div>
                <p className="mt-3 text-md md:text-base">{text}</p>
            </div>
        </div>
    );
};


const Journal = () => {
    return (
        <section id="journal" className="pb-52">
            <div className="w-screen text-black-50">
                <div className="flex size-full flex-col items-center py-10">
                    <p className="font-general text-sm uppercase md:text-[10px]">
                        Some things on my mind
                    </p>

                    <div className="relative size-full">
                        <AnimatedTitle
                            title="J<b>o</b>urn<b>a</b>l"
                            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                        />
                    </div>

					<div className="mt-11 grid w-full grid-cols-1 gap-7 md:grid-cols-1 place-items-center">
						<Entry
							date="November 3, 2023 Friday"
							title={<>Missing each other</>}
							text={<>Today, just tired. I think always? We told each other kanina that we miss each other. I miss you. :( hope to see you soon. <br /> Also, u woke me up, ilan beses because of your call. Hindi talaga ako naiinis kapag ikaw gumigising. :) </>}
						/>

						<Entry
							date="November 4, 2023 Saturday"
							title={<>Thank you, always</>}
							text={<>We didn't talk too much today. But before I went to SM Clark, nagchat muna us. Went to SM coz I bought jacket for baguio. I miss you. I wish you were with me. :( Then kauwi, before you go to work, nag commute ka then we talked over call. Thank you baby. Kasi kahit na pa byahe ka, binibigyan mo parin ako time para maka usap ka. </>}
						/>

						<Entry
							date="November 5, 2023 Sunday"
							title={<>Past your bedtime :P</>}
							text={<>Baby, today di nag call since nag hotel kayo with ur fam. It's fine baby. Kauwi mo nagchat naman tayo. hehe. then was also busy kasi nagpa carwash ako. thank you! Kasi kahit na 12am na yun for u, you still gave me ur time before sleeping. I love you! </>}
						/>
					</div>

					<div className="flex flex-col items-center text-center">
						<Button title="Want more? soon." containerClass="mt-10 cursor-pointer" />
					</div>

                </div>
            </div>
        </section>
    );
};

export default Journal;
