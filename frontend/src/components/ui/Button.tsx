interface ButtonProps {
  text: string;
  onClick?: () => void;
}
export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="bg-neutral-800 text-neutral-50 w-full rounded py-1.5 mt-4 cursor-pointer border border-transparent"
    >
      {props.text}
    </button>
  );
}
