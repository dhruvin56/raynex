import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import AdminIcon from "@/utils/icons/common/AdminIcon";
import DoubleQuotes from "@/utils/icons/common/DoubleQuotes";
import StarRatting from "@/utils/icons/common/StarRatting";
import { WhatClientSayImage } from "@/utils/images/landingpage";
import React from "react";

const WhatClientSay = () => {
  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full min-h-[100dvh]">
        <CustomImagePreview image={WhatClientSayImage} style="object-cover" />
      </div>
      <div className="z-20 flex py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex-col items-center w-full gap-16">
        <div className="flex flex-col  items-center">
          <div className="text-2xl text-common-white font-semibold">
            Clients Feedback
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[68px] font-semibold text-common-white ">
              What Our Clients Say
            </span>
            <span className="text-xl items-center text-common-white max-w-[818px] mt-3">
              Our clients trust us for reliable, high-quality solar solutions
              that exceed their expectations. Hear their stories of success and
              satisfaction
            </span>
            <span className="w-[111px] border-b border-lightGreen mt-3"></span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center">
          <div className="flex flex-col px-7 bg-common-white items-center w-full max-w-[600px] relative pb-7">
            <div className="h-[100px] w-[100px] rounded-full -mt-12">
              <AdminIcon />
            </div>
            <div className="absolute bottom-0 right-0 scale-75">
              <DoubleQuotes />
            </div>
            <div className="mt-6">
              <StarRatting />
            </div>
            <div className="text-xl text-common-black/80 text-center ">
              “ Dummy Text To harness the power of the sun, innovative solar
              solutions that drive sustainable energy for all. To harness the
              power of the sun, delivering innovative solar solutions that drive
              sustainable energy for all. “
            </div>
            <div className="flex flex-col mt-4 gap-3 items-center">
              <span className="text-2xl font-bold text-common-black/80">
                NAME NAME
              </span>
              <span className="text-xl font-semibold text-lightGreen">CEO</span>
            </div>
          </div>
          <div className="flex flex-col px-7 bg-common-white items-center w-full max-w-[600px] relative pb-7">
            <div className="h-[100px] w-[100px] rounded-full -mt-12">
              <AdminIcon />
            </div>
            <div className="absolute bottom-0 right-0 scale-75">
              <DoubleQuotes />
            </div>
            <div className="mt-6">
              <StarRatting />
            </div>
            <div className="text-xl text-common-black/80 text-center ">
              “ Dummy Text To harness the power of the sun, innovative solar
              solutions that drive sustainable energy for all. To harness the
              power of the sun, delivering innovative solar solutions that drive
              sustainable energy for all. “
            </div>
            <div className="flex flex-col mt-4 gap-3 items-center">
              <span className="text-2xl font-bold text-common-black/80">
                NAME NAME
              </span>
              <span className="text-xl font-semibold text-lightGreen">CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatClientSay;
