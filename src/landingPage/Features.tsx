import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBolt, FaUser } from "react-icons/fa6";

const reasons = [
  {
    id: 1,
    icon: <FaMapMarkerAlt size={40} />,
    title: "Real-Time Tracking",
    description:
      "Know where your goods are at every moment. Monitor drivers via GPS, view delivery history, and get instant updates - all in real-time",
  },
  {
    id: 2,
    icon: <FaBolt size={40} />,
    title: "Smart Automation",
    description:
      "Automatically assign riders based on location and availability. Send instant notification to customers and reduce delays",
  },
  {
    id: 3,
    icon: <FaUser size={40} />,
    title: "Gig Marketplace",
    description:
      "Hire verified riders or logistics partners instantly from our trusted network. Expand your capacity without stress",
  },
];
const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center text-center "
    >
      <div className="flex flex-col items-center justify-center text-center space-y-5 w-full lg:w-[35%]">
        <h2 className="font-bold text-2xl"> Why Choose LMS?</h2>
        <p className="font-bold text-[#2563EB]  mb-5">
          Unlock efficiency with tools designed for seamless logistics
        </p>
      </div>
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-14 space-y-10 lg:space-y-0 p-3 mt-10">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex flex-col space-y-5 w-80">
            <div className="flex items-center justify-center text-[#2563EB] text-xl">
              {reason.icon}
            </div>
            <h2 className="font-bold text-xl">{reason.title}</h2>
            <p className="text-[#6B7280]  lg:text-lg">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
