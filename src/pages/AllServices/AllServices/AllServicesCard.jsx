/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllServicesCard = ({ service }) => {
  const {
    _id,
    service_id,
    category,
    image,
    title,
    rating,
    price,
    sortDetails,
    longDescription,
    ServiceArea,
  } = service;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <div className=" bg-gray-900 md:mb-10 text-gray-100 border-2 border-violet-800 rounded-xl shadow-xl shadow-slate-600">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-3 space-y-">
          <div className="space-y-">
            <div className="flex justify-between ">
              <h2 className="text-xl font-semibold text-violet-300">
                {category}
              </h2>
              <h2 className="text-xl text-violet-300 font-semibold ">
                ${price}
              </h2>
            </div>
            <h2 className="text-lg w-max font-semibold 0 tracki ">{title}</h2>
            <p className="text-sm mb-3 text-gray-400">
              {longDescription.slice(0, 130)}
            </p>
            {/* <p className="text-sm mb-3 text-gray-300">{ServiceArea}</p> */}
          </div>

          <Link to={`/service/${_id}`} className="no-underline">
            <button
              type="button"
              className="flex mt-0 items-center bg-gradient-to-br from-violet-600 via-violet-300 to-violet-600 justify-center w-full p-1 font-semibold  hover:bg-gradient-to-bl rounded-md text-xl text-black "
            >
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
