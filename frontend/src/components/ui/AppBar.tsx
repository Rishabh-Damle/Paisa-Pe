export function AppBar() {
  return (
    <div className="flex justify-between shadow h-14">
      <div className="text-3xl text-neutral-700 font-semibold pt-2 pl-3">
        Paisa-Pe
      </div>
      <div className="flex ">
        <div className="flex flex-col justify-center h-full mr-3 text-lg">
          Hello, User{" "}
        </div>
        <div className="flex justify-center mr-2 rounded-full h-12 w-12 mt-1 bg-neutral-800">
          <div className=" flex flex-col justify-center h-full text-lg text-neutral-50 cursor-pointer font-bold">
            U
          </div>
        </div>
      </div>
    </div>
  );
}
