import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../App.css";
/* eslint-disable no-restricted-globals */
import "./Product.css";
import axios from "axios";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";


function Product() {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        loadUser();
    },
        []
    )

    const loadUser = async () => {
        const result = await axios.get('http://localhost/php_login/listproduct.php');
        setProduct(result.data.records);
        console.log(result);
    }
    function deleteContact(id, event) { //alert(id)
        event.preventDefault();
        if (window.confirm("Are you sure want to delete?")) {
            axios({
                method: 'post',
                url: 'http://localhost/php_login/Insertproduct.php/?delete=' + id
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
    <body onload="time()" class="app sidebar-mini rtl">
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
            <NavLink to="/dashboard/customer">
              <a class="app-menu__item" href="#">
                <i class="app-menu__icon bx bx-user-voice"></i>
                <span class="app-menu__label">Quản lý khách hàng</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listproduct">
              <a class="app-menu__item active" href="table-data-product.html">
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
      <main class="app-content">
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item active">
              <a href="#">
                <b>Danh sách sản phẩm</b>
              </a>
            </li>
          </ul>
          <div id="clock"></div>
        </div>
        <div class="row">
          <div class="col-md-12"></div>
          <div class="tile">
            <div class="tile-body">
              <div class="row element-button">
                <div class="col-sm-2">
                  <NavLink to="/insertproduct">
                  <a
                    class="btn btn-add btn-sm"
                    href=""
                    title="Thêm"
                  >
                    <i class="fas fa-plus"></i> Thêm sản phẩm mới
                  </a>
                  </NavLink>
                </div>
                <div class="col-sm-2">
                  <a
                    class="btn btn-delete btn-sm print-file"
                    type="button"
                    title="In"
                    onclick="myApp.printTable()"
                  >
                    <i class="fas fa-print"></i> In dữ liệu
                  </a>
                </div>
                <div class="col-sm-2">
                  <a
                    class="btn btn-delete btn-sm"
                    type="button"
                    title="Xóa"
                    onclick="myFunction(this)"
                  >
                    <i class="fas fa-trash-alt"></i> Xóa tất cả
                  </a>
                </div>
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th width="10">
                        <input type="checkbox" id="all" />
                      </th>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Ảnh</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tình trạng</th>
                      <th scope="col">Giá tiền</th>
                      <th scope="col">Danh mục</th>
                      <th scope="col">Chức năng</th>
                    </tr>
                  </thead>

                  {product.map((product) => (
                  <tbody>
                    <tr>

                      <td width="10">
                        <input type="checkbox" name="check1" value="1" />
                      </td>
                      <td scope="row">{product.idproduct}</td>
                      <td>{product.nameproduct}</td>
                      <td>
                        <img
                          src={product.imageproduct}
                          alt=""
                          width="100px;"
                        />
                      </td>
                      <td>{product.amountproduct}</td>
                      <td>
                        <span class="badge bg-success">{product.statusproduct}</span>
                      </td>
                      <td>{product.costproduct}d</td>
                      <td>{product.typeproduct}</td>
                      <td>
                    
                          <Link to="#" onClick={deleteContact.bind(this, product.id)}  style={{ margin: "5px" }}>  
                          <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction(this)"
                        >
                          <i class="fas fa-trash-alt">
                            </i>
                            </button>
                            </Link>
                            <Link  to={`/editpro/${product.id}`}>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                        
                    
                          <i class="fas fa-edit"></i>
                        </button></Link>
                      </td>
                    </tr>
                  
                  </tbody>))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </body>
  );
}
export default Product;
