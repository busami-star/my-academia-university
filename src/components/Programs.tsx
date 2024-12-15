import program_1 from "../assets/program-1.png"
import program_2 from "../assets/program-2.png"
import program_3 from "../assets/program-3.png"
import program_icon_1 from "../assets/program-icon-1.png"
import program_icon_2 from "../assets/program-icon-2.png"
import program_icon_3 from "../assets/program-icon-3.png"

const Programs = () => {
    return (
        <div className="my-[80px] mx-auto w-[70%]  flex items-center space-x-6 justify-between ">
            <div className="relative">
                <img className="w-[100%] rounded-[10px] block" src={program_1} alt=""/>
                <div className="rounded-3xl opacity-0  hover:opacity-100 cursor-pointer">
                    <img className="absolute rounded-2xl w-[150px] m-auto bg-[rgba(0,15,152,0.3)] top-0 left-0 bottom-0 right-0" src={program_icon_1} alt=""/>
                </div>
                <p className="opacity-0  hover:opacity-100 cursor-pointer">Bachelors degree</p>
            </div>

            <div className="relative">
                <img className="w-[100%]  rounded-[10px] block" src={program_2} alt=""/>
                <div className="opacity-0  hover:opacity-100 cursor-pointer">
                    <img className="absolute rounded-2xl m-auto w-[130px] bg-[rgba(0,15,152,0.3)] top-0 left-0 bottom-0 right-0" src={program_icon_2} alt=""/>
                </div>
                <p className="opacity-0  hover:opacity-100 cursor-pointer">Masters degree</p>
            </div>
            <div className="relative">
                <img className="w-[100%] rounded-[10px] block" src={program_3} alt=""/>

                <div className="opacity-0  hover:opacity-100 cursor-pointer">

                    <img
                        className="absolute  rounded-2xl m-auto bg-[rgba(0,15,152,0.3)] w-[150px]  top-0 left-0 bottom-0 right-0"
                        src={program_icon_3} alt=""/>
                </div>
                <p className="opacity-0  hover:opacity-100 cursor-pointer">Post-graduate degree</p>



            </div>
        </div>
    )
}
export default Programs
