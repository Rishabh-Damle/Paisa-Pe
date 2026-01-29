import dotenv from "dotenv";
dotenv.config();
import { VITE_API_URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";

interface BalancePropsType {
  value: number;
}

export function Balance({ value }: BalancePropsType) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function getBalance() {
      try {
        const res = await axios.get(VITE_API_URL + "/api/v1/account/balance", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setBalance(res.data.Balance);
        console.log("data", res.data.User);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }

    getBalance();
  }, [balance]);
  return (
    <div className="flex p-4">
      <div className="font-bold text-xl pr-2">Your balance : </div>
      <div className="font-semibold text-xl">${balance}</div>
    </div>
  );
}
