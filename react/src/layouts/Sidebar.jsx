import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faCircle, faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";
import userLogo from '../assets/images/user.png'
import BigLogo from '../assets/images/background.jpeg'

function Sidebar() {
    return (
        <aside className={'main-sidebar elevation-4 sidebar-dark-orange'} style={{backgroundColor : '#252525'}}>
            <Link to={'/'} className="p-0">
                <img src={BigLogo ? BigLogo : ''} alt="Logo"
                     className="brand-image elevation-3" style={{width: '100%'}}/>
            </Link>

            <div className={'sidebar'}>
                {/* profile */}
                <div className={'user-panel mt-3 pb-3 mb-3 d-flex'}>
                    <div className="image">
                        <img src={userLogo ? userLogo : ''} className="img-circle elevation-2" alt="user iamge"/>
                    </div>
                    <div className="info">
                        <Link to={'#'} className="d-block">user</Link>
                    </div>
                </div>
                {/*  sidebar menu  */}
                <div className={'mt-2'}>
                    <ul className={'nav nav-pills nav-sidebar flex-column nav-child-indent'} data-widget={'treeview'} role={'menu'}
                        data-accordion={'false'}>
                        <li className={'nav-item menu-open'}>
                            <Link to={'#'} className={'nav-link active'}>
                                <FontAwesomeIcon icon={faHandHoldingDollar} className={'nav-icon'}/>
                                <p>
                                    Incentive System
                                    <FontAwesomeIcon icon={faAngleLeft} className={'right'}/>
                                </p>
                            </Link>
                            <ul className={'nav nav-treeview'}>
                                <li className={'nav-item'}>
                                    <Link to={'/'} className={'nav-link active'}>
                                        <FontAwesomeIcon icon={faCircle} className={'nav-icon'}/>
                                        <p>Incentive QC</p>
                                    </Link>
                                </li>
                                <li className={'nav-item'}>
                                    <Link to={'/products/list'} className={'nav-link'}>
                                        <FontAwesomeIcon icon={faCircle} className={'nav-icon'}/>
                                        <p>ข้อมูลสินค้า QC</p>
                                    </Link>
                                </li>
                                <li className={'nav-item'}>
                                    <Link to={'/manage/qc_rate'} className={'nav-link'}>
                                        <FontAwesomeIcon icon={faCircle} className={'nav-icon'}/>
                                        <p>ข้อมูลระดับการ QC</p>
                                    </Link>
                                </li>
                                <li className={'nav-item'}>
                                    <Link to={'#'} className={'nav-link'}>
                                        <FontAwesomeIcon icon={faCircle} className={'nav-icon'}/>
                                        <p>ข้อมูลเกณฑ์คำนวณ</p>
                                    </Link>
                                </li>
                                <li className={'nav-item'}>
                                    <Link to={'#'} className={'nav-link'}>
                                        <FontAwesomeIcon icon={faCircle} className={'nav-icon'}/>
                                        <p>ข้อมูลผู้ใช้งาน</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
