import { LearnMore } from "./LearnMoreBtn.styled";

const LearnMoreBtn = ({ onClick, text }) => {
  return (
    <>
      <LearnMore type="button" onClick={onClick}>
        {text}
      </LearnMore>
    </>
  );
};

export default LearnMoreBtn;
