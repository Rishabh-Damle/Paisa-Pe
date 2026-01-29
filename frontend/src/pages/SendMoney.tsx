import dotenv from "dotenv";
dotenv.config();
import { VITE_API_URL } from "../config";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { FaUser } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center align-middle">
        <div className="bg-white border border-gray-400 rounded-xl w-80  py-12 cursor-pointer text-center">
          <div>
            <Heading label="Send Money"></Heading>
          </div>
          <div className="px-13">
            {" "}
            <div className="flex">
              {" "}
              <div className="rounded-full h-10 w-10 bg-green-500 flex justify-center mt-5 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-white font-semibold">
                  <FaUser></FaUser>
                </div>
              </div>
              <div className="mt-6 text-lg font-bold ml-2 flex">
                <div className="pr-1">{firstName}</div> <div>{lastName}</div>
              </div>
            </div>
            <div>
              <input
                onChange={(e) => {
                  setAmount(parseInt(e.target.value, 10));
                }}
                type="number"
                className="flex mt-4 border outline-0 h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm border-gray-400"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  axios.post(
                    VITE_API_URL + "/api/v1/account/transfer",
                    {
                      reciverUserId: id,
                      amount: amount,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    },
                  );
                }}
                type="submit"
                className="bg-green-500 font-semibold w-full py-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-green-400"
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
