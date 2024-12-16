import dark_arrow from "../assets/dark-arrow.png";
const Hero = () => {
    return (
        <div id="hero" className="bg-[url('./assets/hero.png')] pt-[200px]  bg-cover bg-center text-white w-[100%] min-h-[100vh]">
            <div className="mx-20 text-center">
                <h1 className="text-[60px] font-bold text-[#fafafa] mb-4">Welcome to my-academia university!</h1>
                <p className="mt-2.5 mb-[20px] leading-snug text-[#fafafa] font-bold ">Enrich your life with our academic excellence, global partnerships, and vibrant student community.Be part of a thriving campus culture and gain skills to stand out in today’s competitive world</p>
                <button className="border-2 p-3 bg-[#083344] rounded-3xl cursor-pointer inline-flex items-center justify-center">Explore more <img className="w-[20px] ml-[11px]" src={dark_arrow} alt=""/> </button>
            </div>
        </div>
    )
}
export default Hero
