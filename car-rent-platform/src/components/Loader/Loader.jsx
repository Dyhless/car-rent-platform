import { PuffLoader } from "react-spinners";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="var(--violet-color)" size={100} />
    </LoaderWrapper>
  );
};

export default Loader;
