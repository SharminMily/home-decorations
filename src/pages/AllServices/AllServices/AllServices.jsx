// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://home-decorations-server.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);

  const [isSee, setIsSee] = useState(false);

  return (
    <div>
      <h1 className="text-center pt-4">
        {" "}
        Our All <span className="text-violet-700 font-semibold">
          {" "}
          services
        </span>{" "}
        here
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 md:p-8 p-6">
        {/* {services.map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
         
        ))} */}

        {isSee
          ? services.map((service) => (
              <AllServicesCard
                key={service._id}
                service={service}
              ></AllServicesCard>
            ))
          : services
              .slice(0, 6)
              .map((service) => (
                <AllServicesCard
                  key={service._id}
                  service={service}
                ></AllServicesCard>
              ))}
      </div>

      {/* <div>
        {services.length > 6 && !isSee && (
          <button
            onClick={() => setIsSee(!isSee)}
            className="p-3 mb-3 bg-violet-600 text-white rounded-lg mx-auto block"
          >
            {" "}
            see All
          </button>
        )}
      </div> */}

      <div className="text-center mb-4">
        {services.length > 4 && (
          <button
            onClick={() => setIsSee(!isSee)}
            className="px-7 py-3 bg-violet-700  text-white rounded-full mx-auto block"
          >
            {" "}
            {isSee ? "See less" : "See All"}{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default AllServices;
