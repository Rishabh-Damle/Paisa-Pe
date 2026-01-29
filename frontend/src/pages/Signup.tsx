const VITE_API_URL = import.meta.env.VITE_API_URL;
import { Heading } from "../components/ui/Heading";
import { SubHeading } from "../components/ui/Subheading";
import { Input } from "../components/ui/Input";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">

          <div className="flex justify-center mb-1">
            <div className="flex items-center space-x-2">
                <div className="bg-black p-1.5 rounded-lg">
                    <Wallet className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">Paisa-Pe</span>
            </div>
          </div>

          <div className="mb-3 text-center">
             <Heading label="Create Account" />
             <div className="-mt-1">
                <SubHeading label="Start your financial journey today" />
             </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
                <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    label="First Name"
                    placeholder="John"
                />
                <Input
                    onChange={(e) => setLastName(e.target.value)}
                    label="Last Name"
                    placeholder="Doe"
                />
            </div>
            
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

            <div className="pt-2">
              <Button
                text="Sign Up"
                onClick={async () => {
                  try {
                    await axios.post(VITE_API_URL + "/api/v1/user/signup", {
                        username: email,
                        firstName: firstName,
                        lastName: lastName,
                        password: password,
                    });
                    navigate("/signin");
                  } catch (error) {
                    console.error("Signup failed:", error);

                  }
                }}
              />
            </div>
            
            <div className="text-center mt-2">
                <ButtonWarning
                    warningText="Already have an account?"
                    to={"/signin"}
                    buttonText="Log in"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
