import { Fade, Zoom } from "react-reveal"
import rev_bg from "../assets/rev-bg.png"
import quote from "../assets/quote.png"
import pro from "../assets/serv-3.png"
import star from "../assets/star.png"

function Reviews() {
  return (
    <div
      name="reviews"
      className="relative w-full py-8 px-4 tab:px-12 md:px-8 bg-[#202020d1] "
    >
      <img
        className="absolute -top-[30%] -left-[20%] opacity-[0.5] w-screen drop-shadow-2xl"
        src={rev_bg}
      />
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px] md:gap-[30px] text-center">
            <Fade left>
                <div className="p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]">
                    <img className="h-[30px] w-[30px] absolute top-[20px] left-[20px]" src={quote}/>
                    <div className="flex items-center gap-[20px] justify-center">
                        <p className="text-4xl font-bold text-[#ba8107]">chaplin</p>
                        <img className="h-[30px] w-[30px] " src={pro} alt=""/>
                    </div>
                    <p className="text-[#bf9d53] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur ratione quos, inventore rem asperiores sunt tempore aliquam fugit itaque??</p>
                    <div className="flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]">
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                    </div>
                </div>
            </Fade>
            <Zoom>
            <div className="p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]">
                    <img className="h-[30px] w-[30px] absolute top-[20px] left-[20px]" src={quote}/>
                    <div className="flex items-center gap-[20px] justify-center">
                        <p className="text-4xl font-bold text-[#ba8107]">ganteng</p>
                        <img className="h-[30px] w-[30px] " src={pro} alt=""/>
                    </div>
                    <p className="text-[#bf9d53] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur ratione quos, inventore rem asperiores sunt tempore aliquam fugit itaque??</p>
                    <div className="flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]">
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                    </div>
                </div>
            </Zoom>
            <Fade right>
            <div className="p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]">
                    <img className="h-[30px] w-[30px] absolute top-[20px] left-[20px]" src={quote}/>
                    <div className="flex items-center gap-[20px] justify-center">
                        <p className="text-4xl font-bold text-[#ba8107]">pisan</p>
                        <img className="h-[30px] w-[30px] " src={pro} alt=""/>
                    </div>
                    <p className="text-[#bf9d53] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur ratione quos, inventore rem asperiores sunt tempore aliquam fugit itaque??</p>
                    <div className="flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]">
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                        <img className="h-[30px] w-[30px] sepia" src={star} alt="/" />
                    </div>
                </div>
            </Fade>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
