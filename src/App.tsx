import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";


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
