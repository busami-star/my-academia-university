
import about from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
const About = () => {
    return (
        <div className="my-[100px] mx-auto flex items-center relative justify-between w-[90%]">
            <div className="basis-[40%]">
                <img className="w-[100%] rounded-[10px]" src={about} alt=""/>
                <img className="w-[60px] absolute top-[46%] transform left-[17%]" src={play_icon} alt=""/>
            </div>
            <div className="basis-[56%]">
                <h3 className="text-[20px] text-[#881337] font-bold">ABOUT UNIVERSITY</h3>
                <h2 className="font-semibold my-[7px] mx-0 max-w-[400px] text-[#4a044e]">Nurturing Tomorrows Leader's Today</h2>
                <div className="text-[#0f172a]">
                    <p className="mb-[15px]">Prepare for success in a fast-changing world. At my-academia university, you’ll receive top-tier
                        education, hands-on experiences, and a community that fosters growth. Discover how we can help
                        you unlock your full potential and make an impact on the world.</p>
                    <p className="mb-[15px]">Your dreams are within reach at my-academia. With personalized mentorship, real-world learning,
                        and unmatched resources, we provide everything you need to turn ambition into achievement. Let
                        us help you build the future you've always imagine</p>
                    <p className="mb-[15px]">Looking for more than just a degree? You’ll join a community committed to innovation, growth, and
                        success. With opportunities for research, internships, and leadership development, we’ll help
                        you write the next chapter of your life</p>
                </div>

            </div>
        </div>
    )
}
export default About
