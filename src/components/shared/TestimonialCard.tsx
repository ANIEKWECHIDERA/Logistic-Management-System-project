type TestimonialCardProps = {
  name: string;
  position: string;
  testimonial: string;
  img: string;
};

const TestimonialCard = ({
  name,
  position,
  testimonial,
  img,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col space-x-5 justify-center items-center bg-[#2563EB] mt-20">
      <h3 className="text-white font-semibold text-xl pt-5">Ready to Transform Your Logistics?</h3>
      
      <div  className="flex justify-center items-center space-x-5 p-20 bg-[#2563EB]">
        <div className="flex flex-row-reverse w-[30%] h-72 items-start bg-white p-6 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-full border size-20 ali"
            />
          </div>
          <div className="pr-3">
            <div className="mb-4 space-y-1">
              <p className="text-gray-500 font-medium text-xl">{name}</p>
              <h3 className="font-bold text-xl">{position}</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6 text-xl">"{testimonial}"</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[30%] h-72 items-start bg-white p-6 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-full border size-20 ali"
            />
          </div>
          <div className="pr-3">
            <div className="mb-4 space-y-1">
              <p className="text-gray-500 font-medium text-xl">{name}</p>
              <h3 className="font-bold text-xl">{position}</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6 text-xl">"{testimonial}"</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[30%] h-72 items-start bg-white p-6  rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-full border size-20 ali"
            />
          </div>
          <div className="pr-3">
            <div className="mb-4 space-y-1">
              <p className="text-gray-500 font-medium text-xl">{name}</p>
              <h3 className="font-bold text-xl">{position}</h3>
            </div>
            <div>
              <p className="text-gray-600 mb-6 text-xl">"{testimonial}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
