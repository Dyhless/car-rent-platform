import { Text, Overlay, BgImg } from "./HomePage.styled";
import BG from "../../assets/images/BG.jpg";
import RentalCarBtn from "../../components/Buttons/RentalСarBtn/RentalСarBtn"; // Correct the import name

const HomePage = () => {
  return (
    <>
      <Overlay>
        <BgImg src={BG} />
        <Text>Unlock Adventure: Rent the Perfect Ride for Every Road</Text>
        <RentalCarBtn
          // onClick={handleLoadMore}
          // disabled={isFetching || isMoreAdvertsFetching}
          text="Rental car"
        />
      </Overlay>
    </>
  );
};

export default HomePage;
