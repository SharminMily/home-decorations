/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const Booking = () => {

    const [services, setServices] = useState([]);

    const [notFound, setNoFound] = useState(false);

    const [isSee, setIsSee] = useState(false)

    useEffect(() => {
        const servicesItem = JSON.parse(localStorage.getItem('services'));
        if (servicesItem) {
            setServices(servicesItem)
        }
        else {
            setNoFound(' Not Booking Found')
        }

    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setServices([]);
        setNoFound(' No Booking Found')
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "deleted",
          showConfirmButton: false,
          timer: 1500,
        });


    }

    console.log(services)
    return (
        <div className="m-10">
              {
                notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div>

                    

                    <div className='grid md:grid-cols-1 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
                       

<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-center text-2xl font-bold leading-tight text-violet-800">
          Booking List  -  {services.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-" />
            </colgroup>
            <thead className="dark:bg-gray-700 text-xl">
              <tr className="text-left t">
                <th className="p-3">  </th>
                <th className="p-3"> image </th>
                <th className="p-3">Category</th>
                <th className="p-3 text-right">Price</th>           
                <th className=" p-4 pl-16 text-left">Delete</th>
              </tr>
            </thead>
            {
                   services.map((item, index) => <>
            <tbody key={item._id}>
              <tr className="border-b border-opacity-20 dark:border-gray-700 bg-gray-900">
                <td className="p-3">
                  <p className="text-gray-200 text-base">
                  {index + 1}
                  </p>
                </td>
                <td className="p-3">
                  <p>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={item.image}
                      alt=""
                    />
                  </p>
                </td>

                <td className="p-3">
                  <p className="text-gray-200 text-lg font-semibold">{item.category} </p>
                </td>
                <td className="p-3 text-right">
                  <p className="text-gray-200">{item.price}</p>
                </td>
                <td className="p-3 text-right">
                  <span  className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <button onClick={handleRemove}>Delete</button>
                  </span>
                </td>
              </tr>
            </tbody>
            </>) 
                            
                           
                        }
            
          </table>
        </div>
      </div>
                          
                    </div>
                </div>
            }
        </div>
    );
};

export default Booking;