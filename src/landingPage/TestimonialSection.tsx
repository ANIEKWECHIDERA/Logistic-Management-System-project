import TestimonialCard from "../components/shared/TestimonialCard";
import img1 from "../assets/Ifeoma N Business Owner.jpg";
import img2 from "../assets/Musa A Rider PArtner.jpg";
import img3 from "../assets/tayo B Gig Rider.jpg";

const testimonials = [
  {
    name: "Ifeoma N.",
    position: "Business Owner",
    testimonial:
      "“I no longer call five different drivers to track shipments. LMS gives me real-time updates and peace of mind.”",
    img: img1,
  },
  {
    name: "Musa A.",
    position: "Rider Partner",
    testimonial:
      "“Since I joined LMS, I’ve doubled my delivery earnings and spend less time planning routes. Na real game changer.”",
    img: img2,
  },
  {
    name: "Tayo B.",
    position: "Gig Rider",
    testimonial:
      "“What I love most? The flexibility. I drive when I want, and I get paid weekly, no stories.”",
    img: img3,
  },
];

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center bg-[#2563EB] mt-10 lg:mt-20 w-full">
      <h3 className="text-white font-semibold text-2xl lg:text-3xl text-center px-4 py-8">
        Ready to Transform Your Logistics?
      </h3>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-14 px-4 lg:px-12 pb-12 w-full">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex justify-center w-full lg:w-auto">
            <TestimonialCard
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              img={testimonial.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
