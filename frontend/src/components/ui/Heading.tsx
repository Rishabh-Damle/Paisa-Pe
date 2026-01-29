import type { PropType } from "../../type/prop-interface";

export function Heading({ label }: PropType) {
  return <div className="text-neutral-900 font-bold text-3xl">{label}</div>;
}
