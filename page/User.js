import React, { useEffect } from 'react'
//import Register from './Register';
import { Link, useFetcher, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const User = () => {
    let navigate = useNavigate();

    const [Customer, setCustomer] = useState([]
    )
    useEffect(() => {
        loadUser();
    },
        []
    )
    const loadUser = async () => {
        const result = await axios.get('http://localhost/php_login/listsub.php');
        setCustomer(result.data.records);
        console.log(result);
    }
    const [idUser, setidUser] = useState('');
    const [nameUser, setName] = useState('');
    const [EmailUser, setEmailUser] = useState('');
    const [phoneUser, setphoneUser] = useState('');
    const [passwordUser, setpasswordUser] = useState('');
    const [addressUser, setaddressUser] = useState('');

    useEffect(() => {
        var id = localStorage.getItem('id');
        setidUser(id);
        var name = localStorage.getItem('name');
        setName(name);
        var address = localStorage.getItem('address');
        setaddressUser(address);
        var phone = localStorage.getItem('phone');
        setphoneUser(phone);
        var email = localStorage.getItem('email');
        setEmailUser(email);
    },
        []
    )
    const Logout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('address');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
        localStorage.clear();
        navigate(`/Login`);
    }
    return (
        <div >

                <div >Xin chào : {nameUser} </div>
                
          
            <ul class="breadcrumb">
                <li><a href="#">Trang chu</a></li>
                <li><a href="#">Tai khoan</a></li>
                <li><a href="#">thong tin ca nhan</a></li>
            </ul>

            <div className='Form-User'>

                <div className='row-costum '>

                    <div className='col-costum col-30' style={{ borderRight: "1px solid" }}>
                        <h4>Thông tin khách hàng</h4>
                        <li><a style={{ color: "red" }}>Xem thông tin cá nhân</a></li>
                        <li><a >< Link to={`/Useredit/${idUser}`} style={{ fontSize: "15px", textDecoration: 'none' }}>Cập nhật thông tin cá nhân </Link></a></li>
                        <li><a><Link to={`/CheckOrder/${EmailUser}` }style={{ fontSize: "15px", textDecoration: 'none' }}>Xem lịch sử đơn hàng</Link></a></li>
                    </div>
                    <div className='col-costum col-50'>
                        <h4>Thông tin tài khoản của bạn</h4>
                        <label >Họ và tên khách hàng : <a> {nameUser}</a> </label>
                        <label >Địa chỉ : <a> {addressUser}</a> </label>
                        <label >Số điện thoại : <a> {phoneUser}</a> </label>
                        <label >E-mail : <a> {EmailUser}</a> </label>

                    </div>
                </div >
            </div >
            <div className='out'><button><Link to='/Login' onClick={Logout}>Thoát ra!</Link></button></div>
        </div>
    )
}

export default User;