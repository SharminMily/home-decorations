/* eslint-disable no-unused-vars */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const Members = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 1200px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(min-width: 769px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
  });

  // Manual autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      slider.current?.next();
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, [slider]);

  return (
    <div className="m-10 my-20">
      <h1 className="text-center my-10 text-violet-800 font-semibold text-5xl">
        Team Members
      </h1>
      <div ref={sliderRef} className="keen-slider ">

        <div className="keen-slider__slide number-slide1 ">

          <div className=" bg-gray-800 hover:bg-white  text-white hover:text-black  border-3   shadow-violet-800 shadow-sm border-violet-400 w-full rounded-3xl relative my-16 pb-0 p-4 md:p-8 ">

            <div className="flex justify-center absolute lg:-top-16 -top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0 ">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-3 border-violet-400 "
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbWJlciUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                alt="Profile Image"
              />
            </div>

            <div className="pt-10 md:pt-12 pb-4 mb-0 h-72 hover:text-black">
              <h6 className="text-center text-violet-400 pt-4">Interior Designer</h6>
              <h4 className="text-center">Sophia Lee</h4>
              <p className="text-center">
              Sophia specializes in modern and minimalist designs, bringing a fresh and elegant touch to every project. Her Work is super.
              </p>
            </div>
          </div>
        </div>


        <div className="keen-slider__slide number-slide2">
          <div className="bg-gray-800 hover:bg-white  text-white hover:text-black  border-3   shadow-violet-800 shadow-sm border-violet-400 w-full rounded-3xl relative my-16 pb-0 p-4 md:p-8 ">
            <div className="flex justify-center absolute lg:-top-16 -top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-violet-400"
                src="https://images.unsplash.com/photo-1625641637296-09077438c478?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
                alt="Profile Image"
              />
            </div>

            <div className="pt-10 md:pt-12 pb-4 mb-0 h-72 hover:text-black">
              <h6 className="text-center text-violet-400 pt-4">Decor Specialist</h6>
              <h4 className="text-center">Olivia Brown</h4>
              <p className="text-center">
              Olivia has a keen eye for detail, selecting the perfect decor elements to enhance the aesthetic appeal of any space.
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide3 ">
          <div className="bg-gray-800 hover:bg-white  text-white hover:text-black  border-3   shadow-violet-800 shadow-sm border-violet-400 w-full rounded-3xl relative my-16 pb-0 p-4 md:p-8 ">
            <div className="flex justify-center absolute lg:-top-16 -top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-violet-400"
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="Profile Image"
              />
            </div>

            <div className="pt-10 md:pt-12 pb-4 mb-0 h-72 hover:text-black">
              <h6 className="text-center text-violet-400 pt-4">Project Manager</h6>
              <h4 className="text-center">Liam Johnson</h4>
              <p className="text-center">
              Liam ensures that all projects are completed on time and within budget, coordinating between clients and the design team.
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide4">
          <div className="bg-gray-800 hover:bg-white  text-white hover:text-black  border-3   shadow-violet-800 shadow-sm border-violet-400 w-full rounded-3xl relative my-16 pb-0 p-4 md:p-8 ">
            <div className="flex justify-center absolute lg:-top-16 -top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-violet-400"
                src="https://images.unsplash.com/photo-1625585445301-676203ae67fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                alt="Profile Image"
              />
            </div>

            <div className="pt-10 md:pt-12 pb-4 mb-0 h-72 hover:text-black">
              <h6 className="text-center text-violet-400 pt-4">Architect</h6>
              <h4 className="text-center">Noah Smith</h4>
              <p className="text-center">
              Noah integrates architectural expertise with innovative design solutions, creating functional and beautiful living spaces.
              </p>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide5">
          <div className="bg-gray-800 hover:bg-white  text-white hover:text-black  border-3   shadow-violet-800 shadow-sm border-violet-400 w-full rounded-3xl relative my-16 pb-0 p-4 md:p-8 ">
            <div className="flex justify-center absolute lg:-top-16 -top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-32 md:translate-x-0">
              <img
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-violet-400"
                src="https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxtZW1iZXIlMjBwaWN0dXJlfGVufDB8fDB8fHww"
                alt="Profile Image"
              />
            </div>

            <div className="pt-10 md:pt-12 pb-4  h-72 hover:text-black">
              <h6 className="text-center text-violet-400 pt-4">Landscape Designer</h6>
              <h4 className="text-center">Emma Davis</h4>
              <p className="text-center">
                LEmma transforms outdoor areas into stunning landscapes, combining creativity with sustainability. Work very super.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Members;
