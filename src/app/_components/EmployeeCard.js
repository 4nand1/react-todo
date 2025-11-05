export const employees = (props) => {
    return (
<div className="w-[32px] h-[390px] border border-[1px] gap-6 shadow-lg rounded-[14px] overflow-hidden">
<img
        src={props.img}
        alt={props.name}
        className="w-[300px] h-[256px] object-cover"
      />
<div className="p-3 flex flex-col items-center">
<p className="text-gray-800 font-medium text-[20px]">{props.name}</p>
<p className="text-gray-500 font-medium text-[16px]">{props.job}</p>
<p className="text-orange-500 font-semibold">{props.count}</p>


</div>



</div>
    );
}