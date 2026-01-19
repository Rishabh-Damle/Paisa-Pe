interface InputPropsTypes {
  label: string;
  placeholder: string;
}
export function Input({ label, placeholder }: InputPropsTypes) {
  return (
    <div>
      {label}
      {placeholder}
    </div>
  );
}
