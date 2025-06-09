import Button from "../components/shared/Button";
import imgOne from "../assets/image-one.jpg";

const HeroSection = () => {
  return (
          <main className="flex flex-row space-y-3 ">

            <div className="flex flex-col space-y-10 w-[70%]">
              <div className="flex flex-col space-y-5 w-[95%]">

                <h1 className="font-bold text-7xl font-montserrat">
                  <span className="text-[#FF6A00]">Simplify</span> and <span className="text-[#FF6A00]">Grow</span> Your Logistics Operations with LMS
                </h1>
                <p className="text-[#6B7280] text-[19px] leading-normal"> From dispatch to delivery, LMS helps Nigerian businesses track shipments, manage fleets, and connect with verified riders or vendors — all in one platform.
                </p>
              </div>

              <form action="" className="flex flex-col w-[40%] space-y-5">
                <label htmlFor="options" className="font-bold">I am a:</label>
                <select name="options" id="options" className="border p-2 hover:shadow-[#6B7280] shadow-sm">
                  <option value="">Select User Type</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </form>

              <Button
                    text={"Get Started Button"}
                    classname={"hover:bg-[#1E40AF] bg-[#2563EB] w-52"}
                  />

            

            </div>

            <div className="w-[40%] ">
              <img src={imgOne} alt="" className="rounded-xl"/>
              
            </div>

          </main>
        )
      }

export default HeroSection