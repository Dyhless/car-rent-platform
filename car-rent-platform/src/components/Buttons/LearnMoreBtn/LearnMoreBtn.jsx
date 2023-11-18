import { LearnMore } from "./LearnMoreBtn.styled";

const LearnMoreBtn = ({ openModal }) => {
  return (
    <>
      <LearnMore onClick={openModal}>Learm more</LearnMore>
    </>
  );
};

export default LearnMoreBtn;
