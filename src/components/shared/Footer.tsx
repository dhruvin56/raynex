import React from "react";
import { CustomImagePreview } from "./CustomImagePreview";
import { FooterImage } from "@/utils/images/common";
import RaynexLogoWithWhiteText from "@/utils/icons/common/RaynexLogoWithWhiteText";
import MailIcon from "@/utils/icons/common/MailIcon";
import CallIcon from "@/utils/icons/common/CallIcon";
import LocationIcon from "@/utils/icons/common/LocationIcon";
import FacebookIcon from "@/utils/icons/common/FacebookIcon";
import InstagramIcon from "@/utils/icons/common/InstagramIcon";
import TwitterIcon from "@/utils/icons/common/TwitterIcon";
import LinkedinIcon from "@/utils/icons/common/LinkedinIcon";

const Footer = () => {
  return (
    <div className="flex flex-col relative h-full w-full">
      <div className="absolute w-full h-full">
        <CustomImagePreview image={FooterImage} style="object-cover" />
      </div>
      <div className="pt-[125px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  z-20 ">
        <div className=" flex flex-col md:flex-row items-center gap-20 border-b border-common-white/40 pb-10">
          <div className="flex flex-col gap-10 max-w-[500px]">
            <div className="">
              <RaynexLogoWithWhiteText />
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-xl xl:text-2xl font-semibold text-common-white">
                Raynex Power Solution Professional Service and Quality Products.
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-lightGreen">
                  <MailIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  info@raynexps.com
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-lightGreen">
                  <CallIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  +91 94089 68688
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="scale-75">
                  <LocationIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  A-123, Lorem ipsum, Lorem ipsum, Lorem ipsum.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 pt-5 ">
            <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                About Us
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold text-common-white">
                  Home
                </span>
                <span className="text-xl font-semibold text-common-white">
                  About Us
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Service
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Mission & Vision
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Contact
                </span>
              </div>
            </div>
            <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                Support
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold text-common-white">
                  FAQs
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Customers Service
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Help{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                Follow Us
              </span>
              <div className="flex flex-col gap-4 items-center">
                <span>
                  <FacebookIcon innerColor="white" outerColor="#00AD93" />
                </span>
                <span>
                  <TwitterIcon innerColor="white" outerColor="#00AD93" />
                </span>
                <span>
                  <InstagramIcon innerColor="white" outerColor="#00AD93" />
                </span>
                <span>
                  <LinkedinIcon innerColor="white" outerColor="#00AD93" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="text-base text-common-white text-center">
            Copyright © 2022 Raynex power solution Private Limited
          </div>
          <div className="flex gap-7 text-base text-common-white">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">Disclaimer</span>
            <span className="cursor-pointer hover:underline">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
