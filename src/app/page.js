import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="border p-4 rounded-b-md w-[450px] h-[600px] bg-white">
        <div className="flex flex-col items-center font-sans gap-[40px] ">
          <img
            className=" rounded-full w-[100px]"
            alt="profile-img"
            src="image.png"
          />

          <h1 className=" font-sans text-black">Flipflop Dugdag</h1>
          <h2 className=" text-gray-400">Free time Hero @ Gotham</h2>
          <h2 className=" text-center text-gray-400">
            my special skill is kick extremely fast.I'm faster than Usan Bolt
            and stronger than Hulk.but some people say you're too skinny but
            it's not a problem for my job.
          </h2>

          <div className="flex w-80 h-10 text-center bg-emerald-500 rounded-md text-white items-center justify-center hover:bg-amber-100">
            Contact Meee
          </div>
          <div className=" flex gap-10 justify-self-end">
            <img className="w-6 h-6"
            src="image copy.png"></img>
            <img className="w-6 h-6"
            src="image copy.png"></img>
            <img className="w-6 h-6"
            src="image copy.png"></img>
            <img className="w-6 h-6"
            src="image copy.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
