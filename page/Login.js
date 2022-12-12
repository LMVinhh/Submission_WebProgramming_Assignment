import React from 'react'
//import Register from './Register';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import "./login_regis.css";
const Login = () => {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    let history = useNavigate();
    const [user, setUser] = useState({ email: '', password: '', name: '', phone: '', address: '' });
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('name', user.name)
        formData.append('phone', user.phone)
        formData.append('address', user.address


        )

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
                    history(`/User/:name`);

                }
                else {
                    alert("User is not Exist in DataBase!!!!");
                }
            })
    }
    return (
        <div className='Form-Login'>
            <form class="form_login_contact" onSubmit={submitForm}>
                <div className="form-inner">
                    <h2>Đăng nhập</h2>
                    <div className="form-group">
                        <label htmlFor='email'>Email Đăng nhập</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={user.email} onBlur={() => simpleValidator.current.showMessageFor('email')} />
                        {simpleValidator.current.message('email', user.email, 'email', { className: 'text-danger' })}

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" id="password" onChange={handleChange} value={user.password} onBlur={() => simpleValidator.current.showMessageFor('password')}/>
                        {simpleValidator.current.message('password', user.password, 'max:10|min3', { className: 'text-danger' })}


                    </div>
                    <div><button1><Link to='/Register'>Chưa có tài khoản, Đăng ký !</Link></button1></div>
                    <input type="submit" value="Đăng nhập" />
                </div>
            </form >
        </div >
    )
}

export default Login;