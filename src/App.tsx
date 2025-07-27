import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./landingPage/HeroSection";
import CardSection from "./landingPage/CardSection";
import Features from "./landingPage/Features";
import TestimonialSection from "./landingPage/TestimonialSection";
import ContactPage from "./pages/ContactPage";
//import RegistationPage from "./pages/RegistationPage"
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

const HomePage = () => (
  <>
    <div className="flex flex-col w-[90%] lg:w-full space-between lg:px-20 space-y-4 lg:space-y-32">
      <HeroSection />
      <Features />
      <CardSection />
    </div>
    <TestimonialSection />
    
  </>
);



const App = () => {
  return (
    <div className="flex flex-col justify-center items-center font-montserrat">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        {/* <Route path="/login" element={<RegistrationPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
