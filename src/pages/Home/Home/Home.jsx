
import Activities from "../Activities/Activities";
import Banner from "../Banner/Banner";
import BluePinkGallery from "../BluePinkGallery/BluePinkGallery";
import DecorationShow from "../DecorationShow/DecorationShow";
import DecorationsDate from "../DecorationsDate/DecorationsDate";

const Home = () => {
    return (
        <div>
          
           <Banner></Banner>
           <DecorationsDate></DecorationsDate>
           <DecorationShow></DecorationShow>
           <BluePinkGallery></BluePinkGallery>
           <Activities></Activities>

           
        </div>
    );
};

export default Home;