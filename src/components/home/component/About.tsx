import AirIcon from "@/utils/icons/common/AirIcon";
import EarthIcon from "@/utils/icons/common/EarthIcon";
import FireIcon from "@/utils/icons/common/FireIcon";
import PrithviIcon from "@/utils/icons/common/PrithviIcon";
import WaterIcon from "@/utils/icons/common/WaterIcon";
import React from "react";

const About = () => {
  return (
    <div className="py-[150px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]">
      <div className="flex flex-col  max-w-[826px]">
        <div className="text-2xl text-lightGreen font-semibold">ABOUT</div>
        <div className="flex flex-col text-[68px] leading-[80px] font-semibold mt-[30px]">
          <span className="text-primaryText">Raynex</span>
          <span className="text-lightGreen">Power Solution</span>
        </div>
        <div className="text-xl text-common-black mt-5">
          Promise of building a brighter & sustainable future is deeply
          entrenched in our very ethos. We are striving to live up to our brand
          promise in everything we do.
        </div>
        <div className="flex flex-col gap-[14px] mt-9">
          <div className="text-xl text-common-black">
            Core elements of Ayurveda:
          </div>
          <div className="flex flex-wrap gap-[45px]">
            <div className="flex gap-5 items-center">
              <span className="scale-90">
                <EarthIcon />
              </span>
              <span className="text-[21px] font-semibold text-lightGreen">
                Ether (Akash)
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="scale-90">
                <WaterIcon />
              </span>
              <span className="text-[21px] font-semibold text-lightGreen">
                Water (Jal/Apas)
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="scale-90">
                <AirIcon />
              </span>
              <span className="text-[21px] font-semibold text-lightGreen">
                Air (Vayu)
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="scale-90">
                <FireIcon />
              </span>
              <span className="text-[21px] font-semibold text-lightGreen">
                Fire (Agni)
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="scale-90">
                <PrithviIcon />
              </span>
              <span className="text-[21px] font-semibold text-lightGreen">
                Earth (Prithvi)
              </span>
            </div>
          </div>
          <div className="mt-8 text-xl text-common-black">
            Raynex Power Solution is a leading business enterprise with business
            interests closely aligned with the global energy transition journey.
            We are one of India’s largest  renewable power generators, and have
            expanded our presence in Solar PV Manufacturing, Green Hydrogen &
            its Derivatives like Green Ammonia, Green Methanol and Sustainable
            Aviation Fuel and Pumped Hydro.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
