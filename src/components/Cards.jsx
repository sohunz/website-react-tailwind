import single from "./assets/single.png";
import double from "./assets/double.png";
import triple from "./assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white text-black">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 lg:gap-8 md:gap-8 sm:gap-20 gap-40 ">
                <div className="w-full shadow-lg flex flex-col items-center justify-center p-4 py-4 rounded-lg hover:scale-[1.02] duration-300 md:w-[100%] sm:w-[70%] mx-auto">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white"
                        src={single}
                    />
                    <h2 className="font-bold text-2xl text-center py-7">
                        Single User
                    </h2>
                    <p className="text-4xl font-bold">$149</p>
                    <div className="text-center font-medium ">
                        <p className="py-3 border-b mx-8 mt-8">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="py-2 bg-[#61dbfb] outline-none text-black text-md w-[130px] mx-auto rounded-sm my-5">
                        Start Trail
                    </button>
                </div>

                <div className="w-full shadow-lg flex flex-col items-center justify-center p-4 py-4 rounded-lg hover:scale-[1.02] duration-300 md:w-[100%] sm:w-[70%] mx-auto">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white"
                        src={double}
                    />
                    <h2 className="font-bold text-2xl text-center py-7">
                        Partnership
                    </h2>
                    <p className="text-4xl font-bold">$199</p>
                    <div className="text-center font-medium ">
                        <p className="py-3 border-b mx-8 mt-8">1TB Storage</p>
                        <p className="py-2 border-b mx-8">3 Users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <button className="py-2 bg-[#23272F] outline-none text-[#61dbfb] text-md w-[130px] mx-auto rounded-sm my-5">
                        Start Trail
                    </button>
                </div>
                <div className="w-full shadow-lg flex flex-col items-center justify-center p-4 py-4 rounded-lg hover:scale-[1.02] duration-300 md:w-[100%] sm:w-[70%] mx-auto">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white"
                        src={triple}
                    />
                    <h2 className="font-bold text-2xl text-center py-7">
                        Group Account
                    </h2>
                    <p className="text-4xl font-bold">$299</p>
                    <div className="text-center font-medium ">
                        <p className="py-3 border-b mx-8 mt-8">5TB Storage</p>
                        <p className="py-2 border-b mx-8">10 Users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 50 GB</p>
                    </div>
                    <button className="py-2 bg-[#61dbfb] outline-none text-black text-md w-[130px] mx-auto rounded-sm my-5 mx-auto">
                        Start Trail
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
