
import logo from '../assets/logo.png'
import React, {useEffect} from "react";

const Navbar = () => {

    const [sticky, setSticky] = React.useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {window.scrollY > 60 ? setSticky(true) : setSticky(false)})
    },[])
    return (
        <nav  className={`text-[#030712] font-bold h-[80px] ${sticky ? 'bg-[#3f3f46]' : 'bg-transparent'
        } transition-[0.5s] fixed font-outfit py-4 px-0 w-full top-0 left-0 flex items-center justify-between z-10 m-0`}
        >
            <img className="w-[180px] mx-20" src={logo} alt=""/>
            <ul className=" flex space-x-6 my-5 text-[16px] mx-20">
                <li>Home</li>
                <li>Page</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className="cursor-pointer">Contact us</button></li>
            </ul>
        </nav>
    )
}
export default Navbar
