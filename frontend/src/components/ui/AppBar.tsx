import { FaUser } from "react-icons/fa";
export function AppBar() {
  return (
    <div className="flex justify-between shadow h-14">
      <div className="text-3xl text-neutral-700 font-semibold pt-2 ml-4 cursor-pointer">
        Paisa-Pe
      </div>
      <div className="flex ">
        <div className="flex flex-col justify-center h-full mr-2 text-lg font-semibold text-neutral-700">
          Hello, User{" "}
        </div>
        <div className="rounded-full h-11 w-11 bg-slate-200 flex justify-center mt-2 mr-4">
          <div className="flex flex-col justify-center h-full text-xl cursor-pointer">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
}
