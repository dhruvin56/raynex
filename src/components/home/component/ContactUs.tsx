import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import InputTextField from "@/components/shared/InputTextField";
import CallIcon from "@/utils/icons/common/CallIcon";
import FacebookIcon from "@/utils/icons/common/FacebookIcon";
import InstagramIcon from "@/utils/icons/common/InstagramIcon";
import LinkedinIcon from "@/utils/icons/common/LinkedinIcon";
import LocationIcon from "@/utils/icons/common/LocationIcon";
import MailIcon from "@/utils/icons/common/MailIcon";
import TwitterIcon from "@/utils/icons/common/TwitterIcon";
import { ContactUsImage } from "@/utils/images/landingpage";
import React, { useState } from "react";

const ContactUs = () => {
  const [massage, setMassage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  return (
    <div className="py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex flex-col gap-24">
      <div className="flex flex-col lg:flex-row gap-14 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col p-[30px] bg-common-black/5 gap-5 max-w-[400px]">
            <div className="flex gap-5 items-center">
              <div className="bg-common-white rounded-[10px] h-[58px] w-[58px] shadow-lg flex justify-center items-center text-lightGreen">
                <MailIcon />
              </div>
              <div className="text-xl font-semibold text-primaryText">
                info@raynexps.com
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-common-white rounded-[10px] h-[58px] w-[58px] shadow-lg flex justify-center items-center text-lightGreen">
                <CallIcon />
              </div>
              <div className="text-lg font-semibold text-primaryText">
                +91 94089 68688
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-common-white rounded-[10px] h-[58px] w-[58px] shadow-lg flex justify-center items-center text-lightGreen">
                <LocationIcon />
              </div>
              <div className="text-lg font-semibold text-primaryText">
                A-123, Lorem ipsum, Lorem ipsum, Lorem ipsum.
              </div>
            </div>
          </div>
          <div className="flex  gap-6 ">
            <div className="text-lg font-semibold text-primaryText">
              Follow Us:
            </div>
            <div className="flex gap-8">
              <div className="cursor-pointer">
                <FacebookIcon outerColor="#002D38" innerColor="#ffffff" />
              </div>
              <div className="cursor-pointer">
                <TwitterIcon outerColor="#002D38" innerColor="#ffffff" />
              </div>
              <div className="cursor-pointer">
                <InstagramIcon outerColor="#002D38" innerColor="#ffffff" />
              </div>
              <div className="cursor-pointer">
                <LinkedinIcon outerColor="#002D38" innerColor="#ffffff" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-8 px-10 gap-5 shadow-lg flex-grow">
          <div className="text-xl font-bold text-lightGreen uppercase">
            Leave us a massage
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <InputTextField
                value={firstName}
                placeholder="Your First Name"
                className="bg-primaryText/5 py-3 px-4 text-sm text-primaryText border-none"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputTextField
                value={lastName}
                placeholder="Your Last Name"
                className="bg-primaryText/5 py-3 px-4 text-sm text-primaryText border-none"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex gap-5">
              <InputTextField
                value={emailId}
                placeholder="Enter Your Email"
                className="bg-primaryText/5 py-3 px-4 text-sm text-primaryText border-none"
                onChange={(e) => setEmailId(e.target.value)}
              />
              <InputTextField
                value={mobileNo}
                placeholder="Enter Your Mobile no."
                className="bg-primaryText/5 py-3 px-4 text-sm text-primaryText border-none"
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <div>
              <InputTextField
                value={massage}
                onChange={(e) => setMassage(e.target.value)}
                placeholder="Your Massage...."
                className="bg-primaryText/5 py-3 px-4 text-sm text-primaryText border-none h-full placeholder:text-primaryText"
                rows={5}
                multiline={true}
              />
            </div>
            <div className="flex w-full justify-end">
              <button className="text-base font-medium text-common-white px-3 py-2 bg-lightGreen">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-[290px]">
        <div className="absolute w-full h-[290px]">
          <CustomImagePreview image={ContactUsImage} />
        </div>
        <div className="z-20  flex flex-col">
          <div className="flex flex-col gap-6 items-center">
            <span className="text-2xl md:text-4xl text-common-white font-bold">
              Be a part of Sustainable Future
            </span>
            <button className="py-2 px-3 text-common-white text-xl bg-lightGreen w-fit">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
