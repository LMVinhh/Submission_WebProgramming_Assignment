import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const Admin_edit = () => {
    const { id } = useParams();
    const [Customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        id: ""

    })
    useEffect(() => {
        loadUser();
    }, [])
    const handleChange = (e) => {
        setCustomer({ ...Customer, [e.target.name]: e.target.value });

    }
    const updateForm = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', Customer.name)
        formData.append('email', Customer.email)
        formData.append('phone', Customer.phone)
        formData.append('password', Customer.password)
        formData.append('address', Customer.address)

        console.log(formData);
        axios({
            method: 'post',
            url: 'http://localhost/php_login/insert.php/?id=' + id,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response)
                if (response.status === 200) {
                    alert("Contact update successfully.");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
    }
    const loadUser = async () => {
        console.log("aa" + id);
        const result = await axios.get('http://localhost/php_login/edit.php?id=' + id);
        setCustomer(result.data);
        console.log(result);
    }
    return (

        <div className='Form-Login'>
            <form onSubmit={e => updateForm(e)}>
                <div className="form-inner">
                    <h2>Chỉnh sửa thông tin khách hàng</h2>
                    <div className="form-group">
                        <label htmlFor='name'>Họ tên khách hàng:</label>
                        <input type="text" name="name" onChange={e => handleChange(e)} value={Customer.name} />
                    </div>

                    <div className="form-group">
                        <label htmlFor='email'>Email Đăng nhập</label>
                        <input type="email" name="email" onChange={e => handleChange(e)} value={Customer.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input type="text" name="phone" onChange={e => handleChange(e)} value={Customer.phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="text" name="password" onChange={e => handleChange(e)} value={Customer.password} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ </label>
                        <input type="text" name="address" onChange={e => handleChange(e)} value={Customer.address} />
                    </div>
                    <input type="submit" value="Cập nhật" />
                </div>
            </form >
        </div >
    )
}

export default Admin_edit