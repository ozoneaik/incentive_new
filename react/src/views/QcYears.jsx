import Content from "../layouts/Content.jsx";
import {Link} from "react-router-dom";

export default function QcYears() {
    return (
        <Content>
            <div className={'row'}>

                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body text-center'}>
                            <div className={'text-center mb-3 d-flex justify-content-center'}>
                                <select name="" id="" className={'form-control mr-3'} style={{minWidth: 100,maxWidth: 200}}>
                                    <option value="">2012</option>
                                </select>
                                <button className={'btn btn-primary'}>+ เพิ่มปี</button>
                            </div>
                            <div className={'row'}>

                                <div className={'col-12'}>
                                    <div className={'table-responsive text-center text-nowrap'}>
                                        <table className={'table table-bordered table-striped table-hover'}>
                                            <thead className={'bg-primary'}>
                                            <tr>
                                                <th>เดือน</th>
                                                <th>สถานะ</th>
                                                <th>จำนวนพนักงาน</th>
                                                <th>จำนวนวันทำงาน</th>
                                                <th>จำนวนงาน</th>
                                                <th>วันที่คำนวณ</th>
                                                <th>วันที่คอนเฟิร์ม</th>
                                                <th>วันที่ยืนยันการจ่าย</th>
                                                <th>#</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>เดือน</td>
                                                <td>สถานะ</td>
                                                <td>จำนวนพนักงาน</td>
                                                <td>จำนวนวันทำงาน</td>
                                                <td>จำนวนงาน</td>
                                                <td>วันที่คำนวณ</td>
                                                <td>วันที่คอนเฟิร์ม</td>
                                                <td>วันที่ยืนยันการจ่าย</td>
                                                <td>
                                                    <Link to={'/qc_detail'}>
                                                        detail
                                                    </Link>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>

    );
}
