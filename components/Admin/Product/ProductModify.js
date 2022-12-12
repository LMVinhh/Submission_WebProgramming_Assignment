import React, { useEffect, useState } from 'react'
import "./main.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const ProductModify=() => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        nameproduct: "",
        costproduct: "",
        statusproduct: "",
        amountproduct: "",
        typeproduct: "",
        id: "",
        idproduct:"",
        describeproduct:"",
        imageproduct:""

    })
    useEffect(() => {
        loadProduct();
    }, [])

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });

    }
    const updateForm = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('idproduct', product.idproduct)
        formData.append('nameproduct', product.nameproduct)
        formData.append('amountproduct', product.amountproduct)
        formData.append('statusproduct', product.statusproduct)
        formData.append('typeproduct', product.typeproduct)
        formData.append('costproduct', product.costproduct)
        formData.append('imageproduct', product.imageproduct)
        formData.append('describeproduct', product.describeproduct)

        console.log(formData);
        axios({
            method: 'post',
            url: 'http://localhost/php_login/insertproduct.php/?id=' + id,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response)
                if (response.status === 200) {
                    alert("Product update successfully.");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
    }
    const loadProduct = async () => {
        const result = await axios.get('http://localhost/php_login/editproduct.php?id=' + id);
        setProduct(result.data);
        console.log(result);
    }
  return (
    <div>
        

    <div className="modal-fade" id="ModalUP" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static"
data-keyboard="false">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">

    <div className="modal-body">
      <div className="row">
        <div className="form-group  col-md-12">
          <span className="thong-tin-thanh-toan">
            <h5>Chỉnh sửa thông tin sản phẩm cơ bản</h5>
          </span>
        </div>
      </div>
      <form onSubmit={e => updateForm(e)}>
        <div className='form-inner'>
      <div className="row" >
        <div className="form-group col-md-6">
            <label className="control-label">Mã sản phẩm </label>
            <input className="form-control" type="number" name='idproduct'  onChange={e => handleChange(e)} value={product.idproduct}/>
          </div>
        <div className="form-group col-md-6">
            <label className="control-label">Tên sản phẩm</label>
          <input className="form-control" type="text" name='nameproduct' onChange={e => handleChange(e)} value={product.nameproduct} />
        </div>
        <div className="form-group  col-md-6">
            <label className="control-label">Số lượng</label>
          <input className="form-control" type="number" name='amountproduct' onChange={e => handleChange(e)} value={product.amountproduct} />
        </div>
        <div className="form-group col-md-6 ">
            <label for="exampleSelect1" className="control-label">Tình trạng sản phẩm</label>
            <select className="form-control" id="exampleSelect1" name='statusproduct' onChange={e => handleChange(e)} value={product.statusproduct} >
              <option>Còn hàng</option>
              <option>Hết hàng</option>
              <option>Đang nhập hàng</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="control-label">Giá bán</label>
            <input className="form-control" type="text" name='costproduct'  onChange={e => handleChange(e)} value={product.costproduct} />
          </div>
          <div className="form-group col-md-6">
            <label for="exampleSelect1" className="control-label">Danh mục</label>
            <select className="form-control" id="exampleSelect1" name='typeproduct' onChange={e => handleChange(e)} value={product.typeproduct} >
              <option>Áo sơ mi</option>
              <option>Áo khoác</option>
              <option>Đầm</option>
              <option>Âu phục</option>
              <option>Áo len</option>

            </select>
          </div>
          <input type="submit" value="Cập nhật" />
          </div>
      </div>
      </form>
    </div>
   
  </div>
</div>
</div>














        
    </div>
  )
}

export default ProductModify