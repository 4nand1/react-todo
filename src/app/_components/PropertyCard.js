// src/app/_components/PropertyCard.js

export const PropertyCard = (props) => {
  return (
    <div className="w-[408px] h-[370px]  shadow-lg rounded-xl overflow-hidden">
      <img
        src={props.img}
        alt={props.name}
        className="w-full h-[230px] object-cover"
      />
      <div className="p-3 flex flex-col">
        <p className="text-orange-500 font-semibold">{props.price}</p>
        <p className="text-gray-800 font-medium">{props.name}</p>
        <div className="flex  flex-col gap-2 text-sm text-gray-500 mt-2">
          <div className="flex gap-2 ">
            <img src="Icon.png" className="w-4 h-4" />
            <span>{props.beds} Bedrooms</span>
                      </div>
            <div className="flex p-[4px]">
              <div className="flex gap-2">
                <img src="Icon (1).png" className="w-4 h-4 ml-3" />
                <span>{props.baths} Bathrooms</span>
              </div>
              <div className="flex gap-2">
                <img src="Icon (2).png" className="w-4 h-4 ml-3" />
                <span>{props.sqft} sqft</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
