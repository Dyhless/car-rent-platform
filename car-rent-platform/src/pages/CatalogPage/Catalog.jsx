import { useGetAdvertsQuery } from "../../redux/adverts/advertsSlice";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const { data: adverts, error, isLoading } = useGetAdvertsQuery();

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {adverts.map((advert) => (
            <li key={advert.id}>
              <img src={advert.img} alt="Car" width={250} />
              <p>{advert.model}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Catalog;
