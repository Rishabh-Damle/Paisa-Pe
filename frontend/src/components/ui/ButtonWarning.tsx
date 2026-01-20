import { Link } from "react-router-dom";
interface ButtonWarningPropsTypes {
  warningText: string;
  buttonText: string;
  to: string;
}
export function ButtonWarning({
  warningText,
  buttonText,
  to,
}: ButtonWarningPropsTypes) {
  return (
    <div className="flex justify-center font-sm p-3">
      <div>{warningText}</div>
      <Link to={to} className="pointer pl-1 underline">
        {" "}
        {buttonText}
      </Link>
    </div>
  );
}
