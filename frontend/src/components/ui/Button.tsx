interface ButtonProps {
  text: string;
  onlick?: () => void;
}
export function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="bg-neutral-800 text-neutral-50 w-full rounded py-1.5 mt-4 cursor-pointer"
    >
      {props.text}
    </button>
  );
}
