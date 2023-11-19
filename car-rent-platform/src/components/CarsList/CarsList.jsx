import AdvertItem from "../AdvertItem/AdvertItem";

import { List } from "./CarsList.styled";

export const CarsList = ({ adverts }) => {
  return (
    <List>
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} car={advert} />
      ))}
    </List>
  );
};
