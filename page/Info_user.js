//import Register from './Register';
import { Link,NavLink, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState, useNavigate } from "react";
import "./vinh_custome.css";
const Info = () => {

    const [Customer, setCustomer] = useState([]);
    useEffect(() => {
        loadUser();
    },
        []
    )


    const loadUser = async () => {
        const result = await axios.get('http://localhost/php_login/list.php');
        setCustomer(result.data.records);
        console.log(result);
    }
    function deleteContact(id, event) { //alert(id)
        event.preventDefault();
        if (window.confirm("Are you sure want to delete?")) {
            axios({
                method: 'post',
                url: 'http://localhost/php_login/Insert.php/?delete=' + id
            })
                .then(function (response) {
                    //handle success
                    console.log(response)
                    if (response.status === 200) {
                        alert("Website deleted successfully");
                    }
                })
                .catch(function (response) {
                    //handle error
                    console.log(response)
                });
        }
    }

    return (
        <div className="info_background">
            <aside class="app-sidebar">
        <div class="app-sidebar__user">
          <img
            class="app-sidebar__user-avatar"
            src="https://img.thuthuatphanmem.vn/uploads/2018/09/26/hinh-anh-qua-noel-dep_051049278.jpg"
            width="50px"
            alt="User Image"
          />
          <div>
            <p class="app-sidebar__user-name">
              <b>Khánh Linh</b>
            </p>
            <p class="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
          </div>
        </div>
        <hr />
        <ul class="app-menu">
          <li>
            <NavLink to="/dashboard">
              <a class="app-menu__item" href="">
                <i class="app-menu__icon bx bx-tachometer"></i>
                <span class="app-menu__label">Bảng điều khiển</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/info">
              <a class="app-menu__item active" href="">
                <i class="app-menu__icon bx bx-user-voice"></i>
                <span class="app-menu__label">Quản lý khách hàng</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listproduct">
              <a class="app-menu__item" href="table-data-product.html">
                <i class="app-menu__icon bx bx-purchase-tag-alt"></i>
                <span class="app-menu__label">Quản lý sản phẩm</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listReceipt">
              <a class="app-menu__item" href="table-data-oder.html">
                <i class="app-menu__icon bx bx-dollar"></i>
                <span class="app-menu__label">Quản lý đơn hàng</span>
              </a>
            </NavLink>
          </li>

          
        </ul>
      </aside>
            <div >
                <div className="col-md-12 text-center">
                    <h1>Quản lý thông tin liên hệ khách hàng </h1>
                </div>
            </div>
            <table class="table table-striped">

                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        {/* <th scope="col">Mật khẩu</th> */}
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>

                {Customer.map((Customer, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{Customer.name}</td>
                            <td>{Customer.email}</td>
                            <td>{Customer.phone}</td>
                            {/* <td>{Customer.password}</td> */}
                            <td>{Customer.address}</td>
                            <td>
                                <Link className="btn btn-success" to={`/editcus/${Customer.id}`}>
                                    Cập nhật
                                </Link>

                                <Link to="#" onClick={deleteContact.bind(this, Customer.id)} className="btn btn-danger btn-xs" style={{ margin: "5px" }}>Xóa</Link>
                            </td>
                        </tr>
                    </tbody>))}

            </table>

        </div >
    );
}

export default Info;
