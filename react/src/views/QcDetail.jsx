import Content from "../layouts/Content.jsx";

export default function QcDetail() {
    return (
        <Content>
            <div className={'row'}>
                <div className={'col-12 d-flex flex-row-reverse mb-3'}>
                    <button className={'btn btn-success'}>พิมพ์</button>
                    <button className={'btn btn-info mr-2'}>ยืนยันการจ่าย</button>
                    <button className={'btn btn-primary mr-2'}>แก้ไข</button>
                    <button className={'btn btn-warning mr-2'}>คำนวณ</button>
                </div>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-12 d-flex justify-content-between'}>
                                    <div>
                                        <p className={'text-bold'} style={{fontSize: 18}}>ปริมาณการ QC สินค้า ประจำเดือน 3/2024</p>
                                        <p>กำหนดจ่ายเดือน 4/2024</p>
                                        <p>จำนวนวันทำงาน 26 วัน</p>
                                    </div>
                                    <div>เรียกข้อมูล ณ {new Date().toDateString()}</div>
                                </div>
                                <div className={'col-12'}>
                                    <div className={'table-responsive text-center text-nowrap'}>
                                        <table className={'table table-bordered .table-striped table-hover'}>
                                            <thead className={'bg-primary'}>
                                            <tr>
                                                <th rowSpan={2}>สถานะการจ่าย</th>
                                                <th rowSpan={2}>#</th>
                                                <th rowSpan={2}>รหัสพนักงาน</th>
                                                <th rowSpan={2}>ชื่อพนักงาน</th>
                                                <th rowSpan={2}>ปริมาณรวม</th>
                                                <th rowSpan={2}>H:M/เดือน</th>
                                                <th rowSpan={2}>H:M/วัน</th>
                                                <th rowSpan={2}>เกรด</th>
                                                <th colSpan={5}>ปริมาณ ( Qtys & Rate )</th>
                                                <th rowSpan={2}>ยอดรับบุคคล</th>
                                                <th rowSpan={2}>ยอดรับทีม</th>
                                                <th rowSpan={2}>ยอดรับสุทธิ</th>
                                            </tr>
                                            <tr>
                                                <th>Very Easy</th>
                                                <th>Easy</th>
                                                <th>Middle</th>
                                                <th>Hard</th>
                                                <th>Very Hard</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>test</td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={'col-12 text-center mt-3'}>
                                    <button className={'btn btn-primary w-25'}>บันทึก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>

    );
}
