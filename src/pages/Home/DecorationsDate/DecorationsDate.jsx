import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const DecorationsDate = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 1200px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(min-width: 769px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(max-width: 480px)": {
        slides: { perView: 2, spacing: 5 },
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
    <div className="my-10">
      <h1 className="md:text-4xl text-2xl mb-4 font-semibold text-center">
        Special <span className="text-violet-800 font-bold">Decorations</span>{" "}
        Date
      </h1>

      <div className="max-w-screen-xl md:p-5 mx-auto ">
        <div className="p-8 py-16 bg-gray-800 text-gray-100">
          {/* dark:bg-gray-800 dark:text-gray-100 */}
          <div>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="relative border-2  border-violet-800 shadow-xl hover:shadow-gray-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/h8L6CKd/IMG-20240304-124643.jpg')",
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-3 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="p-0 text-lg font-semibold tracki uppercase text-gray-100 bgundefined no-underline"
                    >
                      Room
                    </a>
                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        01
                      </span>
                      <span className="leadi uppercase">Jan</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-xl hover:underline text-gray-100 no-underline"
                    >
                      Floral centerpieces, draped fabric, fairy lights, elegant
                      table.
                    </a>
                  </h2>
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
                <div
                  className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/LDwgt12/IMG-20240304-124710.jpg')",
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-3 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="p-0 text-lg font-semibold tracki uppercase text-gray-100 no-underline"
                    >
                      Room
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        07
                      </span>
                      <span className="leadi uppercase">Jan</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100 no-underline text-xl"
                    >
                      Balloons, streamers, vibrant colors, joyful celebration
                      atmosphere.
                    </a>
                  </h2>
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">
                <div
                  className="relative border-2 border-violet-800 shadow-xl shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/GkjKTVX/IMG-20240304-124738.jpg')",
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-2 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-lg font-semibold tracki uppercase text-gray-100 no-underline"
                    >
                      Sports
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        02
                      </span>
                      <span className="leadi uppercase">Mar</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-xl hover:underline text-gray-100 no-underline"
                    >
                      Candles flicker, satin drapes sway, crystal, creating
                      enchantment.
                    </a>
                  </h2>
                </div>
              </div>
              <div className="keen-slider__slide number-slide4">
                <div
                  className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/12HtvDT/IMG-20240304-124755.jpg')",
                  }}
                >
                  {/* background-image: url(&quot;&quot;https://source.unsplash.com/random/243x320&quot;&quot;); */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-2 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className=" no-underline font-semibold text-lg tracki uppercase text-gray-100"
                    >
                      Sports
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        11
                      </span>
                      <span className="leadi uppercase">Jul</span>
                    </div>
                  </div>
                  <h2 className="z-10 ">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100 text-xl no-underline"
                    >
                      Soft rugs, plush cushions, warm lighting, cozy blankets
                      invite relaxation.
                    </a>
                  </h2>
                </div>
              </div>
              <div className="keen-slider__slide number-slide5">
                <div
                  className="relative border-2 border-violet-800 shadow-xl shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/z4zWZLL/IMG-20240304-112143.jpg')",
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-2 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-lg font-semibold tracki uppercase text-gray-100 no-underline"
                    >
                      Kitchen
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        13
                      </span>
                      <span className="leadi uppercase">Nov</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-xl hover:underline text-gray-100 no-underline"
                    >
                      Candles flicker, satin drapes sway, crystal, creating
                      enchantment.
                    </a>
                  </h2>
                </div>
              </div>
              <div className="keen-slider__slide number-slide6">
                <div
                  className="relative border-2 border-violet-800 shadow-xl hover:shadow-slate-500 flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/z8xHspH/IMG-20240303-212208.jpg')",
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-3 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="p-0 text-lg font-semibold tracki uppercase text-gray-100 no-underline"
                    >
                      Bedroom
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        21
                      </span>
                      <span className="leadi uppercase">Mar</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100 no-underline text-xl"
                    >
                      Balloons, streamers, vibrant colors, joyful celebration
                      atmosphere.
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorationsDate;
