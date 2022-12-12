import { useState, useRef } from "react";
import axios from "axios";
import { ReactDOM } from "react";
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import PaypalCheckoutButton from "./PaypalCheckoutButton";
const UserCheckout = () => {
    let navigate = useNavigate();
   
    const { id } = useParams();
    const [Customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        id: "",
        payment_mode:""

    })
    const [error, Seterror] = useState([]);
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
    
    const product  = {
        name :nameUser,
        email:EmailUser,
        phone:phoneUser,
        address:addressUser,
        description:"Item 2",
        price: 75,
        method:"Pay-Pal",

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
    const loadUser = async () => {
        console.log("aa" + id);
        const result = await axios.get('http://localhost/php_login/edit.php?id=' + id);
        setCustomer(result.data);
        console.log(result);
    }
    return (
        <div>
            <div className='header'>
                <div >Xin chào : {nameUser} </div>
                <div><button><Link to='/Login' onClick={Logout}>Thoát ra!</Link></button></div>
            </div>
            <ul class="breadcrumb">
                <li><a href="#">Trang chu</a></li>
                <li><Link to={`/User/${nameUser}`}>Tai khoan</Link></li>
                <li><a href="#">Thông tin thanh toán</a></li>
            </ul>

            <div className='row-costum '>
                <div className='col-costum col-505' style={{ borderRight: "solid" }} >
                    <form style={{ border: "none" }} >

                        <div className="form-inner" >
                            <h4>Thông tin thanh toán </h4>

                            <div className="form-group">
                                <label htmlFor='name'>Họ tên khách hàng :</label>
                                <input type="name" name="111" placeholder={nameUser} onChange={e => handleChange(e)} value={nameUser} style={{ width: "200%" }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email Đăng nhập : </label>
                                <input type="email" name="111" placeholder={EmailUser} sonChange={e => handleChange(e)} value={EmailUser} style={{ width: "200%" }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Số điện thoại :</label>
                                <input type="phone" name="111" placeholder={phoneUser} onChange={e => handleChange(e)} value={phoneUser} style={{ width: "200%" }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ </label>
                                <input type="text" name="addr11ess" placeholder={addressUser} onChange={e => handleChange(e)} value={addressUser}style={{ width: "200%" }} />                            
                            </div>
                            <h4>Phương thức thanh toán </h4>
                            <div className="paypal" style={{ float: "left" }}>
                                <p className="checkout-title">Thanh toán bằng PayPal</p>
                                <div className="paypal-button-container" >
                                <PaypalCheckoutButton product={product}/>
                                </div>
                            </div>
                            
                        </div>
                    </form>

                </div>

            </div >


        </div>
    )
}
export default UserCheckout