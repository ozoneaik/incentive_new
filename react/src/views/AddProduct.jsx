import Content from "../layouts/Content.jsx";
import productImage from '../assets/images/productImage.png'
import {useState} from "react";

function AddProduct() {
    const [preview, setPreview] = useState(productImage);
    return (
        <Content>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row mb-3'}>
                                <div className={'col-12'}>
                                    <p className={'text-bold'}>รูปสินค้า</p>
                                </div>
                                <div className={'col-sm-12 col-md-6 col-lg-3'}>
                                    <img src={preview || ''} alt="" width={'100%'}/>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-md-6 col-sm-12 col-lg-3 form-group'}>
                                    <label htmlFor="">รหัสสินค้า *</label>
                                    <input type="text" className={'form-control'}/>
                                </div>
                                <div className={'col-md-6 col-sm-12 col-lg-3 form-group'}>
                                    <label htmlFor="">ชื่อสินค้า *</label>
                                    <input type="text" className={'form-control'}/>
                                </div>
                                <div className={'col-md-6 col-sm-12 col-lg-3 form-group'}>
                                    <label htmlFor="">ระดับความยาก *</label>
                                    <input type="text" className={'form-control'}/>
                                </div>
                                <div className={'col-md-6 col-sm-12 col-lg-3 form-group'}>
                                    <label htmlFor="">ระยะเวลามาตรฐาน (HH:MM:SS)</label>
                                    <input type="text" className={'form-control'}/>
                                </div>
                                <div className={'col-12 text-center'}>
                                    <button className={'btn btn-primary'}>
                                        บันทึก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default AddProduct;
