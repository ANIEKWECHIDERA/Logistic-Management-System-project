const App = () => {
<<<<<<< HEAD
  return <div>App</div>;
=======
  return (
    <div className="flex flex-col justify-center items-center font-montserrat">
        <Header />
      <div className="flex flex-col space-between px-20 space-y-32">
        
        <HeroSection />
      
        {/* <Button2
          text={"Sign up"}
          classname={"hover:bg-[#1E40AF] w-32 bg-[#2563EB] "}
        /> */}

        <Features />

        <CardSection />

      </div>
      
      <TestimonialCard
          name="Jane Doe"
          position="Software Engineer"
          testimonial="This platform has greatly improved my productivity!"
          img="https://via.placeholder.com/150"
        />
     
      <Footer />
    </div>
  );
>>>>>>> 1e49383... Completed landing page development
};

export default App;
