interface ButtonProps {
  text: string;
  onlick?: () => void;
}
export function Button(props: ButtonProps) {
  return <div>{props.text}</div>;
}
