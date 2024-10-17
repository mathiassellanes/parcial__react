import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "./Home";
import AddPet from "./AddPet";


export const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/pet/:id',
    element: <AddPet />
  },
  {
    path: '/pet',
    element: <AddPet />
  }
]);
