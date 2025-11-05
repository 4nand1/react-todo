import Image from "next/image";
// ExploreGrid.jsx
import React from "react";

const properties = [
  { id: 1, img: "/house1.jpg", price: "$216,000", name: "Piney Hills",  beds: 4, baths: 2, sqft: "2,150" },
  { id: 2, img: "/house2.jpg", price: "$450,000", name: "River Oak",   beds: 3, baths: 2, sqft: "1,800" },
  { id: 3, img: "/house3.jpg", price: "$318,000", name: "Maple Glen",  beds: 5, baths: 3, sqft: "2,850" },
  { id: 4, img: "/house4.jpg", price: "$325,000", name: "Forest Hill", beds: 4, baths: 2, sqft: "2,200" },
  { id: 5, img: "/house5.jpg", price: "$295,000", name: "Cedar Park",  beds: 3, baths: 2, sqft: "1,650" },
  { id: 6, img: "/house6.jpg", price: "$425,000", name: "Willow Creek",beds: 4, baths: 3, sqft: "2,650" },
];

export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-8">
      {properties.map((p) => (
        <div key={p.id} className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
          <img src={p.img} alt={p.name} className="w-full h-[230px] object-cover" />

          <div className="p-3 flex flex-col">
            <p className="text-orange-500 font-semibold">{p.price}</p>
            <p className="text-gray-800 font-medium">{p.name}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <img src="/bed.png"  alt="" className="w-4 h-4" />
              <span>{p.beds} Bedrooms</span>

              <img src="/bath.png" alt="" className="w-4 h-4 ml-3" />
              <span>{p.baths} Bathrooms</span>

              <img src="/area.png" alt="" className="w-4 h-4 ml-3" />
              <span>{p.sqft} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function Home() {
  return (
    <div className=" justify-center gap-20 flex flex-col items-center p-3">
      <div className="  justify-center items-center flex flex-col text-center mt-20">
        <p className="text-[26px] font-semibold ">Smart Tools</p>
        <p className="text-[26px] font-semibold">Real Experts, Easy Moves</p>
        <p className="text-[16px] mt-3 text-gray-400">
          Your Journey to finding the erfect home start here
        </p>
      </div>
      <div className="flex  h-[234px] w-[1281px] gap-6 justify-center items-center">
        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png"></img>
          <p className="text-[15px]">Personalized Insight</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Expert guidance tailored to your unique needs and preferences
          </p>
        </div>

        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png"></img>
          <p className="text-[15px]">Personalized Insight</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Expert guidance tailored to your unique needs and preferences
          </p>
        </div>

        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png"></img>
          <p className="text-[15px]">Transaction Moving</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Streamlined process from viewing to closing with dedicated support
          </p>
        </div>
      </div>
      <div className="mb-20 rounded-[8px] w-[140.34px] h-[34px] text-center text-white bg-[#FF6900] bottom-1.5">
        Get Started
      </div>

      <div className=" w-full bg-gray-100 h-fit  items-center flex flex-col mt-20 p-[48px]">
        <p className="text-[26px] font-semibold ">Buying Doesn't Have to</p>
        <p className="text-[26px] font-semibold">Be Overwhelming</p>
        <p className="text-[16px] mt-3 text-gray-400">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-48px pt-10 pb-10">
          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container.png"></img>
            </div>
            <div>
              <p className="text-[20px] font-semibold">Browse Curated Homes</p>
              <p className="text-[16px] mt-3 text-gray-400">
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (1).png"></img>
            </div>
            <div>
              <p className="text-[20px] font-semibold">Get Expert Advice</p>
              <p className="text-[16px] mt-3 text-gray-400">
                Connect with experienced agents who understand the market and
                can guide you through every step of your home-buying journey.
              </p>
            </div>``
          </div>
          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (2).png"></img>
            </div>
            <div>
              <p className="text-[20px] font-semibold">Build a Tour</p>
              <p className="text-[16px] mt-3 text-gray-400">
                Schedule viewings at your convenience and visit multiple
                properties in one trip. Our team coordinates everything to save
                you time.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (3).png"></img>
            </div>
            <div>
              <p className="text-[20px] font-semibold">Offer & Close</p>
              <p className="text-[16px] mt-3 text-gray-400">
                Make confident offers with our support and navigate the closing
                process smoothly. We handle the paperwork so you can focus on
                moving in.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className=" w-[1280px] h-[972px]">
          <div className=" items-center  flex flex-col w-full h-[62px] gap-7">
          <p  className="text-[26px] font-semibold">Explore Properties</p>
          <div className=" flex gap-2">
            <button className=" mb-20 rounded-[16px] w-[90.27px] h-[36px] text-center text-white bg-[#FF6900]  ">House</button>
            <button className=" mb-20 border rounded-[16px]  h-[36px]   w-[77.93px] text-center">Villa</button>
            <button className=" mb-20 border rounded-[16px] h-[36px]   w-[120.32px] text-center">Apartment</button>
          </div>


          

          <div className="bg-white grid grid-cols-2 grid-rows-3 gap-8">
  {/* 1-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden flex flex-col">
    <img src="house1.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$216,000</p>
      <p className="text-gray-800 font-medium">Piney Hills</p>
      <div className="flex  items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>4 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>2 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>2,150 sqft</span>
      </div>
    </div>
  </div>

  {/* 2-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
    <img src="house2.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$450,000</p>
      <p className="text-gray-800 font-medium">River Oak</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>3 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>2 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>1,800 sqft</span>
      </div>
    </div>
  </div>

  {/* 3-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
    <img src="house3.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$318,000</p>
      <p className="text-gray-800 font-medium">Maple Glen</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>5 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>3 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>2,850 sqft</span>
      </div>
    </div>
  </div>

  {/* 4-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
    <img src="house4.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$325,000</p>
      <p className="text-gray-800 font-medium">Forest Hill</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>4 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>2 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>2,200 sqft</span>
      </div>
    </div>
  </div>

  {/* 5-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
    <img src="house5.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$295,000</p>
      <p className="text-gray-800 font-medium">Cedar Park</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>3 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>2 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>1,650 sqft</span>
      </div>
    </div>
  </div>

  {/* 6-р байр */}
  <div className="w-[408px] h-[370px] shadow-lg rounded-xl overflow-hidden">
    <img src="house6.jpg" className="w-full h-[230px] object-cover" />
    <div className="p-3 flex flex-col">
      <p className="text-orange-500 font-semibold">$425,000</p>
      <p className="text-gray-800 font-medium">Willow Creek</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src="bed.png" className="w-4 h-4" />
        <span>4 Bedrooms</span>
        <img src="bath.png" className="w-4 h-4 ml-3" />
        <span>3 Bathrooms</span>
        <img src="area.png" className="w-4 h-4 ml-3" />
        <span>2,650 sqft</span>
      </div>
    </div>
  </div>
</div>
<div className="bg-red-500 text-white p-4">test</div>

          </div>
         </div>

          </div>
         
  
      

  );
}
