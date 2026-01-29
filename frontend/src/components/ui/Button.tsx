interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 transition-all duration-300 transform hover:-translate-y-0.5 mt-2 cursor-pointer"
    >
      {text}
    </button>
  );
}
