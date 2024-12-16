import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; 
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
    const [sticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`text-[#030712] font-bold h-[80px] ${
                sticky ? "bg-[#3f3f46]" : "bg-transparent"
            } transition-[0.5s] fixed font-outfit py-4 px-0 w-full top-0 left-0 flex items-center justify-between z-10 m-0`}
        >
            <img className="w-[180px] mx-20" src={logo} alt="Logo" />
            <ul className="flex space-x-6 my-5 text-[16px] mx-20">
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} offset={0} duration={500}>
                        Page
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={0} duration={500}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} offset={0} duration={500}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonial" smooth={true} offset={0} duration={500}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={0} duration={500}>
                        Contact us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
