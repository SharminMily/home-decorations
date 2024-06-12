/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCard = () => {
  const service = useLoaderData();
  // console.log(service);

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

  const addServicesArray = [];

  const handleAddToServices = () => {
      const serviceListItem = JSON.parse(localStorage.getItem('services'));
      if (!serviceListItem) {
        addServicesArray.push(service);
          localStorage.setItem('services', JSON.stringify(addServicesArray))
          Swal.fire({
              position: "top-center",
              icon: "success",
              title: "service added successfully!",
              showConfirmButton: false,
              timer: 1500
          });

      }
      else {
          const isExits = serviceListItem.find((service) => service._id
              === _id
          )
          if (!isExits) {
            addServicesArray.push(...serviceListItem, service)
              localStorage.setItem('services', JSON.stringify(addServicesArray))
              Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "service added successfully!",
                  showConfirmButton: false,
                  timer: 1500
              });
              //    toast.success("added!", "blog added successfully!", "success");
          }
          else {
              Swal.fire({
                  icon: "error",
                  title: "Wrong",
                  text: "already added! No duplicate !"

              });
              //    toast.error("already added!", "No duplicate !", "error");
          }
      }

  }


  return (
    <div>
      <div className="my-20 flex justify-center items-center">
        <div className="max-w-4xl  p-6 md:flex  flex-row sm:space-x-6 bg-gray-900 text-gray-100">
          {/* flex-shrink-0 */}
          <div className="w-full md:mb-0 mb-3 ">
            <img
              src={image}
              alt=""
              className="object-cover object-center md:w-full md:h-full w-full h-60 rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <div>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <span className="text-2xl text-violet-300 font-semibold ">{category} - </span>
              <span className="text-violet-300 font-semibold text-2xl"> ${price}</span>
            </div>
            <div className="space-y-1">
              <p className="text-base text-gray-100">
                Services Area : {ServiceArea}
              </p>
              <p className="text-base text-gray-100 pb-2">{sortDetails}</p>
              <p className="text-sm text-gray-300 pb-2"> {longDescription}</p>

              <button onClick={handleAddToServices} className="mt-3 px-3 py-2 bg-violet-700 rounded-full w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-800 mb-20">
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
