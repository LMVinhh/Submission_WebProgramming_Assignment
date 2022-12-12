import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../App.css";
/* eslint-disable no-restricted-globals */
import "./Customer.css";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";
import GTranslateSharpIcon from "@mui/icons-material/GTranslateSharp";
import CategoryIcon from "@mui/icons-material/Category";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Customer() {
    
  return (
    <body class="app sidebar-mini rtl">
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
      <main class="app-content">
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item active">
              <a href="#">
                <b>Danh sách khách hàng</b>
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
                  <NavLink to="/info">
                  <a
                    class="btn btn-add btn-sm"
                    href=""
                    title="Thêm"
                  >
                    <i class="fas fa-plus"></i> Tạo khách hàng mới
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
                  class="table table-hover table-bordered js-copytextarea"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th width="10">
                        <input type="checkbox" id="all" />
                      </th>
                      <th>ID nhân viên</th>
                      <th width="150">Họ và tên</th>
                      <th width="20">Ảnh thẻ</th>
                      <th width="300">Địa chỉ</th>
                      <th>Ngày sinh</th>
                      <th>Giới tính</th>
                      <th>SĐT</th>
                      <th width="100">Tính năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="10">
                        <input type="checkbox" name="check1" value="1" />
                      </td>
                      <td>#CD12837</td>
                      <td>Hồ Thị Thanh Ngân</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwfhN0SNa7NiyBZCw2z3foM3z6AlUr2quTg&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
                      <td>12/02/1999</td>
                      <td>Nữ</td>
                      <td>0926737168</td>
                      <td class="table-td-center">
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction(this)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" name="check2" value="2" />
                      </td>
                      <td>#SX22837</td>
                      <td>Trần Khả Ái</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDydB9KjwHwdC66BM4qykDnaQ7sLW45fT3w&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                      <td>22/12/1999</td>
                      <td>Nữ</td>
                      <td>0931342432</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction(this)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" name="check3" value="3" />
                      </td>
                      <td>#LO2871</td>
                      <td>Phạm Thu Cúc</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XNTUSJXct4lHPb0On2G6_NDcrevTu9EPRQ&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>Số 3 Hòa Bình, Phường 3, Quận 11, Hồ Chí Minh</td>
                      <td>02/06/1998</td>
                      <td>Nữ</td>
                      <td>0931491997</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" />
                      </td>
                      <td>#SR28746</td>
                      <td>Trần Anh Khoa</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAjQMdsJWQPmtJsK_TJ_xyL0jsnLcG1J9Tg&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>
                        19 Đường Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí Minh
                      </td>
                      <td>18/02/1995</td>
                      <td>Nam</td>
                      <td>0916706633</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" />
                      </td>
                      <td>#KJS276</td>
                      <td>Nguyễn Thành Nhân</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zkxIlgmwBh5S1slmXYXKhi_LHeVpAZmxeA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>Số 13, Tân Thuận Đông, Quận 7, Hồ Chí Minh</td>
                      <td>10/03/1996</td>
                      <td>Nam</td>
                      <td>0971038066</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" />
                      </td>
                      <td>#BS76228</td>
                      <td>Nguyễn Đặng Trọng Nhân</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJiVMNEjNUOrplTwygXWzVBUvBE5LnN3zFwDe6wV_uPj3Rjj09sOWoJFUKi1DNmCYCGA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh</td>
                      <td>23/07/1996</td>
                      <td>Nam</td>
                      <td>0846881155</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width="10">
                        <input type="checkbox" />
                      </td>
                      <td>#YUI21376</td>
                      <td>Nguyễn Thị Mai</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuMsuHH3rzO9GNW7zIUHRvJ60utKq0D7xqA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>Đường Số 3, Tân Tạo A, Bình Tân, Hồ Chí Minh</td>
                      <td>09/12/2000</td>
                      <td>Nữ</td>
                      <td>0836333037</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          title="Xóa"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          title="Sửa"
                          id="show-emp"
                          data-toggle="modal"
                          data-target="#ModalUP"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        class="modal fade"
        id="ModalUP"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <span class="thong-tin-thanh-toan">
                    <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="control-label">ID nhân viên</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="#CD2187"
                    disabled
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">Họ và tên</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="Võ Trường"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">Số điện thoại</label>
                  <input
                    class="form-control"
                    type="number"
                    required
                    value="09267312388"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">Địa chỉ email</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="truong.vd2000@gmail.com"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Ngày sinh</label>
                  <input class="form-control" type="date" value="15/03/2000" />
                </div>

                <br />
                <br />
                <button class="btn btn-save" type="button">
                  Lưu lại
                </button>
                <a class="btn btn-cancel" data-dismiss="modal" href="#">
                  Hủy bỏ
                </a>
                <br />
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Customer;
