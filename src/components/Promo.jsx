import promo from "../assets/promo.png"
import basil from "../assets/basil.png"
import basil2 from "../assets/basil2.png"
import { Fade, Zoom } from  "react-reveal"

function Promo() {
  return (
    <div
      name="promo"
      className="grid grid-cols-6 lg:grid-cols-14 gap-[50px] relative bg-[#212122] px-8 md:px-[0.5rem] pt-[50px] 2xl:pt-[50px] pb-[20px] -mt-[1px] z-20"
    >
      <div className="col-span-full md:col-start-2 md:col-end-8 mx-auto flex">
        <div className="flex flex-col gap-[50px] justify-center text-center md:text-left">
          <div classname="flex flex-col gap-[10px]">
            <Fade left>
              <h1 className="text-[50px] md:text-[50px] font-semibold text-[#ba8107] leading-none">
                COFFEE CULTURE
              </h1>
            </Fade>
          </div>
          <Fade delay={1000}>
            <p className="text-[#bf9d53]">
              Varying the roasting time has a significant effect on the flavor, aroma, and color the brewed coffee. Althougth there are several levels of roasting. They can be grouped into three main categories: light, medium, and dark.
            </p>
          </Fade>
        </div>
      </div>
      <div className="relative col-span-full mx-auto md:col-start-9 md:col-end-15">
         <img classname="absolute -top-[30%] md:-top-[60%] -right-[35%]  md:-right-[30%] drop-shadow-2xl brightness-50 scale-[0.25] opacity-[0.8] -z-10" src={basil} />
        <Zoom delay={1000}>
            <img className="md:h-[350px] md:w-[420px] lg:h-[400px] lg:w-[470px] lg:translate-y-[100px] object-cover rotate-[70deg] drop-shadow-2xl " src={promo} />
        </Zoom>
         <img classname="absolute -top-[10%] md:-top-[40%] right-[65%]  md:right-[50%] drop-shadow-2xl brightness-50 scale-[0.25] opacity-[0.8] rotate-45 -z-10" src={basil2} />
      </div>
    </div>
  );
}
export default Promo;
