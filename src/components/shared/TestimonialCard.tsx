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
    <div className="flex flex-col space-x-5 justify-center items-center bg-[#2563EB]">
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-5 bg-[#2563EB] p-5 lg:p-20">
        <div className="flex flex-row-reverse w-full min-h-72 items-start bg-white p-6 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-full border size-20 align-middle object-cover"
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
