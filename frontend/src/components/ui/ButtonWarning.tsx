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
    <div>
      <div>{warningText}</div>
      <Link to={to}>{buttonText}</Link>
    </div>
  );
}
