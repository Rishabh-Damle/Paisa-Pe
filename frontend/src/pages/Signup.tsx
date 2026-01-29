const VITE_API_URL = import.meta.env.VITE_API_URL;
import { Heading } from "../components/ui/Heading";
import { SubHeading } from "../components/ui/Subheading";
import { Input } from "../components/ui/Input";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center">
        {" "}
        <div className="bg-white border border-gray-400 p-8 rounded-xl w-80 px-5 py-2 text-center cursor-pointer">
          {" "}
          <Heading label="Sign Up"></Heading>
          <SubHeading label="Enter your infromation to create an account"></SubHeading>
          <Input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label="First Name"
            placeholder="John"
          ></Input>
          <Input
            label="Last Name"
            placeholder="Doe"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Input>
          <Input
            label="Email"
            placeholder="johndoe@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            label="Password"
            placeholder=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <Button
            text="Sign Up"
            onClick={async () => {
              await axios.post(VITE_API_URL + "/api/v1/user/signup", {
                username: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
              });
              alert(
                "You succsessfully created your account for further tasks please signin on the platforms",
              );
              navigate("/signin");
            }}
          ></Button>
          <ButtonWarning
            warningText="Already have an account?"
            to={"/Signin"}
            buttonText="Signin"
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
