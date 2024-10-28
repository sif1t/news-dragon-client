import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";
import News from "../pages/News/News/News";
import Terms from "../pages/shared/Terms/Terms";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "terms",
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-news-server-4098d9t1h-sifats-projects-3618f6b0.vercel.app/categories/${params.id}`)
      },
    ]
  },

  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-news-server-4098d9t1h-sifats-projects-3618f6b0.vercel.app/news/${params.id}`)
      }
    ]
  }

]);

export default router; 