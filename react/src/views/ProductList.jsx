import Content from "../layouts/Content.jsx";
import {Link} from "react-router-dom";

function ProductList(props) {
    return (
        <Content>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-12 d-flex flex-row-reverse mb-3'}>
                                    <Link to={'/products/add'} className={'btn btn-primary'}>
                                       + เพิ่มสินค้า
                                    </Link>
                                </div>
                                <div className={'col-12'}>
                                    <div className={'table-responsive'}>
                                        <table className={'table table-striped table-bordered table-hover'}>
                                            <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>สถานะ</th>
                                                <th>รหัสสินค้า</th>
                                                <th>ชื่อสินค้า</th>
                                                <th>หน่วย</th>
                                                <th>เวลา QC มาตรฐาน</th>
                                                <th>ระดับ QC</th>
                                                <th>สถานะ QC</th>
                                                <th>#</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>No</td>
                                                <td>สถานะ</td>
                                                <td>รหัสสินค้า</td>
                                                <td>ชื่อสินค้า</td>
                                                <td>หน่วย</td>
                                                <td>เวลา QC มาตรฐาน</td>
                                                <td>ระดับ QC</td>
                                                <td>สถานะ QC</td>
                                                <td>
                                                    <Link to={'/products/edit'}>
                                                        click
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

export default ProductList;
