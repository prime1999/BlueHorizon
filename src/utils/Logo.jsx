import { Link } from "react-router-dom";
import logo from "/images/svg/logo.svg";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center font-nova">
            <h1 className="-mr-7 -mt-4 font-semibold text-darkBlue">Blue</h1>
            <img src={logo} alt="logo" className="w-24" />
            <h1 className="-ml-7 -mt-4 text-darkBlue font-semibold">Horizon</h1>
        </Link>
    );
};

export default Logo;
