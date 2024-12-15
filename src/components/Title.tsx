interface TitleProps {
    subTitle: string
    title: string
}

const Title = ({subTitle,title}: TitleProps) => {
    return (
        <div className="text-center text-[15px] uppercase mt-[70px] ml-0 mb-[30px]">
            <p>{subTitle}</p>
            <h2 className="text-[32px] text-[#000F38] mt-[5px] transform-none font-bold ">{title}</h2>
        </div>
    )
}
export default Title
