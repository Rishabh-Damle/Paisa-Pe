import type { PropType } from "../../type/prop-interface";

export function SubHeading({ label }: PropType) {
  return (
    <div className="font-normal text-md text-gray-500 pt-1">
      {label}
    </div>
  );
}
