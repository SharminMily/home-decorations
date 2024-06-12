/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import ReactStars from "react-rating-stars-component";

const PopularServicesCard = ({ service }) => {
  const {
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

  // modal
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" bg-gray-900 md:mb-10 text-gray-100 border-2 border-violet-800 rounded-xl shadow-2xl hover:shadow-violet-400 shadow-slate-600">
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

          <button
            onClick={toggleModal}
            type="button"
            className="flex mt-0 items-center bg-gradient-to-br from-violet-600 via-violet-300 to-violet-600 justify-center w-full p-1 font-semibold  hover:bg-gradient-to-bl rounded-md text-xl text-black "
          >
            More Details
          </button>
        </div>
      </div>

      {/* modal open here*/}

      <div className="">
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative flex flex-col items-center max-w-lg gap- p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 text-gray-100">
              <img
                src={image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
              />

              <h2 className="text-2xl pt-2 text-v font-semibold leadi tracki">
                {category}
              </h2>

              <h2 className="text-2xl w-max font-semibold 0 tracki pb-0">
                {title}
              </h2>
              <p className="text-sm mb-0 text-gray-400 pb-0">{sortDetails}</p>
              <ReactStars
                count={5}
                value={service.rating}
                onChange={ratingChanged}
                style={{ maxWidth: 160 }}
                size={36}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ff8c00"
              />
              <br />
              <p className="text-sm mb-0 text-gray-400 pb-0">
                {longDescription}
              </p>
              <p className="text-lg w-max font-semibold 0 mt-0 ">
                {ServiceArea}
              </p>
              <button
                type="button"
                className="px-6 py-2 font-semibold text-xl rounded-full bg-violet-400 text-gray-900"
                onClick={toggleModal}
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularServicesCard;
