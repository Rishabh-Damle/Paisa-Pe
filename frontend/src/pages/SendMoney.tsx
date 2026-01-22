import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";

export function SendMoney() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center align-middle">
        <div className="bg-white border-gray-400 rounded-xl w-80  py-12 cursor-pointer text-center">
          <div>
            <Heading label="Send Money"></Heading>
          </div>
          <div className="px-13">
            {" "}
            <div className="flex">
              {" "}
              <div className="rounded-full h-11 w-11 bg-green-500 flex justify-center mt-5 mr-3">
                <div className="flex flex-col justify-center h-full text-xl text-white font-semibold">
                  A
                </div>
              </div>
              <div className="mt-7 text-lg font-bold">Friend's Name</div>
            </div>
            <div>
              <Input
                label="Amount (in usd) "
                placeholder="Enter amount"
              ></Input>
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-500 w-full py-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-green-400"
              >
                Intiate transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
