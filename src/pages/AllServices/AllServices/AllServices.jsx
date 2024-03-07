// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {

    // const services = useLoaderData();
    // console.log(services);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    
    console.log(services)

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-20 md:p-8 p-6">
                {
                    services.map(service => <AllServicesCard key={service._id} service={service}></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;