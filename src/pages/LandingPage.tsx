import HeroSection from "../landingPage/HeroSection";
import CardSection from "../landingPage/CardSection";
import Features from "../landingPage/Features";
import TestimonialSection from "../landingPage/TestimonialSection";


const LandingPage = () => {
  return (
    <div>
        <div className="flex flex-col w-[90%] lg:w-full space-between lg:px-20 space-y-4 lg:space-y-32">
      <HeroSection />
      <Features />
      <CardSection />
    </div>
    <TestimonialSection />
    </div>
  )
}

export default LandingPage