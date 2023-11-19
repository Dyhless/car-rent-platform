import { pricePoints, sortedMakes } from "../../utils/serchFormPoints";
import Select from "react-select";
import {
  BtnSearch,
  EnterText,
  Form,
  LabelMilage1,
  LabelMilage2,
  SubForm,
  Title,
} from "./SearchForm.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/adverts/filterSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;
    const mileageFromInNumber = Number(mileageFrom.value);
    const mileageToInNumber = Number(mileageTo.value);

    if (
      !make.value &&
      !mileageFrom.value &&
      !mileageTo.value &&
      !rentalPrice.value
    ) {
      alert("Select any filter");
      return;
    }

    if (mileageFromInNumber < 0 || mileageToInNumber < 0) {
      alert("Select valid mileage");
      return;
    }

    if (mileageFromInNumber > mileageToInNumber && mileageToInNumber !== 0) {
      alert("Select mileage to more than mileage from");
      return;
    }

    const filters = {
      make: make.value,
      rentalPrice: Number(rentalPrice.value),
      mileageFrom: mileageFromInNumber,
      mileageTo: mileageToInNumber,
    };
    //  dispatch(clearCarsList());
    //  dispatch(fetchCars({ page: 1, limit: 12 }));
    dispatch(setFilter(filters));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SubForm>
        <label>
          <Title> Car brand </Title>
          <Select
            name="make"
            placeholder="Enter the text"
            options={sortedMakes}
          />
        </label>
        <label>
          <Title>Price / 1 hour </Title>
          <Select
            name="rentalPrice"
            placeholder="To $"
            options={pricePoints.map((price) => ({
              value: price,
              label: price === 0 ? "All" : `$${price}`,
            }))}
          />
        </label>
      </SubForm>
      <div>
        <Title> Car mileage / km</Title>
        <EnterText>
          <label>
            <LabelMilage1 type="number" name="mileageFrom" placeholder="From" />
          </label>
          <label>
            <LabelMilage2 type="number" name="mileageTo" placeholder="To" />
          </label>
        </EnterText>
      </div>
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};
