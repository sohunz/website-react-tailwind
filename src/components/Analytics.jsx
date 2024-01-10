import laptop from "./assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4 text-black">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
                <img className="w-[500px] mx-auto my-4" src={laptop} />
                <div className="flex flex-col">
                    <p className="text-[#61dbfb] font-bold">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <p className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                        Manage data analytics centrally
                    </p>
                    <p className="pb-10 pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Necessitatibus repellendus modi aut aliquid
                        consectetur placeat repudiandae minima hic dicta
                        excepturi non quo accusamus quam facere, soluta aperiam
                        alias ea corrupti aliquam voluptas adipisci laudantium.
                        Cupiditate rerum id incidunt soluta magni.
                    </p>
                    <button className="px-5 py-3 bg-[#61dbfb] outline-none text-black text-lg w-[200px] md:m-0 sm:m-auto mx-auto">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
