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
    <div className="w-96 h-80 p-6 rounded-lg bg-white">
      <div className="flex flex-row-reverse items-start">
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
  );
};

export default TestimonialCard;
