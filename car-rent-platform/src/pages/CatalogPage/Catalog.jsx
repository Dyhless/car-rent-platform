import { useGetAdvertsQuery } from "../../redux/adverts/advertsSlice";
import Loader from "../../components/Loader/Loader";
import { Description } from "./Catalog.styled";

const Catalog = () => {
  const { data: adverts, error, isLoading } = useGetAdvertsQuery();

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {adverts ? (
            adverts.map((advert) => (
              <li key={advert.id}>
                <img src={advert.img} alt="Car" width={250} />
                <Description>{advert.model}</Description>
              </li>
            ))
          ) : (
            <p>No adverts available</p>
          )}
        </ul>
      )}
    </>
  );
};

export default Catalog;
