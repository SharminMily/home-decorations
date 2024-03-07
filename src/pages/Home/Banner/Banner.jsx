import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <>
      <Carousel className="text-center ">
        <div>
          <img
            className=""
            src="https://i.ibb.co/2FLhdCz/photo-1560185127-6ed189bf02f4-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg"
          />
          <p className="legend ">Personalized Design Services</p>
        </div>
        <div>
          <img
            className=""
            src="https://i.ibb.co/8PSwhkC/photo-1501183638710-841dd1904471-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
          />
          <p className="legend">Transforming Your Space</p>
        </div>
        <div>
          <img
            className=""
            src="https://i.ibb.co/G9tS7dK/photo-1516455590571-18256e5bb9ff-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
          />
          <p className="legend">Bringing Your Vision to Life</p>
        </div>
        <div>
          <img
            className=""
            src="https://i.ibb.co/fdCFxbL/photo-1598928506311-c55ded91a20c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
          />
          <p className="legend">Elevating Your Living Spaces</p>
        </div>
        <div>
          <img
            className=""
            src="https://i.ibb.co/G5GNsqs/photo-1522708323590-d24dbb6b0267-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
          />
          <p className="legend"> Crafting Your Dream Home</p>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
