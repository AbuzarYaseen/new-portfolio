// import * as React from "react";
// import { useState, useEffect } from "react";
// import { TypeAnimation } from "react-type-animation";

// function ProjectCard() {
//   const deadlineDays = 2; // Number of days for the deadline
//   const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
//   function calculateTimeLeft() {
//     const deadlineDate = new Date();
//     deadlineDate.setDate(deadlineDate.getDate() + deadlineDays);
//     const now = new Date().getTime();
//     const diff = deadlineDate - now;

//     if (diff < 0) {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [deadlineDays]);
//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <h1 className="mr-2 text-pink-500 text-center text-4xl font-bold">
//               My Projects are Almost Done
//             </h1>

//             <p className="text-xl md:text-4xl font-semibold text-center   text-amber-300">
//               <TypeAnimation
//                 sequence={[
//                   // Same substring at the start will only be typed once, initially
//                   "Comming soon .",
//                   1000,
//                   "Comming soon ..",
//                   1000,
//                   "Comming soon ...",
//                   1000,
//                   "Comming soon ....",
//                   1000,
//                 ]}
//                 speed={50}
//                 // style={{ fontSize: "1" }}
//                 repeat={Infinity}
//               />
//             </p>
//             <p className="text-base  text-center text-orange-400">
//               I'm preparing something exciting & amazing for you
//             </p>
//           </div>
//           <div className="flex flex-row gap-4 justify-center">
//             <div className="flex  flex-col border-b-2 pb-2   items-center">
//               <h2 className="text-2xl font-semibold"> {timeLeft.days} </h2>
//               <h2>Days</h2>
//             </div>
//             <div className="flex  flex-col border-b-2 pb-2  items-center">
//               <h2 className="text-2xl font-semibold text-cyan-400 ">
//                 {" "}
//                 {timeLeft.hours}{" "}
//               </h2>
//               <h2 className=" text-cyan-400">Hours</h2>
//             </div>
//             <div className="flex  flex-col border-b-2 pb-2  items-center">
//               <h2 className="text-2xl font-semibold"> {timeLeft.minutes} </h2>
//               <h2>Minutes</h2>
//             </div>
//             <div className="flex  flex-col border-b-2 pb-2  items-center">
//               <h2 className="text-2xl font-semibold text-cyan-400">
//                 {" "}
//                 {timeLeft.seconds}{" "}
//               </h2>
//               <h2 className="text-cyan-400">Seconds</h2>
//             </div>
//           </div>
//         </code>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">liveUrl:</span>
            <span className="text-gray-400">{`'`}</span>
            <a
              href={project.liveUrl}
              className="text-amber-300 hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              Open in Browser
            </a>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">stack:</span>
            <span className="text-orange-400">[{project.stack}]</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white mr-2">Description:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-cyan-400">{project.description}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
