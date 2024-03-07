/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import ReactStars from "react-rating-stars-component";


const AllServicesCard = ({ service }) => {

    const { service_id, category, image, title, rating, price, sortDetails, longDescription, ServiceArea } = service;

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div>

            <div className=" bg-gray-900 md:mb-10 text-gray-100 border-2 border-violet-800 rounded-xl shadow-xl shadow-slate-600">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-">
                    <div className="space-y-2">

                  <div className="flex justify-between pb-2">
                  <h2 className="text-3xl font-semibold text-violet-300">{category}</h2>
                    <h2 className="text-2xl text-violet-300 font-semibold ">${price} </h2>
                  </div>
                        <h2 className="text-3xl w-max font-semibold 0 tracki">{title}</h2>
                        <p className="text-gray-100">{sortDetails}</p>
                                              
                                              
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
                    </div>

                    <button type="button" className="flex mt-0 items-center bg-gradient-to-br from-violet-600 via-violet-300 to-violet-600 justify-center w-full p-2 font-semibold  hover:bg-gradient-to-bl rounded-md text-xl text-black ">More Details</button>

                </div>
            </div>

        </div>
    );
};

export default AllServicesCard;