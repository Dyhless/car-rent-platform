import { Text, OverLay, BgImg } from "./HomePage.styled";
import BG from "../../assets/images/BG.jpg";

const HomePage = () => {
  return (
    <>
      <OverLay>
        <BgImg src={BG} />
        <Text>Unlock Adventure: Rent the Perfect Ride for Every Road</Text>
      </OverLay>
    </>
  );
};

export default HomePage;
