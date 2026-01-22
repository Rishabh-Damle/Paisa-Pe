import react from "react";
interface InputPropsTypes {
  label: string;
  placeholder: string;
  onChange: (e: react.ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ label, placeholder, onChange }: InputPropsTypes) {
  return (
    <div>
      <div className="text-left font-semibold py-2 text-sm"> {label}</div>
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="border rounded border-slate-200 w-full px-2 py-1 outline-neutral-400"
      />
    </div>
  );
}
