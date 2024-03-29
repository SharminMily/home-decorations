
import Activities from "../Activities/Activities";
import Banner from "../Banner/Banner";
import BluePinkGallery from "../BluePinkGallery/BluePinkGallery";
import DecorationShow from "../DecorationShow/DecorationShow";
import DecorationsDate from "../DecorationsDate/DecorationsDate";
import PopularServices from "./PopularServices/PopularServices";
import SalePercentage from "./SalePercentage/SalePercentage";

const Home = () => {
    return (
        <div>
          
           <Banner></Banner>
           <DecorationsDate></DecorationsDate>
           <DecorationShow></DecorationShow>
           
           <PopularServices></PopularServices>

           <BluePinkGallery></BluePinkGallery>
           <Activities></Activities>
           <SalePercentage></SalePercentage>

           
        </div>
    );
};

export default Home;