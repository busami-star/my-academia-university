import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'

const Testimonials = () => {

    return (
        <div id="testimonial" className="my-[80px]  py-0 flex items-center mx-20 px-[80px] relative">
            <img className="absolute top-[50%] right-0 translate-y-[-50%] bg-red-950 p-[15px] w-[50px] rounded-[50%] cursor-pointer" src={next_icon} alt=""/>
            <img className="right-auto left-0 bg-red-950  absolute  p-[15px] w-[50px] rounded-[50%] cursor-pointer" src={back_icon} alt=""/>
            <div className="overflow-hidden">
                <ul className="flex w-[200%] overflow-x-hidden transition-[0.5s]">
                    <li className="p-[20px]">
                        <div className="rounded-[10px] p-[40px] shadow-2xl  shadow-[#a1a1aa]">
                            <div className="flex items-center mb-[20px] text-[15px]">
                                <img className="w-[70px] mr-[10px] border-solid border-[4px] border-[#831843] rounded-full" src={user_1} alt=""/>
                                <div>
                                    <h3 className="font-bold text-red-950">Vickie wayne</h3>
                                    <span>New Jersey, UK</span>
                                </div>
                            </div>
                            <p>Looking back, I realize how pivotal my years at my-academia were in shaping who I am
                                today.
                                The school’s unwavering commitment to academic excellence pushed me to strive for my
                                best
                                every day. I was constantly encouraged to think critically, ask questions, and explore
                                beyond the textbooks. But it wasn’t just about academics; the faculty genuinely cared
                                about
                                our personal growth too.</p>
                        </div>

                    </li>
                    <li className="p-[20px]">
                        <div className="rounded-[10px] p-[40px] shadow-2xl  shadow-[#a1a1aa]">
                            <div className="flex items-center mb-[20px] text-[15px]">
                                <img className="w-[70px] mr-[10px] border-solid border-[4px] border-[#831843] rounded-full" src={user_2} alt=""/>
                                <div>
                                    <h3 className="font-bold text-red-950">Busami Victor</h3>
                                    <span>Masacheussettes, USA</span>
                                </div>
                            </div>
                            <p>When I first joined my-academia university, I was a shy and reserved student with little
                                confidence in myself. The inclusive and supportive environment here transformed me in
                                ways I couldn’t have imagined. My teachers were more than instructors—they were mentors
                                who guided me and believed in my potential even when I doubted myself. </p>

                        </div>
                    </li>
                    <li className="p-[20px]">
                        <div className="rounded-[10px] p-[40px] shadow-2xl  shadow-[#a1a1aa]">
                            <div className="flex items-center mb-[20px] text-[15px]">
                                <img className="w-[70px] mr-[10px] border-solid border-[4px] border-[#831843] rounded-full" src={user_3} alt=""/>
                                <div>
                                    <h3 className="font-bold text-red-950">prixie liam</h3>
                                    <span>Amsterdam, USA</span>
                                </div>
                            </div>
                            <p>As an alumnus of my-academia university, I often find myself reflecting on the incredible
                                role it played in my life. From the first day, the school emphasized the importance of a
                                well-rounded education and it helped shape out who i am today. </p>

                        </div>
                    </li>
                    <li className="p-[20px]">
                        <div className="rounded-[10px] p-[40px] shadow-2xl  shadow-[#a1a1aa]">
                            <div className="flex items-center mb-[20px] text-[15px]">
                                <img className="w-[70px] mr-[10px] border-solid border-[4px] border-[#831843] rounded-full" src={user_4} alt=""/>
                                <div>
                                    <h3 className="font-bold text-red-950">Jhones Querry</h3>
                                    <span>New York, USA</span>
                                </div>
                            </div>
                            <p>My time at my-academia university was filled with unforgettable memories, inspiring
                                teachers, and countless learning experiences. I still vividly remember the engaging
                                classroom discussions, the excitement of school competitions, and the pride of
                                representing the school in various events. </p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Testimonials
