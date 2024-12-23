import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { MdOutlineDateRange, MdDateRange } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, detail }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

      { detail && (
        <div
        ref={hoverButtonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
        >
        {/* Radial gradient hover effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
          opacity: hoverOpacity,
          background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
          }}
        />
        <CiCircleInfo className="relative z-20" />
        <p className="relative z-20">{detail}</p>
        </div>
      )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          From the spark
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
		A connection grew stronger with every late-night chat/calls and thoughtful gesture, even from miles apart. Each day, we became more drawn to each other, and slowly, we realized that what we had was special. Though we're still separated by distance, that spark has turned into something beautiful, a bond that keeps us connected, no matter how far apart we are.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              The meetup
            </>
          }
          description="Coffeebay will be a special coffee shop for me. It is so special that it’s my first time going there too!"
		  detail="December 16, 2022 @ Coffeebay"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                The Day You Made Me Feel Seen
              </>
            }
            description="This day was also special for me. You made me feel loved and important, and it has been a long time since I've felt that."
			detail="December 30, 2022 @ SM Clark & CDC"
          />
        </BentoTilt>

		<BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                You Made My Heart Recognize You
              </>
            }
            description="Why isn't this our favorite place? :P Well, Tagaytay will be an important place for me. It was the place where I felt ready to say the words 'I love you'."
			detail="January 13-15, 2023 @ Tagaytay"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                The next day
              </>
            }
            description={
				<>
					It's the day we made it official! <br /> (over the call. :P)
				</>
			}
			detail="January 17, 2023 @ via Messenger"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
               When Fate Brings Us Together
              </>
            }
            description="A relationship that wasn't unexpected is somehow a great blessing, one that feels destined to happen."
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt> */}
      </div>

      <div className="flex flex-col items-center text-center">
        <Button title="Want more?" containerClass="mt-10 cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Features;