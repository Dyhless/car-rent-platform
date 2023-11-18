import { LearnMore } from "./LearnMoreBtn.styled";

const LearnMoreBtn = ({ openModal }) => {
  return (
    <>
      <LearnMore onClick={openModal}>Learn more</LearnMore>
    </>
  );
};

export default LearnMoreBtn;
