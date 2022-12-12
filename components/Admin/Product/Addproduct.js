import React from "react";
import "./main.css"
import { useState } from "react";
import axios from "axios";
const Addproduct = () => {
    const [data, setData] = useState({
       idproduct:"",
        nameproduct: "",
        amountproduct: "",
        statusproduct: "",
        typeproduct: "",
        costproduct:"",
        imageproduct:"",
        describeproduct:"",

    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    } 
    const submitForm = async (e) => {
    
        let formData = new FormData();
        formData.append('idproduct', data.idproduct)
        formData.append('nameproduct', data.nameproduct)
        formData.append('amountproduct', data.amountproduct)
        formData.append('statusproduct', data.statusproduct)
        formData.append('typeproduct', data.typeproduct)
        formData.append('costproduct', data.costproduct)
        formData.append('imageproduct', data.imageproduct)
        formData.append('describeproduct', data.describeproduct)
        axios({
            method: 'post',
            url: 'http://localhost/php_login/Insertproduct.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response)
                alert('Đăng ký thành công!!');
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        

    }
    return (
        <div>
   

<main className="app-content">
    <div className="app-title">
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">Danh sách sản phẩm</li>
        <li className="breadcrumb-item"><a href="#">Thêm sản phẩm</a></li>
      </ul>
    </div>
    <div className="row">
    <div className="col-md-12">
    <div className="tile">
    <h3 className="tile-title">Tạo mới sản phẩm</h3>
    <div className="tile-body">
    <div className="row element-button">
            
            <div className="col-sm-2">
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#adddanhmuc"><i
                    className="fas fa-folder-plus"></i> Thêm danh mục</a>
            </div>
            <div className="col-sm-2">
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#addtinhtrang"><i
                    className="fas fa-folder-plus"></i> Thêm tình trạng</a>
            </div>
        </div>
        <form  onSubmit={e => submitForm(e)} className="row">
        <div className="form-inner" >
            <div className="form-group col-md-3">
                <label className="control-label">Mã sản phẩm </label>
                <input className="form-control" type="number"  name="idproduct" onChange={e => handleChange(e)} value={data.idproduct}/>
              </div>

              <div className="form-group col-md-3">
                <label className="control-label">Tên sản phẩm</label>

                <input className="form-control" type="text" name="nameproduct" onChange={e => handleChange(e)} value={data.nameproduct}/>
            </div>            

              <div className="form-group  col-md-3">
                <label className="control-label">Số lượng</label>
                <input className="form-control" type="number"  name="amountproduct" onChange={e => handleChange(e)} value={data.amountproduct}/>
              </div>
              

              <div className="form-group col-md-3 ">

                <label for="exampleSelect1" className="control-label">Tình trạng</label>
                <select className="form-control" id="exampleSelect1"  name="statusproduct" onChange={e => handleChange(e)} value={data.statusproduct}>
                  <option>-- Chọn tình trạng --</option>
                  <option>Còn hàng</option>
                  <option>Hết hàng</option>
                </select>
                  </div>

              <div className="form-group col-md-3">
                <label for="exampleSelect1" className="control-label">Danh mục</label>
                <select className="form-control" id="exampleSelect1" name="typeproduct" onChange={e => handleChange(e)} value={data.typeproduct}>
                  <option>-- Chọn danh mục --</option>
                  <option>Áo sơ mi</option>
                  <option>Áo khoác</option>
                  <option>Đầm</option>
                  <option>Âu phục</option>
                  <option>Áo len</option>
                </select>
              </div>


              <div className="form-group col-md-3">
                <label className="control-label">Giá bán</label>
                <input className="form-control" type="text" name="costproduct" onChange={e => handleChange(e)} value={data.costproduct}/>
              </div>
              
              <div className="form-group col-md-12">
                <label className="control-label">Ảnh sản phẩm</label>
                <div id="myfileupload">
                <input className="form-control" type="text" name="imageproduct" onChange={e => handleChange(e)} value={data.imageproduct}/>

                <div id="thumbbox">
                  <img height="450" width="400" alt="Thumb image" id="thumbimage" style={{display: "none"}} />
                  <a className="removeimg" href="javascript:"></a>
                </div>
                <div id="boxchoice">
                  <a href="javascript:" class="Choicefile"><i class="fas fa-cloud-upload-alt"></i> Chọn ảnh</a>
                  <p style={{clear: "both"}}></p>
                </div>
                <div class="form-group col-md-12">
                <label class="control-label" >Mô tả sản phẩm</label>
                <textarea class="form-control" name="describeproduct" id="mota" onChange={e => handleChange(e)} value={data.describeproduct}></textarea>
              </div>
              </div>
              </div>

            <input class="btn btn-save" type="submit" value="Lưu lại"/>
            <a class="btn btn-cancel" href="table-data-product.html">Hủy bỏ</a>
            </div>

            </form>


    </div>




    </div>





    </div>



    

    </div>
   
    </main>

</div>

    );
}

export default Addproduct;