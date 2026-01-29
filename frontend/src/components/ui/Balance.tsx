const VITE_API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { useEffect, useState } from "react";
import { CreditCard, RefreshCw } from "lucide-react";

interface BalancePropsType {
  value?: number;
}

export function Balance({}: BalancePropsType) {
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
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    }
    getBalance();
  }, []);

  return (
    <div className="w-full">
        <div className="bg-black text-white p-6 rounded-2xl shadow-xl hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex justify-between items-start mb-8">
                <div>
                   <p className="text-gray-400 text-sm font-medium mb-1">Total Balance</p>
                   <h2 className="text-4xl font-bold tracking-tight">${balance.toLocaleString()}</h2>
                </div>
                <div className="p-2 bg-gray-800 rounded-lg">
                    <CreditCard className="w-6 h-6 text-white" />
                </div>
            </div>
            
            <div className="relative z-10 flex items-center space-x-2 text-sm text-gray-400">
                <RefreshCw className="w-4 h-4" />
                <span>Updated just now</span>
            </div>
        </div>
    </div>
  );
}
