import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { getFavorites } from "../../redux/adverts/Selectors";
import { removeFavorite } from "../../redux/adverts/favoritesSlice";
import { FavoritesList } from "./Favorites.styled";
import { NotFound } from "../../components/NotFound/NotFound";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(getFavorites);

  const handleRemoveFavorite = (advert) => {
    dispatch(removeFavorite(advert));
  };

  return (
    <>
      {favorites.length > 0 ? (
        <FavoritesList>
          {favorites.map((favorite) => (
            <AdvertItem
              key={favorite.id}
              advert={favorite}
              removeFromFavorites={() => handleRemoveFavorite(favorite)}
            />
          ))}
        </FavoritesList>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Favorites;
