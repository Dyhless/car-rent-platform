import { PuffLoader } from "react-spinners";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="#3470FF" size={50} />
    </LoaderWrapper>
  );
};

export default Loader;
