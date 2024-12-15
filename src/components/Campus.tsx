import gallery_1 from '../assets/gallery-1.png';
import gallery_2 from '../assets/gallery-2.png';
import gallery_3 from '../assets/gallery-3.png';
import gallery_4 from '../assets/gallery-4.png';
import white_arrow from '../assets/white-arrow.png';


const Campus = () => {
    return (
        <div className="my-[80px] mx-[auto] w-[90%] text-center">
            <div className="flex items-center justify-between space-x-6 mb-[40px] w-[23%]">
                <img className="rounded-[10px]" src={gallery_1} alt=""/>
                <img className="rounded-[10px]" src={gallery_2} alt=""/>
                <img className="rounded-[10px]" src={gallery_3} alt=""/>
                <img className="rounded-[10px]" src={gallery_4} alt=""/>
            </div>
            <button className="bg-[#083344] text-white rounded-3xl items-center justify-center cursor-pointer border-2 p-3 inline-flex">See more here <img className="w-[20px] ml-[11px]" src={white_arrow} alt=  ""/> </button>
        </div>
    )
}
export default Campus
