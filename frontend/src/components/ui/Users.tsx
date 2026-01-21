export function Users() {
  return (
    <div className="flex flex-col p-4">
      <div className="font-bold text-xl">Users</div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="border border-neutral-400 outline-0 w-full py-1 mt-3 px-2 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-6 ">
        <div className="flex ">
          {" "}
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              U1
            </div>
          </div>
          <div className="flex flex-col h-full justify-center pl-2 text-xl">
            <div>User 1</div>
          </div>
        </div>
        <div className=" mr-3">
          <button
            type="submit"
            className="bg-neutral-800 text-neutral-50 rounded-lg py-1.5 px-2 cursor-pointer"
          >
            Send Money
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-6 ">
        <div className="flex ">
          {" "}
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              U2
            </div>
          </div>
          <div className="flex flex-col h-full justify-center pl-2 text-xl">
            <div>User 2</div>
          </div>
        </div>
        <div className=" mr-3">
          <button
            type="submit"
            className="bg-neutral-800 text-neutral-50 rounded-lg py-1.5 px-2 cursor-pointer"
          >
            Send Money
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-6 ">
        <div className="flex ">
          {" "}
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              U3
            </div>
          </div>
          <div className="flex flex-col h-full justify-center pl-2 text-xl">
            <div>User 3</div>
          </div>
        </div>
        <div className=" mr-3">
          <button
            type="submit"
            className="bg-neutral-800 text-neutral-50 rounded-lg py-1.5 px-2 cursor-pointer"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}
