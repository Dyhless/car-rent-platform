import { LearnMore } from "./LearnMoreBtn.styled";

const LearnMoreBtn = ({ onClick, text, width }) => {
  return (
    <>
      <LearnMore type="button" onClick={onClick} width={width}>
        {text}
      </LearnMore>
    </>
  );
};

export default LearnMoreBtn;
