import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/pfp.png";
import pfp2 from "../assets/pfp2.png";
import pfpheader from "../assets/profile1.png";
import pfpheader2 from "../assets/profile2.png";
import pfpheader3 from "../assets/profile3.png";
import expe1 from "../assets/experience1.png";
import expe2 from "../assets/experience2.png";
import expe3 from "../assets/experience3.png";
import expe4 from "../assets/experience4.png";
import expe5 from "../assets/experience5.png";
import expe6 from "../assets/experience6.png";
import Navbar2 from "../components/Navbar2";
import projectbanner from "../assets/projectbanner.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import certificatebanner from "../assets/certificatebanner.png";
import certificatebanner2 from "../assets/certificatebanner2.png";
import { TbWorldCode } from "react-icons/tb";
import { TbWorldPause } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { PiContactlessPayment } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { TbWorldShare } from "react-icons/tb";

const Landingpage = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar2 />
      {/* Layout 1 */}
      <div className="flex flex-col w-full h-[300px] bg-gradient-to-b from-black to-[#0F3E85] items-center pt-2 lg:h-[800px]">
        {/* Layout 1 Text */}
        <div className="flex flex-col text-white font-poppins items-center pt-12 lg:pt-[50px]">
          <h1 className="text-[19px] font-semibold lg:text-[60px] lg:pt-[20px]">
            Welcome to RafaelNetwork!
          </h1>
          <p className="text-[11px] font-light lg:text-[25px]">
            Hizkia Yogi Rafael Digital & Creative Platform.
          </p>
        </div>
        {/* Layout 1 Img */}
        <div className="flex">
          <img
            src={pfpheader3}
            alt="Hizkia Yogi Rafael"
            className="flex w-[370px] lg:w-[1100px] lg:mt-[50px]"
          />
        </div>
      </div>
      {/* layout 2 */}
      <div className="flex flex-row h-[200px] bg-gradient-to-b from-[#0F3E85] to-black w-[100%] items-center lg:h-[500px]">
        {/* introduce */}
        <div className="font-poppins text-white flex flex-col w-[60%] pl-6 lg:px-[50px] lg:pl-[70px] lg:w-[70%]">
          <div className="flex flex-row gap-2 mb-1 items-center">
            <h1 className="text-[15px] gap-1 font-medium lg:text-[80px] lg:font-bold flex flex-row items-center">
              <TbWorldShare />
              Let Me Introduce..
            </h1>
          </div>
          <p className="text-[8px] lg:text-[20px]">
            Hi! I’m Informatics student at the study Program of Informatic
            Engineering, specializing in web development. With excellent
            communication, collaboration, and analytical skills, I effectively
            address feature requirements. I have a curious mindset, embrace
            feedback, and continuously learn. With confidence, trustworthiness,
            and a creative mindset, I contribute to strategic initiatives and
            deliver exceptional results.
          </p>
        </div>
        {/* pfp */}
        <div className="w-[40%] flex justify-center items-center lg:w-[30%]">
          <img
            src={pfp2}
            alt="Hizkia Yogi Rafael"
            className="w-[100px] lg:w-[350px]"
          />
        </div>
      </div>
      {/* Layout 3 */}
      <div className="flex flex-col bg-black h-[260px] items-center gap-2 lg:h-[700px]">
        <p className="text-[11px] font-light text-white font-poppins lg:text-[40px] lg:pt-[20px]">
          Some Documentation of{" "}
          <span className="font-semibold italic">Hizkia Yogi Rafael.</span>
        </p>
        <img
          src={pfpheader2}
          alt="Hizkia Yogi Rafael"
          className="w-[310px] lg:w-[800px] lg:pt-10"
        />
      </div>
      {/* Layout 4 */}
      <div className="w-full bg-[#212026] flex h-[32px] items-center justify-center lg:h-[80px]">
        <h1 className="font-medium font-poppins text-white text-[12px] lg:text-[100px]">
          Where Am i Good at?
        </h1>
      </div>
      {/* Layout 5 */}
      <div className="w-full h-[720px] bg-black flex flex-col pt-5 lg:pt-20 lg:h-[1400px]">
        {/* skillset1 */}
        <div className="w-full flex text-white font-poppins justify-center gap-2 px-4 pb-3 lg:justify-center lg:gap-2">
          <a className="flex items-center bg-white py-1 px-3 rounded-2xl  text-black font-medium lg:text-[30px] lg:px-10 lg:rounded-[30px]">
            Design
          </a>
          <a className="outline outline-white px-3 rounded-2xl lg:text-[30px] lg:px-10 lg:rounded-[30px] flex items-center">
            Web Dev
          </a>
          <a className="bg-white px-3 rounded-2xl text-black font-medium lg:text-[30px] lg:px-10 lg:rounded-[30px] flex items-center">
            Front End
          </a>
        </div>
        {/* skillset2 */}
        <div className="w-full flex text-white font-poppins justify-center px-4 mb-5 gap-2 lg:gap-2">
          <a className="outline outline-white px-2 rounded-2xl py-1 lg:text-[30px] lg:px-10 lg:rounded-[30px] flex items-center">
            User Interface
          </a>
          <a className="bg-white px-4 rounded-2xl text-black font-medium lg:text-[30px] lg:px-10 lg:rounded-[30px] flex items-center">
            Tech
          </a>
          <a className="outline outline-white px-2 rounded-2xl lg:text-[30px] lg:px-10 lg:rounded-[30px] flex items-center">
            User Experience
          </a>
        </div>
        <h1 className="text-white text-[15px] font-poppins font-medium flex justify-center mb-3 lg:pt-16 lg:text-[50px]">
          ● Recently Experience.
        </h1>
        {/* experience */}
        <div className="flex flex-col gap-3 w-full items-center">
          {/* expe 1 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 mt-2 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] lg:w-[30%] lg:items-center lg:pl-[10px]">
              <img
                src={expe1}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px]"
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                Independent Study Kampus Merdeka Mentor
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                August 23/2023 - June 30/2024
              </h1>
            </div>
          </div>
          {/* expe 2 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] lg:w-[30%] lg:items-center lg:pl-[10px]">
              <img
                src={expe2}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px]"
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                Front End Regular Course - Infinite Learning
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                August 14/2023 - June 30/2024
              </h1>
            </div>
          </div>
          {/* expe 3 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] lg:w-[30%] lg:items-center lg:pl-[10px]">
              <img
                src={expe3}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px]"
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                MAN Insan Cendekia Bootcamp Mentor – Front End
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                May 20/2024 – May 30/2024
              </h1>
            </div>
          </div>
          {/* expe 4 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] lg:w-[30%] lg:items-center lg:pl-[10px]">
              <img
                src={expe4}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px]"
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                SMK Kepri Bootcamp – Front End
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                August 24/2023 – January 17/2024
              </h1>
            </div>
          </div>
          {/* expe 5 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] items-center lg:w-[30%] lg:items-center lg:pl-[10px] lg:pt-1">
              <img
                src={expe5}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px] "
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                Developer Festival 2023 Speaker
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                May 29-31/2023 - Progressive Web Application
              </h1>
            </div>
          </div>
          {/* expe 6 */}
          <div className="flex flex-row gap-2 py-2 px-2 rounded-xl bg-gradient-to-r from-blue-950 to-[#242222] text-white font-poppins mx-4 lg:h-[150px] lg:w-[1100px] lg:rounded-[30px] lg:px-1">
            <div className="flex w-[40%] lg:w-[30%] lg:items-center lg:pl-[10px]">
              <img
                src={expe6}
                alt="Hizkia Yogi Rafael"
                className="lg:w-[300px]"
              />
            </div>
            <div className="w-[60%] lg:w-[60%]">
              <h1 className="text-[12px] font-semibold lg:text-[30px]">
                RedHat Certified System Administrator and Instructor
                Certification
              </h1>
              <h1 className="text-[10px] font-light italic lg:text-[20px]">
                June 5/2023 – july 23/2023
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Layout 6 */}
      <div className="w-full bg-[#212026] flex h-[32px] items-center justify-center lg:h-[80px] ">
        <h1 className="font-medium font-poppins text-white text-[12px] lg:text-[100px]">
          Project & Certification
        </h1>
      </div>
      {/* Layout 7 */}
      <div className="w-full bg-black flex flex-col h-[1850px] lg:px-[50px] lg:h-[1100px]">
        {/* Project */}
        <div className="w-full flex flex-col pt-5 justify-center">
          {/* project banner */}
          <div className="flex justify-center lg:pt-5 lg:justify-start">
            <img
              src={projectbanner}
              alt="Hizkia Yogi Rafael"
              className="w-[350px] lg:w-[800px] lg:hidden rounded-xl mb-2"
            />
            <h1 className="text-white font-poppins pl-[60px] text-[20px] italic hidden lg:block flex-row">
              <span>
                <TbWorldCode />
              </span>
              Projects -
            </h1>
          </div>
          {/* project list */}
          <div className="flex flex-col items-center w-full gap-2 lg:gap-7 justify-center lg:flex-row">
            {/* project 1 */}
            <div className="flex flex-col w-[350px] h-[250px] bg-gradient-to-b from-[#7144D2] to-[#242222] items-center mt-3 rounded-xl lg:h-[380px] lg:w-[400px]">
              <img
                src={project1}
                alt="Hizkia Yogi Rafael"
                className="rounded-xl w-[320px] mt-3 lg:w-[360px] lg:mt-5"
              />
              <p className="text-white font-poppins text-justify text-[9px] px-4 pt-2 lg:text-[16px]">
                <span className="font-semibold text-[#7144D2]">
                  TujuhKonser
                </span>{" "}
                - A website that reaches a wide range of users to make it easier
                to find information about the latest concerts or music festivals
                and digital ticket marketing that prioritizes user comfort and
                safety.
              </p>
            </div>
            {/* project 2 */}
            <div className="flex flex-col w-[350px] h-[250px] bg-gradient-to-b from-[#2172FF] to-[#242222] items-center mt-3 rounded-xl lg:h-[380px] lg:w-[400px]">
              <img
                src={project2}
                alt="Hizkia Yogi Rafael"
                className="rounded-xl w-[320px] mt-3 lg:w-[360px] lg:mt-5"
              />
              <p className="text-white font-poppins text-justify text-[9px] px-4 pt-2 lg:text-[16px]">
                <span className="font-semibold text-[#2172FF]">PlanAHead</span>{" "}
                - A website that reaches a wide range of users to make it easier
                to find information about the latest concerts or music festivals
                and digital ticket marketing that prioritizes user comfort and
                safety.
              </p>
            </div>
            {/* project 3 */}
            <div className="flex flex-col w-[350px] h-[250px] bg-gradient-to-b from-[#1B708D] to-[#242222] items-center mt-3 rounded-xl lg:h-[380px] lg:w-[400px]">
              <img
                src={project3}
                alt="Hizkia Yogi Rafael"
                className="rounded-xl w-[320px] mt-3 lg:w-[360px] lg:mt-5"
              />
              <p className="text-white font-poppins text-justify text-[9px] px-4 pt-2 lg:text-[16px]">
                <span className="font-semibold text-[#1B708D]">Meddy</span> - A
                website that reaches a wide range of users to make it easier to
                find information about the latest concerts or music festivals
                and digital ticket marketing that prioritizes user comfort and
                safety.
              </p>
            </div>
            {/* project 4 */}
            <div className="flex flex-col w-[350px] h-[250px] bg-gradient-to-b from-[#EA466D] to-[#242222] items-center mt-3 rounded-xl lg:h-[380px] lg:w-[400px]">
              <img
                src={project4}
                alt="Hizkia Yogi Rafael"
                className="rounded-xl w-[320px] mt-3 lg:w-[360px] lg:mt-5"
              />
              <p className="text-white font-poppins text-justify text-[9px] px-4 pt-2 lg:text-[16px]">
                <span className="font-semibold text-[#EA466D]">ILventory</span>{" "}
                - A website that reaches a wide range of users to make it easier
                to find information about the latest concerts or music festivals
                and digital ticket marketing that prioritizes user comfort and
                safety.
              </p>
            </div>
          </div>
        </div>
        {/* Certification */}
        <div className="w-full flex flex-col">
          {/* certification banner */}
          <div className="flex flex-col items-center lg:pt-5 lg:items-start mt-4">
            <img
              src={certificatebanner}
              alt="Hizkia Yogi Rafael"
              className="w-[350px] lg:w-[800px] lg:hidden rounded-xl"
            />
            <h1 className="text-white font-poppins pl-[60px] text-[20px] italic hidden lg:block flex-row">
              <span>
                <TbWorldPause />
              </span>
              Certificate -
            </h1>
          </div>
          {/* certification list */}
          <div className="text-white flex flex-col lg:flex-row lg:gap-5 lg:justify-center items-center font-poppins pt-5">
            <div className="lg:w-[26%]">
              <img
                src={certificatebanner2}
                alt="Hizkia Yogi Rafael"
                className="w-[350px] lg:w-[500px] hidden lg:block ml-[60px] lg:pt-2"
              />
            </div>
            <div className="w-full flex flex-col items-center lg:w-[74%]">
              {/* certificate 1 */}
              <a
                href="https://www.credly.com/badges/4287f27f-ee71-4886-b9f6-cd8f2e9b8544/linked_in_profile"
                className="bg-[#242222] px-4 rounded-xl py-2 w-[90%]"
              >
                <h1 className="font-medium">
                  Red Hat Certified System Administrator
                </h1>
                <p className="text-[15px] flex flex-row items-center gap-2">
                  Show Credentials
                  <RxOpenInNewWindow />
                </p>
                <p className="font-light italic text-[12px]">
                  July 2023 – july 2026
                </p>
              </a>
              {/* certificate 2 */}
              <a
                href="https://www.coursera.org/account/accomplishments/verify/QHNHE94MDKUD"
                className="bg-[#242222] px-4 rounded-xl py-2 mt-2 w-[90%]"
              >
                <h1 className="font-medium">Meta Front-End Web Development</h1>
                <p className="text-[15px] flex flex-row items-center gap-2">
                  Show Credentials
                  <RxOpenInNewWindow />
                </p>
                <p className="font-light italic text-[12px]">
                  Nov 2023 – Present
                </p>
              </a>
              {/* certificate 3 */}
              <a
                href="https://www.coursera.org/account/accomplishments/verify/XXX7R3BDUHGW"
                className="bg-[#242222] px-4 rounded-xl py-2 mt-2 w-[90%]"
              >
                <h1 className="font-medium">IBM Front-End Web Development</h1>
                <p className="text-[15px] flex flex-row items-center gap-2">
                  Show Credentials
                  <RxOpenInNewWindow />
                </p>
                <p className="font-light italic text-[12px]">
                  Nov 2023 – Present
                </p>
              </a>
              {/* certificate 4 */}
              <a
                href="https://www.coursera.org/account/accomplishments/verify/K34RNYVGBMUM"
                className="bg-[#242222] px-4 rounded-xl py-2 mt-2 w-[90%]"
              >
                <h1 className="font-medium">
                  IBM Designing User Interfaces & Experiences
                </h1>
                <p className="text-[15px] flex flex-row items-center gap-2">
                  Show Credentials
                  <RxOpenInNewWindow />
                </p>
                <p className="font-light italic text-[12px]">
                  Nov 2023 – Present
                </p>
              </a>
              {/* certificate 5 */}
              <a className="bg-[#242222] px-4 rounded-xl py-2 mt-2 w-[90%]">
                <h1 className="font-medium">
                  Certificate Of Achievement As Production Manager Completing JA
                  Company Program
                </h1>
                <p className="font-light italic text-[12px]">
                  Jan 2019 – Present
                </p>
              </a>
              {/* certificate 6 */}
              <a className="bg-[#242222] px-4 rounded-xl py-2 mt-2 w-[90%]">
                <h1 className="font-medium">
                  Batam Student Company Trade Fair 2019 Participant
                </h1>
                <p className="font-light italic text-[12px]">
                  Jan 2019 – Present
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Layout 8 */}
      {/* contact me */}
      <div className="w-full bg-black h-[180px] font-poppins text-white px-4 ">
        <h1 className="flex flex-row items-center justify-center gap-1 mb-4 lg:text-[20px]">
          <PiContactlessPayment />
          Contact Me.
        </h1>
        <div className="flex flex-col justify-center gap-2 lg:items-center">
          {/* phone */}
          <a
            href=""
            className="text-white bg-[#242222] w-auto py-1 rounded-md px-2 flex flex-row  items-center gap-1 justify-center"
          >
            <MdPhoneIphone />
            +6281959410214
          </a>
          {/* gmail */}
          <a
            href=""
            className="text-white bg-[#242222] w-auto py-1 rounded-md px-2 flex flex-row  items-center gap-1 justify-center"
          >
            <TbBrandGmail />
            rafaelyogi2093@gmail.com
          </a>
          {/* instagram */}
          <a
            href=""
            className="text-white bg-[#242222] w-auto py-1 rounded-md px-2 flex flex-row  items-center gap-1 justify-center"
          >
            <RiInstagramFill />
            yogi.rafael
          </a>
        </div>
      </div>
      {/* Layout 9 */}
      <div className="flex font-poppins text-white text-[13px] items-center justify-center h-[40px] bg-gradient-to-b from-black to-blue-700 lg:h-[80px]">
        <h1 className="lg:text-[20px]">
          One Hundred Percent Build By{" "}
          <span className="italic">RafaelNetwork.</span>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
