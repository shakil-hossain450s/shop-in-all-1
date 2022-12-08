import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductScreen from "../Pages/ProductScreen/ProductScreen";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product/:id',
                element: <ProductScreen></ProductScreen>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])