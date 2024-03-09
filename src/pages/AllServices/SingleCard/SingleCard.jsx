import { useLoaderData } from "react-router-dom";

const SingleCard = () => {
  const service = useLoaderData();
  console.log(service);

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

  return (
    <div>
      <div className="my-20 flex justify-center items-center">
        <div className="max-w-4xl  p-10 md:flex  flex-row sm:space-x-6 bg-gray-900 text-gray-100">
          {/* flex-shrink-0 */}
          <div className="w-full md:mb-0 mb-3">
            <img
              src={image}
              alt=""
              className="object-cover object-center md:w-full md:h-full w-full h-60 rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <span className="text-lg dark:text-gray-400 ">{category} - </span>
              <span className=""> ${price}</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-300">{sortDetails}</p>
              <p className="text-sm text-gray-300">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-gray-800 mb-20"
       
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leadi text-center text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
