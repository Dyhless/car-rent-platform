**README.md**

# Car Rental Application

This is a React application for a car rental company based in Ukraine. The application consists of three pages:

1. **Home Page:**

   - General description of the services provided by the company.
   - Styling and design based on personal preferences.

2. **Catalog Page:**

   - Displays a catalog of cars with various configurations.
   - Users can filter cars by brand, hourly rental price, and mileage.
   - Pagination: Initially renders 12 advertisements, and the rest load on the "Load more" button click.

3. **Favorites Page:**
   - Shows advertisements that the user has added to favorites.
   - Users can add/remove advertisements to/from favorites by clicking the heart icon.

## Technical Details

- Implemented a card for renting a car according to the provided layout.
- The catalog page initially renders 12 advertisements, and the rest can be loaded by clicking the "Load more" button.
- The heart icon on the advertisement card allows users to add or remove the advertisement from their favorites. The color of the button changes accordingly.
- User interactions persist even after refreshing the page.
- Clicking on the "Learn more" button opens a modal window with detailed information about the car and rental conditions.
- The modal window can be closed by clicking the close button, on the backdrop, or by pressing the "Esc" key.

## Backend (Mockapi)

- Created a personal backend for development using the UI service [Mockapi](https://mockapi.io/).
- Created an "adverts" resource with fields: `id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage`.
- Used the [adverts.json](https://drive.google.com/file/d/1sDtZQX4awbRiqa5mSagngqKBZeMMRUMO/view) file to populate the collection.

## Additional Features

- Dropdown for filtering cars by brand (makes.json).
- Dropdown for filtering cars by hourly rental prices (increments of $10).
- Input group for specifying the mileage range for searching advertisements.
- Implemented routing using React Router with the following routes:
  - `/`: Home page with a general description of the company's services.
  - `/catalog`: Catalog page with a catalog of cars.
  - `/favorites`: Favorites page with advertisements added by the user.

## How to Run

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application: `npm start`.

## Criteria for Completion

- Fixed layout in pixels, semantic, and valid HTML.
- Redux is used for state management.
- Axios library is used for API requests.
- Pagination is implemented on the backend.
- No console errors.
- Interactive features work according to the technical task.
- Code is formatted and does not contain unused code.
- The repository contains a well-described README.md.
- The project is deployed on GitHub Pages or Netlify.com.
