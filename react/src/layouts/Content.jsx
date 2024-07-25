import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router-dom";

function Content({children}) {
    return (
        <div className={'wrapper'}>
            <Navbar/>
            <Sidebar/>
            <div className={'content-wrapper'}>
                <div className={'content-header'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <ol className={'breadcrumb float-sm-left'}>
                                    <li className={'breadcrumb-item'}>
                                        <Link to={'#'}>
                                            QC สินค้าประจำปี
                                        </Link>
                                    </li>
                                    <li className={'breadcrumb-item'}>รายละเอียด QC ประจำเดือน 3/2024</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={'content'}>
                    <div className={'container-fluid'}>
                        {children}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Content;
