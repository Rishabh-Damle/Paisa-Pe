interface InputPropsTypes {
  label: string;
  placeholder: string;
}
export function Input({ label, placeholder }: InputPropsTypes) {
  return (
    <div>
      <div className="text-left font-semibold py-2 text-sm"> {label}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded border-slate-200 w-full px-2 py-1 outline-0"
      />
    </div>
  );
}
