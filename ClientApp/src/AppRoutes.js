import { SignUp } from "./components/SignUp";
import { Register } from "./components/Register";
import { Home } from "./components/Home";



const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/register',
    element: <Register/>
  }
];



export default AppRoutes;