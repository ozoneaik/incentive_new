import Content from "../layouts/Content.jsx";

function ManageQcRate() {
    return (
        <Content>
            <div className={'row'}>
                <div className={'col-sm-12 col-md-12 col-lg-6'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <div className={'table-responsive'}>
                                        <table className={'table table-bordered table-hover'}>
                                            <thead>
                                            <tr>
                                                <th>เกรด</th>
                                                <th>เวลา ( Avg./วัน )</th>
                                                <th>ดั้งเดิม</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>A+</td>
                                                <td>
                                                    <input type="time" className={'form-control'}/>
                                                </td>
                                                <td>09:00:00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={'col-12 d-flex flex-row-reverse'}>
                                    <button className={'btn btn-primary'}>บันทึก / อัพเดท</button>
                                    <button className={'btn btn-secondary mr-3'}>ยกเลิก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default ManageQcRate;
