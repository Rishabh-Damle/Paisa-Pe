const VITE_API_URL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { SubHeading } from "../components/ui/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center">
        {" "}
        <div className="bg-white border border-gray-400 p-8 rounded-xl w-80 px-5 py-2 text-center cursor-pointer ">
          {" "}
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your credentials to accsess your account"></SubHeading>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="johndoe@example.com"
          ></Input>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            placeholder=""
          ></Input>
          <Button
            text="Sign In"
            onClick={async () => {
              const response = axios.post(
                VITE_API_URL + "/api/v1/user/signin",
                {
                  username: email,
                  password: password,
                },
              );
              localStorage.setItem("token", (await response).data.Token);
              navigate("/dashboard");
            }}
          ></Button>
          <ButtonWarning
            warningText="Don't have an account?"
            to={"/Signup"}
            buttonText="Signup"
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
