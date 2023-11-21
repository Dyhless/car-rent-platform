import { Text, Overlay, BgImg } from "./HomePage.styled";
import BG from "../../assets/images/BG.jpg";
import RentalCarBtn from "../../components/Buttons/RentalСarBtn/RentalСarBtn"; // Correct the import name

const HomePage = () => {
  return (
    <>
      <Overlay>
        <BgImg src={BG} />
        <Text>DriveHubRentals</Text>
        <RentalCarBtn
          text="Rental car"
          onClick={() => {
            window.location.href = "tel:+380730000000";
          }}
        />
      </Overlay>
    </>
  );
};

export default HomePage;
