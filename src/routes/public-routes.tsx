import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "../pages/create-trip";
import { TripDetailsPage } from "../pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },

  {
    path: "/trips/:trip_id",
    element: <TripDetailsPage />,
  },
]);

export const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};
