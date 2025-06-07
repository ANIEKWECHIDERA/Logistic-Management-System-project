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
    color: "bg-[#EEF4FF]",
    img: imgFour,
    alt: "Easy Fleet Management"
    },

    {
    id: 2,
    title: "Earn On Your Own Terms",
    description: "Drive, deliver, and get paid. LMS connects you with delivery jobs that match your location and schedule.",
    button: "Join As A Rider",
    color: "bg-[#FFF4EC]",
    img: imgTwo,
    alt:"Earn As A Rider"
    },
    {
        id: 3,
        title: "Send Packages in Minutes",
        description: "Easily connect with riders near you and track your deliveries live. LMS helps you deliver faster and safer.",
        button: "Send A Package Now",
        color: "bg-[#E9FBF1]",
        img: imgThree,
        alt: "Send Packages Easily"
    },
    
];


const CardSection = () => {
  return (
    <section className="space-y-10 mt-10">
        {
            cards.map((card)=>(
                <div key={card.id} className={` flex flex-row ${card.color} rounded-xl `}>
                    <div className="m-10 w-[50%] p-10 flex flex-col space-y-10">
                        <h3 className="font-bold text-xl ">
                           {card.title}
                        </h3>
                        <p>
                            {card.description}
                        </p>
                        <Button
                                text={card.button}
                                classname={"hover:bg-[#1E40AF] bg-[#2563EB] w-52"}
                            />
                    </div>

                    <div  className="w-[50%] ">
                        <img src={card.img} alt={card.alt} className=" rounded-r-xl"/>
                    </div>
                    
                </div>
            ))
        }

        

    </section>
  )
}

export default CardSection