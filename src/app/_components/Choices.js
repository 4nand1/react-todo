export const Choices = (props) => {
    return (
        <div className="w-[333.66px] h-[152px]">
            <img src={props.img} className="w-[64px] h-[64px] " />
            <div className="">
                <p className="">{props.header}</p>
                <p className="">{props.text}</p>
            </div>
        </div>
    )
}