import { RentalСar } from "./RentalСarBtn.styled";

const RentalСarBtn = ({ onClick }) => {
  return (
    <>
      <RentalСar type="button" onClick={onClick}>
        Rental Сar
      </RentalСar>
    </>
  );
};

export default RentalСarBtn;
