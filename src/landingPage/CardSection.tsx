import imgTwo from "../assets/image-two.jpg" ;
import imgThree from "../assets/image-three.jpg";
import imgFour from "../assets/image-four.jpg";

import Button from "../components/shared/Button";

const cards = [
    {
    id: 1,
    title: "Fleet Management Made Easy",
    description: "Track your vehicles in real-time, automate route assignments, and reduce delivery costs with smart tools.",
    button: "Manage Fleet",
    textOrder: "order-1",
    color: "bg-[#EEF4FF]",
    img: imgFour,
    imgOrder: "order-2",
    rounded:"rounded-r-xl",
    alt: "Easy Fleet Management"
    },

    {
    id: 2,
    title: "Earn On Your Own Terms",
    description: "Drive, deliver, and get paid. LMS connects you with delivery jobs that match your location and schedule.",
    button: "Join As A Rider",
    textOrder: "order-2",
    color: "bg-[#FFF4EC]",
    img: imgTwo,
    imgorder: "order-1",
    rounded:"rounded-l-xl",
    alt:"Earn As A Rider"
    },
    {
        id: 3,
        title: "Send Packages in Minutes",
        description: "Easily connect with riders near you and track your deliveries live. LMS helps you deliver faster and safer.",
        button: "Send A Package Now",
        textOrder: "order-1",
        color: "bg-[#E9FBF1]",
        img: imgThree,
        imgOrder: "order-2",
        rounded:"rounded-r-xl",
        alt: "Send Packages Easily"
    },
    
];


const CardSection = () => {
  return (
    <section className="space-y-16">
        {
            cards.map((card)=>(
                <div key={card.id} className={` flex flex-row ${card.color} rounded-xl `}>
                    <div className={`w-[50%] py-14 px-36 flex flex-col space-y-5 ${card.textOrder}`}>
                        <h3 className="font-bold text-2xl ">
                           {card.title}
                        </h3>
                        <p className="text-xl text-[#6B7280]">
                            {card.description}
                        </p>
                        <Button
                                text={card.button}
                                classname={"hover:bg-[#1E40AF] bg-[#2563EB] w-52"}
                            />
                    </div>

                    <div  className={`w-[50%] ${card.imgOrder}`} >
                        <img src={card.img} alt={card.alt} className={`${card.rounded}`}/>
                    </div>
                    
                </div>
            ))
        }

        

    </section>
  )
}

export default CardSection