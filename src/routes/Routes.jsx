import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage/Homepage";
import Error from "../pages/error/Error";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout ,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/books',
        Component: Books
      },
      {
        path: '/bookDetails/:bookId',
        Component: BookDetails,
       
      }
    ],
    errorElement: <Error />
  }
 
]);