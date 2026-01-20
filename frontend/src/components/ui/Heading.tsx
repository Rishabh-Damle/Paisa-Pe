import type { PropType } from "../../type/prop-interface";

export function Heading({ label }: PropType) {
  return <div className="text-neutral-800 font-bold text-3xl p-2">{label}</div>;
}
