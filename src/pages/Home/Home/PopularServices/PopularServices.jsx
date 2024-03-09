import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <h1 className="text-center font-bold">
        <span className="text-violet-600">Popular</span> Services Here
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-2 gap-4 my-8 md:p-2 p-4 mb-0 mx-0">
        {services.slice(0, 4).map((service) => (
          <PopularServicesCard
            key={service._id}
            service={service}
          ></PopularServicesCard>
        ))}
      </div>
      <Link
        to="/allServices"
        className="flex justify-end items-end no-underline mx-10"
      >
        <button className="self-center md:px-8 px-4 md:py-3 py-2 font-semibold rounded bg-violet-500 text-white">
          See All
        </button>
      </Link>
    </div>
  );
};

export default PopularServices;
