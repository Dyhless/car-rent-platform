import { LoadMore } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick, text }) => {
  return (
    <>
      <LoadMore type="button" onClick={onClick}>
        {text}
      </LoadMore>
    </>
  );
};

export default LoadMoreBtn;
