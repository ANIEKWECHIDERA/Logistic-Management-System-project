import imgTwo from "../assets/image-two.jpg";
import imgThree from "../assets/image-three.jpg";
import imgFour from "../assets/image-four.jpg";

import Button from "../components/shared/Button";

const cards = [
  {
    id: 1,
    title: "Fleet Management Made Easy",
    description:
      "Track your vehicles in real-time, automate route assignments, and reduce delivery costs with smart tools.",
    button: "Manage My Fleet",
    textOrder: "order-1",
    color: "bg-[#EEF4FF]",
    img: imgFour,
    imgOrder: "order-2",
    rounded: "rounded-t-xl lg:rounded-r-xl lg:rounded-tl-none",
    alt: "Easy Fleet Management",
  },

  {
    id: 2,
    title: "Earn On Your Own Terms",
    description:
      "Drive, deliver, and get paid. LMS connects you with delivery jobs that match your location and schedule.",
    button: "Join As A Rider",
    textOrder: "order-1 lg:order-2",
    color: "bg-[#FFF4EC]",
    img: imgTwo,
    imgOrder: "order-2 lg:order-1",
    rounded: "rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none",
    alt: "Earn As A Rider",
  },
  {
    id: 3,
    title: "Send Packages in Minutes",
    description:
      "Easily connect with riders near you and track your deliveries live. LMS helps you deliver faster and safer.",
    button: "Send A Package Now",
    textOrder: "order-1",
    color: "bg-[#E9FBF1]",
    img: imgThree,
    imgOrder: "order-2",
    rounded: "rounded-t-xl lg:rounded-r-xl lg:rounded-tl-none",
    alt: "Send Packages Easily",
  },
];

const CardSection = () => {
  return (
    <section className="space-y-4 lg:space-y-16">
      {cards.map((card) => (
        <div
          key={card.id}
          className={` flex flex-col-reverse lg:flex-row ${card.color} rounded-xl `}
        >
          <div
            className={`w-full lg:w-[50%] py-4 lg:p-28 px-4 flex flex-col space-y-5  justify-center items-center${card.textOrder}`}
          >
            <h3 className="font-bold text-center lg:text-left text-lg lg:text-2xl ">
              {card.title}
            </h3>
            <p className=" text-base text-center lg:text-left lg:text-xl  text-[#000000]">
              {card.description}
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <Button
                text={card.button}
                classname={
                  "hover:bg-[#1E40AF] bg-[#2563EB] font-semibold w-auto px-4"
                }
              />
            </div>
          </div>

          <div className={`w-full lg:w-[50%] ${card.imgOrder}`}>
            <img src={card.img} alt={card.alt} className={`${card.rounded}`} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
