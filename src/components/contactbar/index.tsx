import CallIcon from "@/utils/icons/common/CallIcon";
import FacebookIcon from "@/utils/icons/common/FacebookIcon";
import InstagramIcon from "@/utils/icons/common/InstagramIcon";
import LinkedinIcon from "@/utils/icons/common/LinkedinIcon";
import MailIcon from "@/utils/icons/common/MailIcon";
import TwitterIcon from "@/utils/icons/common/TwitterIcon";
import React from "react";

const ContactBar = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primaryText px-[50px] lg:px-[90px] xl:px-[130px] py-3 md:justify-between gap-4 md:gap-0 items-center">
      <div className="flex ">
        <div className="flex gap-3 items-center border-r border-common-white pr-[21px]">
          <div className="text-lightGreen scale-[0.85]">
            <CallIcon />
          </div>
          <div className="text-lg font-semibold text-common-white/80 ">
            +91 94089 68688
          </div>
        </div>
        <div className="flex items-center pl-[21px] gap-3 ">
          <div className="text-lightGreen scale-90">
            <MailIcon />
          </div>
          <div className="text-lg font-semibold text-common-white/80">
            info@raynexps.com
          </div>
        </div>
      </div>
      <div className="flex gap-5 lg:gap-[43px]">
        <div className="cursor-pointer scale-90">
          <FacebookIcon innerColor="#002D38" outerColor="#ffffff80" />
        </div>
        <div className="cursor-pointer scale-90">
          <TwitterIcon innerColor="#002D38" outerColor="#ffffff80" />
        </div>
        <div className="cursor-pointer scale-90">
          <InstagramIcon innerColor="#002D38" outerColor="#ffffff80" />
        </div>
        <div className="cursor-pointer scale-90">
          <LinkedinIcon innerColor="#002D38" outerColor="#ffffff80" />
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
