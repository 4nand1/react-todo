import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center p-3 bg-gray-50">
      <div className="border p-4 rounded-b-md w-[400px] h-[200px]  bg-white">
        <div className="flex flex-col items-center font-sans gap-[40px] ">
          <div className=" text-black font-bold text-sm ">To-Do List</div>
          <div className=" flex flex-row gap-3 w-full ">
          <input
  type="text"
  placeholder="Add a new task..."
  className=" children rounded-[8px] border w-full h-[40px] px-3 py-2 text-gray-700 placeholder-gray-600 text-sm outline-none"

/>
          <button className=" rounded-[8px] bg-blue-500 w-[60px] text-white text-sm ">Add</button>
          </div>

          <div className=" flex gap-2 justify-center">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}
