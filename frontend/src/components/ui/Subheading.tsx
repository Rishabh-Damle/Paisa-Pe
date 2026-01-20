import type { PropType } from "../../type/prop-interface";

export function SubHeading({ label }: PropType) {
  return (
    <div className="font-light text-md pt-1 text-neutral-600 px-4 pb-4">
      {label}
    </div>
  );
}
