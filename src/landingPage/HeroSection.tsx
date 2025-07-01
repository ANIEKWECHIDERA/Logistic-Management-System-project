import Button from "../components/shared/Button";
import imgOne from "../assets/image-one.jpg";

const HeroSection = () => {
  return (
    <main
      id="about"
      className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 "
    >
      <div className="flex flex-col space-y-10 w-full lg:w-[70%]">
        <div
          className="flex flex-col space-y-5 mx-auto w-full lg:pr-16
        "
        >
          <h1 className="font-extrabold text-2xl lg:text-7xl text-center lg:text-left font-montserrat px-4 lg:px-0">
            <span className="text-[#FF6A00]">Simplify</span> and{" "}
            <span className="text-[#FF6A00]">Grow</span> Your Logistics
            Operations with LMS
          </h1>
          <p className="text-[#6B7280] text-base lg:text-[19px] text-center lg:text-left leading-normal">
            {" "}
            From dispatch to delivery, LMS helps Nigerian businesses track
            shipments, manage fleets, and connect with verified riders or
            vendors — all in one platform.
          </p>
        </div>

        <form action="" className="flex flex-col w-full lg:w-[40%] space-y-5">
          <label htmlFor="options" className="font-normal">
            I am a:
          </label>
          <select
            name="options"
            id="options"
            className="border p-2 hover:shadow-[#6B7280] shadow-sm"
          >
            <option value="">Select User Type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </form>
        <div className="flex items-center justify-center lg:justify-start">
          <Button
            text={"Get Started"}
            classname={"hover:bg-[#1E40AF] bg-[#2563EB]"}
          />
        </div>
      </div>

      <div className="w-full lg:w-[40%] ">
        <img src={imgOne} alt="" className="rounded-xl" />
      </div>
    </main>
  );
};

export default HeroSection;
