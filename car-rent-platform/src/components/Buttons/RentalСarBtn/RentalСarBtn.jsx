import { RentalСar } from "./RentalСarBtn.styled";

const RentalСarBtn = ({ onClick, text }) => {
  return (
    <>
      <RentalСar type="button" onClick={onClick}>
        {text}
      </RentalСar>
    </>
  );
};

export default RentalСarBtn;
