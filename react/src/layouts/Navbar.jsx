import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faMagnifyingGlass, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {alertsQuestions} from "../dialogs/alertQuestion.jsx";
import {signOutApi} from "../api/SignInSignUp.js";
import {alertSuccess} from "../dialogs/alertSuccess.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";

function Navbar() {
    const {currentUser, userToken, setCurrentUser, setUserToken} = useStateContext();
    // ฟังก์ชั่นการ ออกจากระบบ
    const logout = (ev) => {
        ev.preventDefault();
        alertsQuestions('ออกจากระบบ', 'คุณแน่ใจหรือไม่', (confirm) => {
            if (confirm) {
                signOutApi((data, status) => {
                    if (status === 200) {
                        setCurrentUser({});
                        setUserToken(null);
                        alertSuccess()
                    } else {
                        alert(data.message + status);
                    }
                });
            }
        })
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link text-bold text-dark">Pumpkin Corporation Company Limited | Bangkok</a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button onClick={(ev) => logout(ev)} className="btn btn-danger btn-sm" data-widget="navbar-search">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
