export function AppBar() {
  return (
    <div className="flex justify-between shadow h-14">
      <div className="text-3xl text-neutral-700 font-semibold pt-2 pl-3 cursor-pointer">
        Paisa-Pe
      </div>
      <div className="flex ">
        <div className="flex flex-col justify-center h-full mr-2 text-lg font-semibold text-neutral-700">
          Hello, User{" "}
        </div>
        <div className="flex justify-center mr-2 rounded-full h-11 w-11 mt-2 bg-neutral-700">
          <div className=" flex flex-col justify-center h-full text-lg text-neutral-50 cursor-pointer font-bold">
            U
          </div>
        </div>
      </div>
    </div>
  );
}
