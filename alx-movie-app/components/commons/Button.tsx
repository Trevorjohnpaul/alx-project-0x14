interface ButtonProps {
  title: string;
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      className="bg-[#E2D609] text-black px-4 py-2 rounded-full hover:opacity-80"
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;
