import React from "react";

import { PropertyCard } from "./_components/PropertyCard";
import { EmployeeCard } from "./_components/EmployeeCard";
import { FeatureCard } from "./_components/FeatureCard";
import { Advise } from "./_components/Advise";
import { Choices } from "./_components/Choices";
import { Search } from "./_components/Search";
import { Footer } from "./_components/Footer";
import { Ending } from "./_components/Ending"

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
  {
    id: 1,
    img: "employer.jpg",
    name: "Michael Chen",
    job: "Senior Real Estate Agent",
    count: "24 Properties Sold",
  },
  {
    id: 2,
    img: "employer2.jpg",
    name: "David Martinez",
    job: "Property Specialist",
    count: "18 Properties Sold",
  },
  {
    id: 3,
    img: "employer3.jpg",
    name: "James Wilson",
    job: "Investment Advisor",
    count: "32 Properties Sold",
  },
  {
    id: 4,
    img: "employer4.jpg",
    name: "Robert Thompson",
    job: "Luxury Home Expert",
    count: "28 Properties Sold",
  },
];

const features = [
  {
    icon: "App.png",
    title: "Top-end Curation",
    desc: "Carefully selected properties that meet our high standards of quality",
  },
  {
    icon: "App (1).png",
    title: "Personalized Insight",
    desc: "Expert guidance tailored to your unique needs and preferences",
  },
  {
    icon: "App (2).png",
    title: "Transaction Moving",
    desc: "Streamlined process from viewing to closing with dedicated support",
  },
];

const advices = [
  {
    id: 1,
    img: "Container.png",
    header: "Browse Curated Homes",
    text: "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
  {
    id: 2,
    img: "Container (1).png",
    header: "Get Expert Advice",
    text: "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey.",
  },
  {
    id: 3,
    img: "Container (2).png",
    header: "Build a Tour",
    text: "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time.",
  },
  {
    id: 4,
    img: "Container (3).png",
    header: "Offer & Close",
    text: "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in.",
  },
];

const choices = [
  {
    id: 1,
    img: "Choice.png",
    header: "Find your dream home for life",
    text: "Browse thousands of properties and find the perfect place",
  },
  {
    id: 1,
    img: "Choice(1).png",
    header: "Pre-Approved Loan $1 to $5",
    text: "Get pre-approved quickly and know your budget",
  },
  {
    id: 1,
    img: "Choice(2).png",
    header: "Commission free for life",
    text: "Save thousands with our commission-free model",
  },
];

const footer = [
  {
    id:1,
    header:"NEED HELP",
    text1:"Contact Us",
    text2:"FAQ",
    text3:"Support",
    text4:"",

  },
  {
    id:2,
    header:"COMPANY",
    text1:"About Us",
    text2:"Careers",
    text3:"Blog",
    text4:"Press",

  },
  {
    id:3,
    header:"QUICK LINKS",
    text1:"Buy",
    text2:"Sell",
    text3:"Rent",
    text4:"Mortage",

  },
  {
    id:1,
    header:"FOLLOW",
    text1:"Facebook",
    text2:"Instagram",
    text3:"Twitter",
    text4:"LinkedIn",

  },
]


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
        {features.map((props) => (
          <FeatureCard
            icon={props.icon}
            title={props.title}
            desc={props.desc}
          />
        ))}
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
          {advices.map((props) => (
            <Advise
              key={props.id}
              img={props.img}
              header={props.header}
              text={props.text}
            />
          ))}
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
            <div className="grid grid-cols-3 grid-rows-2 w-full   mx-auto gap-8">
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

      <div>
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

        <div className="flex gap-[24px] ">
          {employees.map((props) => (
            <EmployeeCard
              key={props.id}
              name={props.name}
              img={props.img}
              job={props.job}
              count={props.count}
            />
          ))}
        </div>
        <div className="  flex items-center justify-center mb-20 rounded-[8px] w-[140.34px] h-[34px] text-center text-white bg-[#FF6900] bottom-1.5">
          Meet the team
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 w-[1064.99] ">
        {choices.map((props) => (
          <Choices
            key={props.id}
            img={props.img}
            header={props.header}
            text={props.text}
          />
        ))}
        ;
      </div>

      <div className="w-screen flex flex-col gap-6 items-center h-[260px] bg-[#101828]">
        <Search/>
      </div>

      <div className="w-full bg-white flex justify-center py-10">
  <div className="w-full max-w-[1280px] grid grid-cols-4 gap-12">
    {footer.map((item) => (
      <Footer
        key={item.id}
        header={item.header}
        text1={item.text1}
        text2={item.text2}
        text3={item.text3}
        text4={item.text4}
      />
    ))}
  </div>
</div>
<div>
  <Ending/>
</div>

    </div>
  );
}
