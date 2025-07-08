import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./landingPage/HeroSection";
import CardSection from "./landingPage/CardSection";
import Features from "./landingPage/Features";
import TestimonialSection from "./landingPage/TestimonialSection";
import ContactPage from "./landingPage/ContactPage";
import { Route, Routes } from "react-router-dom";

const HomePage = () => (
  <>
    <Header />
    <div className="flex flex-col w-[90%] lg:w-full space-between lg:px-20 space-y-4 lg:space-y-32">
      <HeroSection />
      <Features />
      <CardSection />
    </div>
    <TestimonialSection />
    <Footer />
  </>
);

const Contact = () => (
  <>
    <Header />
    <ContactPage />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center font-montserrat">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
