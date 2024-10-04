import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    projectIdea: ''
  });
  const [rotate, setRotate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" mt-16 flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="flex-1 p-8 relative min-h-[25vh] lg:min-h-0">
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
              {[0, 1].map((index) => (
                <div 
                  key={index}
                  className='relative flex items-center justify-center w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100'
                >
                  <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div 
                      style={{
                        transform: `translate(-50%,-50%) rotate(${rotate}deg)`
                      }} 
                      className='line flex absolute top-1/2 left-1/2 w-full h-10'
                    >
                      <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-zinc-100'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:mr-8  flex-1 bg-white text-black p-8 lg:p-12 font-foundersGrotesk">
          {!isSubmitted ? (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">Let's Create Something Epic Together.</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xl font-bold mb-2" htmlFor="name">
                    YOUR NAME *
                  </label>
                  <input
                    className="w-full text-lg p-3 border border-gray-300 rounded-lg"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl font-bold mb-2" htmlFor="email">
                    EMAIL *
                  </label>
                  <input
                    className="w-full text-lg p-3 border border-gray-300 rounded-lg"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl font-bold mb-2" htmlFor="companyName">
                    COMPANY NAME *
                  </label>
                  <input
                    className="w-full text-lg p-3 border border-gray-300 rounded-lg"
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {step === 1 && (
                  <button
                    className="w-full bg-gray-200 text-xl text-black p-4 rounded-lg mt-6 hover:bg-gray-300 transition-colors"
                    onClick={nextStep}
                    type="button"
                  >
                    EXPLAIN PROJECT IDEA →
                  </button>
                )}
                {step === 2 && (
                  <div>
                    <label className="block text-2xl font-bold mb-2" htmlFor="projectIdea">
                      PROJECT IDEA
                    </label>
                    <textarea
                      className="w-full p-3 border text-lg border-gray-300 rounded-lg"
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      rows="4"
                    />
                    <button
                      className="w-full text-xl bg-black text-white p-4 rounded-lg mt-6 hover:bg-gray-900 transition-colors"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="flex flex-col justify-between items-center lg:justify-center md:h-full">
              <h2 className="mt-6  text-7xl md:text-5xl lg:text-6xl font-bold  text-center">
                Thank you for contacting us!
              </h2>
              <br />
              <h1 className='mt-16 text-7xl'>CYLSETECH</h1>
              {/* <h1>CYLSETECH</h1> */}
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactForm;
