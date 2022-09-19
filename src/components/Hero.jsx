import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-scroll";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      name="home"
      className="grid grid-cols-6 lg:grid-cols-14 relative h-screen bg-[#212122] text-[#ba8107] px-[1rem] md:px-[0.5rem]"
    >
      <div className="col-span-full md:col-start-5 md:col-end-7 lg:col-start-8 lg:col-end-15 2xl:col-start-10 2xl:col-end-15 text-center md:text-left items-center md:items-start flex flex-col gap-[100px] md:gap-[100px] lg:gap-[50px] mt-[50px] md:mt-[50px] lg:mt-[50px] z-[5]">
        <Fade right>
          <p className="text-lg lg:text-lg">NOW YOU CAN FEEL THE ENERGY</p>
        </Fade>
        <div>
          <Fade right delay={600}>
            <h1 className="text-[40px] lg:text-6xl font-bold leading-none">
              START YOUR DAY WITH A COFFEE
            </h1>
          </Fade>
        </div>
        <Zoom bottom delay={1200} duration={900}>
          <button  className="text-[30px] mt-[10px] lg:mt-[10px] lg:text-[35px] w-fit px-[25px] py-[10px] lg:px-[20px] transition-all delay-100 border-none outline-none bg-[#ba8107] text-[#212122] font-bold hover:bg-[#555b4e] hover:text-[#ba8107] hover:opacity-[0.9] rounded-[5px]">
          <Link to="menu" smooth={true} duration={500}>ENJOY NOW</Link>
          </button>
        </Zoom>
      </div>
      <div>
        <img
          className="h-screen w-full object-cover absolute top-0 left-0 z-[0]"
          src={heroImg}
          alt="/"
        ></img>
      </div>
    </div>
  );
}
export default Hero;
