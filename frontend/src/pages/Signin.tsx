import { Button } from "../components/ui/Button";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { SubHeading } from "../components/ui/Subheading";

export function Signin() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center">
        {" "}
        <div className="bg-white border border-gray-400 p-8 rounded-xl w-80 px-5 py-2 text-center cursor-pointer ">
          {" "}
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your credentials to accsess your account"></SubHeading>
          <Input label="Email" placeholder="johndoe@example.com"></Input>
          <Input label="Password" placeholder=""></Input>
          <Button text="Sign In"></Button>
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
