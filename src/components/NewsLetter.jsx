const NewsLetter = () => {
    return (
        <div className="w-full py-16 px-5 text-whtie">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 pr-2">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-5">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className=" w-full outline-none p-2 rounded-sm text-black pl-3"
                        />
                        <button className="py-2 bg-[#61dbfb] outline-none text-black text-md w-[130px] md:m-0 sm:m-auto mx-auto rounded-sm">
                            Notify Me
                        </button>
                    </div>
                    <div className="pt-4">
                        <p>
                            We care about the protection of your data. Read our{" "}
                            <span className="text-[#61dbfb]">Pricay Policy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
