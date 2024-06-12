
import Activities from "../Activities/Activities";
import Members from "../AllMembers/Members";
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

           <Activities></Activities>
           <Members></Members>
           <BluePinkGallery></BluePinkGallery>
           <SalePercentage></SalePercentage>

           
        </div>
    );
};

export default Home;