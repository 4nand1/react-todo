import React from "react";

import { PropertyCard } from "./_components/PropertyCard";

const data = [
  {
    id: 1,
    img: "house1.jpg",
    price: "$216,000",
    name: "Piney Hills",
    beds: 4,
    baths: 2,
    sqft: "2,150",
  },
  {
    id: 2,
    img: "house2.jpg",
    price: "$450,000",
    name: "River Oak",
    beds: 3,
    baths: 2,
    sqft: "1,800",
  },
  {
    id: 3,
    img: "house3.jpg",
    price: "$318,000",
    name: "Maple Glen",
    beds: 5,
    baths: 3,
    sqft: "2,850",
  },
  {
    id: 4,
    img: "house4.jpg",
    price: "$325,000",
    name: "Forest Hill",
    beds: 4,
    baths: 2,
    sqft: "2,200",
  },
  {
    id: 5,
    img: "house5.jpg",
    price: "$295,000",
    name: "Cedar Park",
    beds: 3,
    baths: 2,
    sqft: "1,650",
  },
  {
    id: 6,
    img: "house6.jpg",
    price: "$425,000",
    name: "Willow Creek",
    beds: 4,
    baths: 3,
    sqft: "2,650",
  },
];



const employees = [ 
  { id:1,
    img: "employer1.jpg",
    name:"Michael Chen",
    job:"Senior Real Estate Agent",
    count:"24 Properties Sold",

  },
  { id:2,
    img: "employer2.jpg",
    name:"David Martinez",
    job:"Property Specialist",
    count:"18 Properties Sold",

  },
  { id:3,
    img: "employer3.jpg",
    name:"James Wilson",
    job:"Investment Advisor",
    count:"32 Properties Sold",

  },
  { id:4,
    img: "employer4.jpg",
    name:"Robert Thompson",
    job:"Luxury Home Expert",
    count:"28 Properties Sold",
  },



];







export default function Home() {
  return (
    <div className=" justify-center gap-20 flex flex-col items-center p-3 bg-white ">
      <div className="  justify-center items-center flex flex-col text-center mt-20">
        <p className="text-[26px] font-semibold text-black ">Smart Tools</p>
        <p className="text-[26px] font-semibold text-black">
          Real Experts, Easy Moves
        </p>
        <p className="text-[16px] mt-3 text-gray-400">
          Your Journey to finding the erfect home start here
        </p>
      </div>

      <div className="flex  h-[234px] w-[1281px] gap-6 justify-center items-center">
        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png" />
          <p className="text-[15px] text-black">Personalized Insight</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Expert guidance tailored to your unique needs and preferences
          </p>
        </div>

        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png" />
          <p className="text-[15px] text-black">Personalized Insight</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Expert guidance tailored to your unique needs and preferences
          </p>
        </div>

        <div className="h-[234px] border border-gray-300 w-[410.67px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
          <img src="App.png" />
          <p className="text-[15px] text-black">Transaction Moving</p>
          <p className="text-center text-[14px] text-[#4A5565]">
            Streamlined process from viewing to closing with dedicated support
          </p>
        </div>
      </div>

      <div className="mb-20 rounded-[8px] w-[140.34px] h-[34px] text-center text-white bg-[#FF6900] bottom-1.5">
        Get Started
      </div>

      <div className=" w-full bg-gray-100 h-fit  items-center flex flex-col mt-20 p-[48px]">
        <p className="text-[26px] font-semibold text-black">
          Buying Doesn't Have to
        </p>
        <p className="text-[26px] font-semibold text-black">Be Overwhelming</p>
        <p className="text-[16px] mt-3 text-gray-400">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-48px pt-10 pb-10">
          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container.png" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-black">
                Browse Curated Homes
              </p>
              <p className="text-[16px] mt-3 text-gray-400">
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </div>
          </div>

          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (1).png" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-black">
                Get Expert Advice
              </p>
              <p className="text-[16px] mt-3 text-gray-400">
                Connect with experienced agents who understand the market and
                can guide you through every step of your home-buying journey.
              </p>
            </div>
          </div>

          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (2).png" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-black">
                Build a Tour
              </p>
              <p className="text-[16px] mt-3 text-gray-400">
                Schedule viewings at your convenience and visit multiple
                properties in one trip. Our team coordinates everything to save
                you time.
              </p>
            </div>
          </div>

          <div className="flex gap-8 w-[624px]">
            <div>
              <img src="Container (3).png" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-black">
                Offer & Close
              </p>
              <p className="text-[16px] mt-3 text-gray-400">
                Make confident offers with our support and navigate the closing
                process smoothly. We handle the paperwork so you can focus on
                moving in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[1280px] flex justify-center">
        <div className=" items-center  flex flex-col w-full gap-7">
          <p className="text-[26px] font-semibold text-black">
            Explore Properties
          </p>
          <div className=" flex gap-2">
            <button className=" mb-20 rounded-[16px] w-[90.27px] h-[36px] text-center text-white bg-[#FF6900]  ">
              House
            </button>
            <button className=" mb-20 border rounded-[16px]  h-[36px]   w-[77.93px] text-center">
              Villa
            </button>
            <button className=" mb-20 border rounded-[16px] h-[36px]   w-[120.32px] text-center">
              Apartment
            </button>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <p className="text-center text-[26px] font-semibold">
              Explore Properties
            </p>
            <div className="grid grid-cols-3 grid-rows-2 w-full  w-[1280px] mx-auto gap-8">
              {data.map((props) => (
                <PropertyCard
                  key={props.id}
                  name={props.name}
                  img={props.img}
                  price={props.price}
                  beds={props.beds}
                  baths={props.baths}
                  sqft={props.sqft}
                />
              ))}
              
            </div>

            <div className="flex justify-center ">
              <button className="mb-20 rounded-[8px] w-[188.84px] h-[34px] text-center text-white bg-[#FF6900] bottom-1.5">
                Load More listings
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className=" items-center flex flex-col">
          <p className="text-[20px] font-semibold text-black">
            Meet the People
          </p>
          <p className="text-[20px] font-semibold text-black">
            Behind the Process
          </p>
          <p className="text-[16px] mt-3 text-gray-400">
            Our streamlined process makes finding your dream home simple and
            stress-free
          </p>
        </div>
      </div>
    </div>
  );
}
