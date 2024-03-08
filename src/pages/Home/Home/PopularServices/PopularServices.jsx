import { useEffect, useState } from "react";
import AllServicesCard from "../../../AllServices/AllServices/AllServicesCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProduct")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <h1 className="text-center font-bold">
        <span className="text-violet-600">Popular</span> Services Here
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-2 gap-4 my-8 md:p-3 p-4 mb-0">
        {services.slice(0, 4).map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
        ))}
      </div>
      <Link
        to="/allServices"
        className="flex justify-end items-end no-underline mx-10"
      >
        <button className="self-center md:px-8 px-4 md:py-3 py-2 font-semibold rounded bg-violet-600 text-white">
          See All
        </button>
      </Link>
    </div>
  );
};

export default PopularServices;
