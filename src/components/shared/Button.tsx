import { MdNavigateNext } from "react-icons/md";

type ButtonProps = {
  text: string;
  classname?: string;
};

const Button = ({ text, classname = "" }: ButtonProps) => {
  return (
    <div
      className={`transition-colors duration-200 ease-in-out rounded-lg py-3 text-center px-6 flex justify-center cursor-pointer text-white items-center ${classname}`}
    >
      <div className="flex items-center">
        {text}
        <MdNavigateNext className="text-2xl ml-2" />
      </div>
    </div>
  );
};

export default Button;
