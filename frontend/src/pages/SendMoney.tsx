const VITE_API_URL = import.meta.env.VITE_API_URL;

import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Wallet, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const [amount, setAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = async () => {
    setIsLoading(true);
    try {
      await axios.post(
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
      navigate("/dashboard");
    } catch (error) {
      console.error("Transfer failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl -ml-20 -mb-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="bg-black p-2 rounded-lg">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Paisa-Pe</span>
            </div>
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-neutral-900">Send Money</h1>
            <p className="text-gray-500 text-sm mt-1">Transfer funds instantly</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl mb-6 border border-gray-100">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-3">
              {firstName ? firstName[0].toUpperCase() : "?"}
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              {firstName} {lastName}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">Sending to</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                Amount (in $)
              </label>
              <input
                onChange={(e) => {
                  setAmount(parseInt(e.target.value, 10) || 0);
                }}
                type="number"
                min="0"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                id="amount"
                placeholder="0.00"
              />
            </div>

            <button
              onClick={handleTransfer}
              disabled={isLoading || amount <= 0}
              className="w-full bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-300 transform hover:-translate-y-0.5 mt-2 cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <span>{isLoading ? "Processing..." : "Initiate Transfer"}</span>
              <Send className="w-4 h-4" />
            </button>

            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-black font-medium py-2 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
