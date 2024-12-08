import React from "react";
import { experiences } from "../dataStore.js";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./helper/animation-lottie";
import GlowCard from "./helper/glow-card";
import experience from "./lottie/code.json";
import sectionSvg from "../assets/section.svg";
import blurSvg from "../assets/blur-23.svg";

function Experience() {
  return (
    <div
      id="experience"
      className="relative border-t my-12 lg:my-24 border-[#25213b]"
    >
      <img
        src={sectionSvg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div
          className="flex items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div
              className="w-full h-full"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
            >
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div
              className="flex flex-col gap-6 overflow-hidden"
              data-aos="fade-up-left"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
            >
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <img
                      src={blurSvg}
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-4">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
