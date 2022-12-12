import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';
import "./login_regis.css";
const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",

    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    } 

    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();

    const handleSave = () => {
        const formValid = simpleValidator.current.allValid()
        if (!formValid) {
            console.log('form not valid...')
            simpleValidator.current.showMessages()
            forceUpdate(1)
          }
      }
    const submitForm = async (e) => {
        

        let formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('password', data.password)
        formData.append('address', data.address)
        axios({
            method: 'post',
            url: 'http://localhost/php_login/Insert.php',
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
            if( this.validator.allValid() ){
                alert('Form Hợp lệ');
              } else {
                this.validator.showMessages();
                this.forceUpdate();
              }

    }
  
    return (

        <div className='Form-Login'>
            <form className="form_login_contact" onSubmit={e => submitForm(e)}>
                <div className="form-inner">
                    <h2>Đăng ký</h2>
                    <div className="form-group">
                        <label htmlFor='name'>Họ tên khách hàng:</label>
                        <input type="text" name="name" onChange={e => handleChange(e)} value={data.name} onBlur={() => simpleValidator.current.showMessageFor('Name')} />
                        {simpleValidator.current.message('Name', data.name, 'alpha_space', { className: 'text-danger' })}

                    </div>

                    <div className="form-group">
                        <label htmlFor='email'>Email Đăng nhập</label>
                        <input type="email" name="email" id='email' onChange={e => handleChange(e)} value={data.email} onBlur={() => simpleValidator.current.showMessageFor('email')} />
                        {simpleValidator.current.message('email', data.email, 'email', { className: 'text-danger' })}


                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input type="number" name="phone" onChange={e => handleChange(e)} value={data.phone} onBlur={() => simpleValidator.current.showMessageFor('Phone')} />
                        {simpleValidator.current.message('Phone', data.phone, 'numeric|min:10', { className: 'text-danger' })}

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="text" name="password" onChange={e => handleChange(e)} value={data.password} onBlur={() => simpleValidator.current.showMessageFor('password')}/>
                        {simpleValidator.current.message('password', data.password, 'min:3', { className: 'text-danger' })}

                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ </label>
                        <input type="text" name="address" onChange={e => handleChange(e)} value={data.address} onBlur={() => simpleValidator.current.showMessageFor('address')}/>
                        {simpleValidator.current.message('address', data.address, 'required|min:10', { className: 'text-danger' })}

                    </div>
                    <div><Link to='/Login'>Quay lại đăng nhập !</Link></div>
                    <input type="submit" value="Đăng ký" onClick={handleSave}/>
                </div>
            </form >
        </div >
    )
}

export default Register;