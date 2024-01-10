import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex flex-row items-center p-5 max-w-[1240px] mx-auto">
            <h1 className="w-full text-3xl font-bold text-[#61dbfb]">REACT</h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer">Home</li>
                <li className="p-4 cursor-pointer">Company</li>
                <li className="p-4 cursor-pointer">Resources</li>
                <li className="p-4 cursor-pointer">About</li>
                <li className="p-4 cursor-pointer">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={23} />
                ) : (
                    <AiOutlineMenu size={23} />
                )}
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 pt-5 pl-10 uppercase bg-[#000300] ease-in-out duration-500 md:hidden"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#61dbfb]">
                    REACT
                </h1>
                <u className="list-none no-underline">
                    <li className="p-4 border-b border-gray-900 cursor-pointer">
                        Home
                    </li>
                    <li className="p-4 border-b border-gray-900 cursor-pointer">
                        Company
                    </li>
                    <li className="p-4 border-b border-gray-900 cursor-pointer">
                        Resources
                    </li>
                    <li className="p-4 border-b border-gray-900 cursor-pointer">
                        About
                    </li>
                    <li className="p-4 border-b border-gray-900 cursor-pointer">
                        Contact
                    </li>
                </u>
            </div>
        </div>
    );
};

export default Navbar;
