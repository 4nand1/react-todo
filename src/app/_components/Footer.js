export const Footer = (props) => {
  return (
    <div className="w-full flex justify-center items-start py-8 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-col gap-2">
          <p className="text-8 font-semibold uppercase tracking-wider text-gray-700 mb-2">
            {props.header}
          </p>

          <p className="text-7 text-gray-500 hover:text-gray-800 cursor-pointer">
            {props.text1}
          </p>
          <p className="text-7 text-gray-500 hover:text-gray-800 cursor-pointer">
            {props.text2}
          </p>
          <p className="text-7 text-gray-500 hover:text-gray-800 cursor-pointer">
            {props.text3}
          </p>
          <p className="text-7 text-gray-500 hover:text-gray-800 cursor-pointer">
            {props.text4}
          </p>
        </div>
      </div>
    </div>
  );
};
