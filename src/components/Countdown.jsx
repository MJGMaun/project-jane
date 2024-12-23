import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Countdown = ({ title, timeTillDate, timeFormat, mode = "countdown" }) => {
    const [timeLeft, setTimeLeft] = useState({
        years: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Parse the target time using the user's timezone
            const targetTime = moment.tz(
                timeTillDate,
                timeFormat,
                moment.tz.guess()
            );
            const now = moment.tz(moment(), moment.tz.guess()); // Current time in user's local timezone

            // Calculate duration based on mode (countdown or countup)
            const duration = moment.duration(
                mode === "countup" ? now.diff(targetTime) : targetTime.diff(now)
            );

            const years = Math.floor(duration.asYears());
            const days = Math.floor(duration.asDays() % 365); // Remaining days within the current year
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            setTimeLeft({ years, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [timeTillDate, timeFormat, mode]);

    const { years, days, hours, minutes, seconds } = timeLeft;

    const mapNumber = (number, in_min, in_max, out_min, out_max) => {
        return (
            ((number - in_min) * (out_max - out_min)) / (in_max - in_min) +
            out_min
        );
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
            return {
                x: centerX + radius * Math.cos(angleInRadians),
                y: centerY + radius * Math.sin(angleInRadians),
            };
        };

        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);

        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M",
            start.x,
            start.y,
            "A",
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y,
        ].join(" ");
    };

    const SVGCircle = ({ radius }) => (
        <svg className="countdown-svg" width="100" height="100">
            <path
                fill="none"
                stroke="#333"
                strokeWidth="4"
                d={describeArc(50, 50, 48, 0, radius)}
            />
        </svg>
    );

    if (
        years === undefined ||
        days === undefined ||
        hours === undefined ||
        minutes === undefined ||
        seconds === undefined
    ) {
        return null;
    }

    return (
        <div className="mt-5">
            <div className="px-5 max-w-4xl">
                <div className="flex-center">
                    <p className="countdown-title">{title}</p>
                </div>
            </div>
            <div className="countdown-wrapper mt-5">
                {years !== undefined && years > 0 && (
                    <div className="countdown-item">
                        <SVGCircle radius={mapNumber(years, 10, 0, 0, 360)} />
                        {years} <span>years</span>
                    </div>
                )}
                {days !== undefined && (
                    <div className="countdown-item">
                        <SVGCircle radius={mapNumber(days, 365, 0, 0, 360)} />
                        {days} <span>days</span>
                    </div>
                )}
                {hours !== undefined && (
                    <div className="countdown-item">
                        <SVGCircle radius={mapNumber(hours, 24, 0, 0, 360)} />
                        {hours} <span>hours</span>
                    </div>
                )}
                {minutes !== undefined && (
                    <div className="countdown-item">
                        <SVGCircle radius={mapNumber(minutes, 60, 0, 0, 360)} />
                        {minutes} <span>minutes</span>
                    </div>
                )}
                {seconds !== undefined && (
                    <div className="countdown-item">
                        <SVGCircle radius={mapNumber(seconds, 60, 0, 0, 360)} />
                        {seconds} <span>seconds</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Countdown;
