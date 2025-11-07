import { Button } from "./Button";


export const Search = () => {

  return (
    <div className="flex flex-col gap-8 p-10 ">
      <div className="h-12 text-white text-center text-4 ">
        <p>The Only Market Update</p>
        <p>You'll Actually Want to Read</p>
      </div>
      <p className="text-4 text-gray-400 text-center">
        Get weekly insights on the real estate market, new listings, and expert
        tips delivered to your inbox
      </p>
      <div className="flex justify-center  gap-3">
        <p className=" rounded-lg text-[#717182] w-[305.484375px] h-9 bg-[#FFFFFF] flex items-center pl-2">Enter your email</p>
        <Button name="Subscribe"/>
      </div>
    </div>
  );
};
