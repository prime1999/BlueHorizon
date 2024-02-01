import { Link } from "react-router-dom";
import Logo from "../utils/Logo";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between mx-auto h-14 px-16 py-5 text-darkBlue font-inter">
            <ul className="flex items-center gap-8 text-md font-medium h-full">
                <li className="relative group">
                    <Link to="/" className="">
                        Home
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="21"
                        viewBox="0 0 3 21"
                        fill="red"
                        className="fill-darkBlue absolute -bottom-5 right-1/2 opacity-0 rotate-90 duration-500 transition-opacity ease-in-out group-hover:opacity-100"
                    >
                        <path
                            d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                            className="fill-darkBlue"
                        />
                    </svg>
                </li>
                <li className="relative group">
                    <Link>Explore</Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="21"
                        viewBox="0 0 3 21"
                        fill="red"
                        className="fill-darkBlue absolute -bottom-5 right-1/2 opacity-0 rotate-90 duration-500 transition-opacity ease-in-out group-hover:opacity-100"
                    >
                        <path
                            d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                            className="fill-darkBlue"
                        />
                    </svg>
                </li>
                <li className="relative group">
                    <Link>Saved</Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="21"
                        viewBox="0 0 3 21"
                        fill="red"
                        className="fill-darkBlue absolute -bottom-5 right-1/2 opacity-0 rotate-90 duration-500 transition-opacity ease-in-out group-hover:opacity-100"
                    >
                        <path
                            d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                            className="fill-darkBlue"
                        />
                    </svg>
                </li>
                <li className="relative group">
                    <Link>Contact</Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="21"
                        viewBox="0 0 3 21"
                        fill="red"
                        className="fill-darkBlue absolute -bottom-5 right-1/2 opacity-0 rotate-90 duration-500 transition-opacity ease-in-out group-hover:opacity-100"
                    >
                        <path
                            d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                            className="fill-darkBlue"
                        />
                    </svg>
                </li>
            </ul>
            <div className="mt-4">
                <Logo />
            </div>
            <div>
                <div className="flex gap-4">
                    <button className="border border-light rounded-md px-4 py-2 font-semibold text-darkBlue duration-500 hover:bg-light">
                        Log-In
                    </button>
                    <button className="border border-light rounded-md px-4 py-2 font-semibold bg-darkBlue text-white duration-500 hover:bg-black">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
