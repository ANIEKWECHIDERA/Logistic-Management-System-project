type ButtonProps = {
  text: string;
  classname?: string;
  textColor?: string;
};

const Button2 = ({ text, classname = "", textColor}: ButtonProps) => {
  return (
    <div
      className={`transition-colors duration-200 ease-in-out rounded-lg h-14 text-center flex justify-center text-white items-center ${classname}`}
    >
      <div className={`flex items-center ${textColor}`}>{text}</div>
    </div>
  );
};

export default Button2;
