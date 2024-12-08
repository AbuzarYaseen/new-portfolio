import * as React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function ProjectCard() {
  const deadlineDays = 2; // Number of days for the deadline
  const deadlineDate = new Date();
  deadlineDate.setDate(deadlineDate.getDate() + deadlineDays);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const diff = deadlineDate - now;

    if (diff < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <h1 className="mr-2 text-pink-500 text-center text-4xl font-bold">
              My Projects are Almost Done
            </h1>

            <p className="text-xl md:text-4xl font-semibold text-center   text-amber-300">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Comming soon .",
                  1000,
                  "Comming soon ..",
                  1000,
                  "Comming soon ...",
                  1000,
                  "Comming soon ....",
                  1000,
                ]}
                speed={50}
                // style={{ fontSize: "1" }}
                repeat={Infinity}
              />
            </p>
            <p className="text-base  text-center text-orange-400">
              I'm preparing something exciting & amazing for you
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex  flex-col border-b-2 pb-2   items-center">
              <h2 className="text-2xl font-semibold"> {timeLeft.days} </h2>
              <h2>Days</h2>
            </div>
            <div className="flex  flex-col border-b-2 pb-2  items-center">
              <h2 className="text-2xl font-semibold text-cyan-400 ">
                {" "}
                {timeLeft.hours}{" "}
              </h2>
              <h2 className=" text-cyan-400">Hours</h2>
            </div>
            <div className="flex  flex-col border-b-2 pb-2  items-center">
              <h2 className="text-2xl font-semibold"> {timeLeft.minutes} </h2>
              <h2>Minutes</h2>
            </div>
            <div className="flex  flex-col border-b-2 pb-2  items-center">
              <h2 className="text-2xl font-semibold text-cyan-400">
                {" "}
                {timeLeft.seconds}{" "}
              </h2>
              <h2 className="text-cyan-400">Seconds</h2>
            </div>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
