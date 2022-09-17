import { Fade, Zoom} from "react-reveal"
import menu1 from "../assets/menu1.jpg"
import menu2 from "../assets/menu2.jpg"
import menu3 from "../assets/menu3.jpg"

function Menu() {
    return (
        <div name="menu" className="w-full pt-24 bg-[#212122] pb-[100px] px-8 md:px-16">
            <div className="max-w-[1240px] mx-auto relative">
                <div className="px-4 py-6">
                    <h3 className="text-7xl  font-semibold text-center text-[#ba8107]">our new menu</h3>
                </div>
                <div className="grid grid-cols-1 tab:grid-cols-3 relative gap-x-12 tab:gab-x-4 lg:gap-x-12 gap-y-16 px-4 md:px-1 lg:px-4 pt-12 sm:pt-20">
                    <Fade left>
                        <div className="bg-[#353630] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu1}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]"> arabica robusta</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Espresso coffee beans dengan komposisi 30% robusta dan 70% arabica. </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Zoom>
                    <div className="bg-[#353630] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu2}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]">Honey single origin</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nobis iure qui dolor saepe.</p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Fade right>
                    <div className="bg-[#363430] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu3}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]">natural extended anaerob</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nobis iure qui dolor saepe.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="bg-[#353630] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu1}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]">Natural single origin</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nobis iure qui dolor saepe.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Zoom>
                    <div className="bg-[#353630] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu2}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]">Red honey single origin</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nobis iure qui dolor saepe.</p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Fade right>
                    <div className="bg-[#363430] shadow-2xl rounded-[10px]">
                            <div className="flex flex-col h-full">
                                <div className="relative h-[60%]">
                                    <img className="w-full h-full rounded-t-[10px] object-cover brightness-75" src={menu3}/>
                                </div>
                                <div className="p-4 md:p-8">
                                    <h3 className="font-bold text-center text-2xl mb-6 text-[#ba8107]">Robusta Temanggung</h3>
                                    <p className="text-[#bf9d53] lg:text-l w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nobis iure qui dolor saepe.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
export default Menu