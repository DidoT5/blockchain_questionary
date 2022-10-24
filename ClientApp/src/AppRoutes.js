import { SignUp } from "./components/SignUp";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Questionary } from "./components/Questionary"



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
    }, {
      path: '/questionary',
      element: <Questionary/>
    }
];



export default AppRoutes;