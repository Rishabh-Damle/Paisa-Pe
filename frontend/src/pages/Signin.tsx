const VITE_API_URL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { SubHeading } from "../components/ui/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

           <div className="mb-4 text-center">
             <Heading label="Welcome Back" />
             <div className="-mt-2">
                <SubHeading label="Sign in to access your wallet" />
             </div>
          </div>

          <div className="space-y-3">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="johndoe@example.com"
              type="email"
            />
            
            <Input
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="••••••••"
              type="password"
            />

            <div className="pt-4">
                <Button
                    text="Sign In"
                    onClick={async () => {
                    try {
                        const response = await axios.post(
                            VITE_API_URL + "/api/v1/user/signin",
                            {
                                username: email,
                                password: password,
                            },
                        );
                        localStorage.setItem("token", response.data.Token);
                        navigate("/dashboard");
                    } catch (error) {
                        console.error("Signin failed:", error);

                    }
                    }}
                />
            </div>

            <div className="text-center mt-4">
                <ButtonWarning
                    warningText="Don't have an account?"
                    to={"/signup"}
                    buttonText="Sign up"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
