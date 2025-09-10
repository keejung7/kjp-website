import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none 2xl:hidden">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 place-content-center">
          <p className="mb-10 max-w-2xl font-ovo">
            I am a programmer with over 2 years experience developing web
            applications and performing QA on web applications, APIs, and mobile
            applications at companies like Tegus and Dayforce.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl cursor-pointer">
            {infoList.map(({ icon, icon_dark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={icon} alt={title} className="h-10 w-auto mt-2" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <div className="space-y-1">
                  {description.map((line, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
