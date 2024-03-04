import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <>
            {/* <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 gap-10 lg:flex-row">

                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80  xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/S6pTDm5/IMG-20240303-123755.jpg?fbclid=IwAR3N22MDAOJtl3mCCpoMmO0BcZA7Ur25vzQlsuNk3IjmyCnLHFO_sW2Rv2Q" alt="" className="object-contain h-72 sm:h-80 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col pr-0 justify-center p- text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leadi sm:text-6xl">Ac mattis
                            <span className="dark:text-violet-400">senectus </span>erat pharetra
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        </p>
                            
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                        </div>
                    </div>
                </div>
            </section> */}

            <Carousel className="text-center ">
                <div>
                    <img className="" src="https://i.ibb.co/2FLhdCz/photo-1560185127-6ed189bf02f4-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg" />
                    <p className="legend ">Personalized Design Services</p>
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/8PSwhkC/photo-1501183638710-841dd1904471-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
                    <p className="legend">Transforming Your Space</p>
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/G9tS7dK/photo-1516455590571-18256e5bb9ff-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
                    <p className="legend">Bringing Your Vision to Life</p>
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/fdCFxbL/photo-1598928506311-c55ded91a20c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
                    <p className="legend">Elevating Your Living Spaces</p>
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/G5GNsqs/photo-1522708323590-d24dbb6b0267-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
                    <p className="legend"> Crafting Your Dream Home</p>
                </div>
                
            </Carousel>

        </>
    );
};

export default Banner;