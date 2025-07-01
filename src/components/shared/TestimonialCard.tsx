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
    <div className="w-full lg:w-[350px] h-full">
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg border border-black min-h-[300px] h-full">
        <div className="flex flex-row-reverse w-full justify-between items-start">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-full border size-14 lg:size-20 object-cover"
            />
          </div>
          <div className="pr-3 w-3/4">
            <div className="mb-4 space-y-1">
              <p className="text-gray-500 font-medium text-xl">{name}</p>
              <h3 className="font-bold text-xl">{position}</h3>
            </div>
            <p className="text-gray-600 text-base lg:text-xl">{testimonial}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
