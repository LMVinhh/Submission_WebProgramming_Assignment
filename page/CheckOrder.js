import React from "react";
import { useState ,useEffect} from "react";
import { Link ,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import "./vinh_custome.css";
const CheckOrder = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const { email } = useParams();

    const [Customer, setCustomer] = useState([]);
    useEffect(() => {
        loadUser();
        loadOrder();
    },
        []
    )
    const [order, setOrder] = useState([]);

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
        localStorage.removeItem('password');
        localStorage.clear();
        navigate(`/Login`);
    }
    const loadUser = async () => {
        const result = await axios.get('http://localhost/php_login/edit.php?id=' + id);
        setCustomer(result.data);
        console.log(result);
    }
    const loadOrder = async () => {
        console.log("aa" + email);
        const result = await axios.get('http://localhost/php_login/orderuser.php?email='+email);
        setOrder(result.data.records);
        console.log(result);
    }
    return(
        
        <div className="check_order">
        
                <div >Xin chào : {nameUser} </div>
                
           
            <ul class="breadcrumb">
                <li><a href="#">Trang chu</a></li>
                <li><a href="#">Tai khoan</a></li>
                <li><a href="#">thong tin ca nhan</a></li>
            </ul>
            <div className='row-costum '>
                <div className='col-costum col-30' style={{ borderRight: "1px solid" }}>
                    <h4>Thông tin khách hàng</h4>
                    <li><a ><Link to={`/User/${nameUser}`} style={{ fontSize: "15px", textDecoration: 'none' }}>Xem thông tin cá nhân</Link></a></li>
                    <li><a> <Link to={`/Useredit/${idUser}`} style={{ fontSize: "15px", textDecoration: 'none' }}>Cập nhật thông tin cá nhân</Link></a></li>
                    <li><a><Link to='#' style={{ fontSize: "15px", textDecoration: 'none' ,color:"red"}}>Xem lịch sử đơn hàng</Link></a></li>

                </div>
            <div className="row-costum">
            <div className='col-costum col-50' style={{ borderRight: "1px solid" }}>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Phương thức</th>
                        <th scope="col">Ngày đặt</th>
                    </tr>
                </thead>
                {order.map((order,index) => (
                <tbody>
                        <tr>
                        <th scope="row">{index + 1}</th>

                            <td>{order.product}</td>
                            <td>{order.cost}</td>
                            <td>{order.method}</td>
                            <td>{order.date}</td>
                        </tr>
                </tbody>
                ))} 
                </table>
                </div>    

                </div>    

            </div >
            <div className="thanhtoan"><button><Link to='/thanhtoan'>Thanh Toán</Link></button></div>
            <div className="out"><button><Link to='/Login' onClick={Logout}>Thoát ra!</Link></button></div>
        </div>
        
    )
}
export default CheckOrder