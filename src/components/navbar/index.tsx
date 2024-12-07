import RaynexLogoWithText from "@/utils/icons/common/RaynexLogoWithText";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from "@/utils/icons/common/CloseIcon";
import DrawerIcon from "@/utils/icons/common/DrawerIcon";

type Props = {
  isNavbarExtended: boolean;
  setIsNavbarExtended: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
};

const Navbar = ({
  isNavbarExtended,
  setIsNavbarExtended,
  isScrolled,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`flex w-full absolute z-40  px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] items-center ${
        isScrolled ? "bg-common-white py-3" : "py-6"
      }`}
    >
      {/* Navbar Header */}
      <div className="flex justify-between w-full items-center">
        <div className="scale-90">
          <RaynexLogoWithText />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
          {[
            "Home",
            "Services",
            "Blog",
            "Projects",
            "About Us",
            "Contact Us",
          ].map((item) => (
            <span
              key={item}
              className="text-lg font-bold text-primaryText hover:underline hover:text-lightGreen cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <button className="py-2 px-3 bg-lightGreen text-common-white text-lg font-semibold">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="flex lg:hidden cursor-pointer items-center z-[400]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <DrawerIcon />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-common-black bg-opacity-75 z-50 flex flex-col items-center p-6 pt-16">
          {[
            "Home",
            "Services",
            "Blog",
            "Projects",
            "About Us",
            "Contact Us",
          ].map((item) => (
            <div
              key={item}
              className="w-full border-b border-black-600 py-4 text-center text-lg font-bold text-common-white hover:text-lightGreen cursor-pointer"
            >
              {item}
            </div>
          ))}
          <button className="w-fit mt-6 py-2 px-3 bg-lightGreen text-common-white text-lg font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
