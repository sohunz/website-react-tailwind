import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex justify-center items-center flex-col">
                <p className="text-[#61dbfb] font-bold p-2 text-lg">
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
                    Grow with data
                </h1>
                <div className="flex font-bold gap-3 py-10">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Fast, flexible, financing for
                    </p>
                    <TypeAnimation className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500"
                        sequence={["BTB", 1000, "SASS", 1000, "BTC", 1000]}
                        wrapper="span"
                        speed={300}
                        repeat={Infinity}
                    />
                </div>
                <p className="font-bold md:text-2xl sm:text-lg text-lg text-gray-400 px-10">
                    Monitor your data analytics increase invenue for BTB, SASS &
                    BTC platforms.
                </p>
                <button className="px-16 py-4 mt-10 bg-[#61dbfb] outline-none text-black text-lg">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
