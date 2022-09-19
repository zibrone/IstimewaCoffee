import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaWhatsapp} from "react-icons/fa"
import { Link } from "react-scroll"

function Footer() {
    return (
        <div name="footer" className="w-full">
            <div className="flex flex-col gap-[20px] w-full py-4 justify-between text-center bg-[#212122] px-[50px] -mt-[1px]">
                <h1 className="text-gray-300 text-[30px]">ISTIMEWA COFFE</h1>
                <p className="text-gray-500 max-w--[700px] mx-auto my-[10px]">Badan UMKM yang bergerak di bidang kuliner. Kami menyediakan produk olahan kopi siap saji dengan bahan baku biji kopi lokal bermutu demi meningkatkan pergerakan ekonomi domestik. </p>
                <h2 className="text-gray-300 text-[30px]"> Find us on:</h2>
                <div className="flex justify-between m-auto w-full sm:w-[300px] pt-4 text-2xl text-gray-300 pb-[50px]">
                    <button>
                        <a href="https://www.facebook.com">
                            <FaFacebook/>
                        </a>
                    </button>
                    <button>
                        <a href="https://www.instagram.com">
                            <FaInstagram/>
                        </a>
                    </button>
                    <button>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </button>
                    <button>
                        <a href="https://wa.me/6283839112018">
                            <FaWhatsapp/>
                        </a>
                    </button>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 text-gray-300 bg-[#353630] px-[50px]">
                <div>
                    <h6 className="font-bold uppercase pt-2"> Solution</h6>
                    <ul className="text-gray-500">
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Comemerce</li>
                        <li className="py-1">Data</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2"> Support</h6>
                    <ul className="text-gray-500">
                        <li className="py-1">Pricing</li>
                        <li className="py-1">Documentation</li>
                        <li className="py-1">Guides</li>
                        <li className="py-1">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2"> Company</h6>
                    <ul className="text-gray-500">
                        <li className="py-1">About</li>
                        <li className="py-1">Blog</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2"> Legal</h6>
                    <ul className="text-gray-500">
                        <li className="py-1">Claims</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Terms</li>
                        <li className="py-1">Policies</li>
                        <li className="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Lorem ipsum dolor sit.</p>
                    <p className="py-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia tempora perspiciatis eum nesciunt ex consequuntur vel eveniet cupiditate quasi deleniti, qui blanditiis ipsum. Sunt autem officia cupiditate sapiente. Sapiente.</p>
                
                </div>
            </div>
        </div>
    )
}
export default Footer