import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import QcYears from "./views/QcYears.jsx";
import SignIn from "./views/SignIn.jsx";
import SignUp from "./views/SignUp.jsx";
import QcDetail from "./views/QcDetail.jsx";
import ProductList from "./views/ProductList.jsx";
import AddProduct from "./views/AddProduct.jsx";
import EditProduct from "./views/EditProduct.jsx";
import ManageQcRate from "./views/ManageQcRate.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {path: '/qc_year', element: <Navigate to="/"/>},
            {path: "/", element: <QcYears/>,},
            {path: "/qc_detail", element: <QcDetail/>,},
            {
                path: '/products', children: [
                    {path: 'list', element: <ProductList/>},
                    {path: 'add', element: <AddProduct/>},
                    {path: 'edit', element: <EditProduct/>},
                ]
            },
            {
                path: "/manage", children: [
                    {path: 'qc_rate', element: <ManageQcRate/>},
                ]
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/login",
                element: <SignIn/>,
            },
            {
                path: "/signup",
                element: <SignUp/>,
            },
        ],
    },
]);

export default router;
