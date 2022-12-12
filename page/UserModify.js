import React, { useEffect, useState,useRef } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';

import axios from 'axios';
const UserModify = () => {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    let navigate = useNavigate();
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
    const [idUser, setidUser] = useState('');
    const [nameUser, setName] = useState('');
    const [EmailUser, setEmailUser] = useState('');
    const [phoneUser, setphoneUser] = useState('');
    const [passwordUser, setpasswordUser] = useState('');
    const [addressUser, setaddressUser] = useState('');

    useEffect(() => {
        var id = localStorage.getItem('id');
        setName(id);
        var name = localStorage.getItem('name');
        setName(name);
        var address = localStorage.getItem('address');
        setaddressUser(address);
        var phone = localStorage.getItem('phone');
        setphoneUser(phone);
        var email = localStorage.getItem('email');
        setEmailUser(email);
        var password = localStorage.getItem('password');
        setpasswordUser(password);
    },
        []
    )
    const handleChange = (e) => {
        setCustomer({ ...Customer, [e.target.name]: e.target.value });

    }

    const Logout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('address');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.clear();
        navigate(`/Login`);
    }

    const updateForm = async (e) => {
        const formValid = simpleValidator.current.allValid()
        if (!formValid) {
            console.log('form not valid...')
            simpleValidator.current.showMessages()
            forceUpdate(1)
          }
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
        axios({
            method: 'post',
            url: 'http://localhost/php_login/authen.php/?name=',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((result) => {
                //handle success
                if (result.data.Status === '200') {
                    window.localStorage.setItem('id', result.data.id);
                    window.localStorage.setItem('name', result.data.name);
                    window.localStorage.setItem('email', result.data.email);
                    window.localStorage.setItem('phone', result.data.phone);
                    window.localStorage.setItem('password', result.data.password);
                    window.localStorage.setItem('address', result.data.address);

                }
                else {
                    alert("User is not Exist in DataBase!!!!");
                }
            })
    }
    const loadUser = async () => {
        console.log("aa" + id);
        const result = await axios.get('http://localhost/php_login/edit.php?id=' + id);
        setCustomer(result.data);
        console.log(result);
    }
    return (
        <div>

           
                <div >Xin chào : {nameUser} </div>
               
            

            <ul class="breadcrumb">
                <li><a href="#">Trang chu</a></li>
                <li><a href="#">Tai khoan</a></li>
                <li><a href="#">Cập nhật thông tin cá nhân</a></li>
            </ul>
            <div className='row-costum '>
                <div className='col-costum col-30' style={{ borderRight: "1px solid" }}>
                    <h4>Thông tin khách hàng</h4>
                    <li><a ><Link to={`/User/${nameUser}`} style={{ fontSize: "15px", textDecoration: 'none' }}>Xem thông tin cá nhân</Link></a></li>
                    <li><a style={{ color: "red" }}>Cập nhật thông tin cá nhân</a></li>
                    <li><a><Link to={`/CheckOrder/${EmailUser}` } style={{ fontSize: "15px", textDecoration: 'none' }}>Xem lịch sử đơn hàng</Link></a></li>

                </div>
            </div >
            <div className='row-costum '>
                <div className='col-costum col-50' >
                    <h4>Cập nhật thông tin tài khoản của bạn</h4>
                    <form onSubmit={e => updateForm(e)} border >
                        <div className="form-inner" >
                            <div className="form-group">
                                <label htmlFor='name'>Họ tên khách hàng :</label>
                                <input type="name" name="" placeholder={nameUser} onChange={e => handleChange(e)} value={Customer.name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email Đăng nhập : </label>
                                <input type="email" name="" placeholder={EmailUser} sonChange={e => handleChange(e)} value={Customer.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Số điện thoại :</label>
                                <input type="phone" name="phone" placeholder={phoneUser} onChange={e => handleChange(e)} value={Customer.phone} onBlur={() => simpleValidator.current.showMessageFor('Phone')}/>
                                 {simpleValidator.current.message('Phone', Customer.phone, 'numeric|min:10', { className: 'text-danger' })}

                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Mật khẩu :</label>
                                <input type="password" name="password" onChange={e => handleChange(e)} value={Customer.password} onBlur={() => simpleValidator.current.showMessageFor('password')}/>
                        {simpleValidator.current.message('password', Customer.password, 'min:3', { className: 'text-danger' })}
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ </label>
                                <input type="text" name="address" onChange={e => handleChange(e)} value={Customer.address} onBlur={() => simpleValidator.current.showMessageFor('address')}/>
                             {simpleValidator.current.message('address', Customer.address, 'required|min:10', { className: 'text-danger' })}

                            </div>
                            <input type="submit" value="Cập nhật tài khoản" ></input>

                        </div>
                    </form>

                </div>

            </div >
            <div className='out'><button><Link to='/Login' onClick={Logout}>Thoát ra!</Link></button></div>
        </div >
    )
}

export default UserModify;