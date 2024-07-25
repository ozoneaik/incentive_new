import {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";

import {profileApi} from "../api/User.js";
import {alertError} from "../dialogs/alertError.jsx";

export default function DefaultLayout() {
    const {currentUser, userToken, setCurrentUser, setUserToken} = useStateContext();
    //เช็คว่าเข้าสู่ระบบหรือยัง ถ้ายังให้ ไปหน้า login
    if (!userToken) {
        return <Navigate to="login"/>;
    }
    //ดึงข้อมูล user
    useEffect(() => {
        profileApi((data, status) => {
            if (status === 200) {
                setCurrentUser(data)
            } else {
                alertError(data.message + status);
            }
        })
    }, []);
    return (
        <>
            <Outlet/>
        </>
    );
}
