import { createBrowserRouter,  } from "react-router-dom";
import Login from "../Pages/Login";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Login></Login>,
      },
    ]
  },
  
]);

export default router;