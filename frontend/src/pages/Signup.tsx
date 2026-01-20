import { Heading } from "../components/ui/Heading";
import { SubHeading } from "../components/ui/Subheading";
import { Input } from "../components/ui/Input";
import { ButtonWarning } from "../components/ui/ButtonWarning";
import { Button } from "../components/ui/Button";
export function Signup() {
  return (
    <div className="bg-neutral-700 h-screen w-screen flex justify-center items-center">
      <div className="flex-col justify-center">
        {" "}
        <div className="bg-neutral-50 w-80 px-5 py-2 text-center rounded-lg cursor-pointer">
          {" "}
          <Heading label="Sign Up"></Heading>
          <SubHeading label="Enter your infromation to create an account"></SubHeading>
          <Input label="First Name" placeholder="John"></Input>
          <Input label="Last Name" placeholder="Doe"></Input>
          <Input label="Email" placeholder="johndoe@example.com"></Input>
          <Input label="Password" placeholder=""></Input>
          <Button text="Sign Up"></Button>
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
