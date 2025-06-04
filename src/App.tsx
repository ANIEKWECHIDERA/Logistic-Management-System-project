import Button from "./components/shared/Button";
import Button2 from "./components/shared/Button2";
import TestimonialCard from "./components/shared/TestimonialCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-7 justify-center items-center h-screen bg-gray-100">
        <Button
          text={"Get Started Button"}
          classname={"hover:bg-[#1E40AF] bg-[#2563EB] w-52"}
        />
        <Button2
          text={"Sign up"}
          classname={"hover:bg-[#1E40AF] w-32 bg-[#2563EB] "}
        />
        <TestimonialCard
          name="Jane Doe"
          position="Software Engineer"
          testimonial="This platform has greatly improved my productivity!"
          img="https://via.placeholder.com/150"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
