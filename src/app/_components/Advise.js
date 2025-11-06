export const Advise = (props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-48px pt-10 pb-10">
      <div className="flex gap-8 w-[624px]">
        <div>
          <img src={props.img} />
        </div>
        <div>
          <p className="text-[20px] font-semibold text-black">{props.header}</p>
          <p className="text-[16px] mt-3 text-gray-600">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
