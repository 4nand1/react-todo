import Image from "next/image";

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
            </div>
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


          <div className="grid grid-cols-2 grid-rows-3 gap-8">
            <div className="">
            <div className="w-[408px] h-[370px]">
              <img src="house1.jpg"></img>
              <p className=" text-orange-500">$216,000</p>
              <p className="">Piney Hills</p>
              <div className="">
                <img src="Icon (2).png"></img>
                <span className="Bedrooms"></span>
              </div>
            </div>
          </div>
          </div>
         </div>

          </div>
          </div>
  
      

  );
}
