import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../App.css";
/* eslint-disable no-restricted-globals */
import "./Dashboard.css";
import Customer from "../Customer/Customer";
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

function Dashboard() {
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
              <a class="app-menu__item active" href="">
                <i class="app-menu__icon bx bx-tachometer"></i>
                <span class="app-menu__label">Bảng điều khiển</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/info">
              <a class="app-menu__item" href="#">
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
        <div class="row">
          <div class="col-md-12">
            <div class="app-title">
              <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">
                    <b>Bảng điều khiển</b>
                  </a>
                </li>
              </ul>
              <div id="clock"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="row">
              <div class="col-md-6">
                <div class="widget-small primary coloured-icon">
                  <i class="icon bx bxs-user-account fa-3x"></i>
                  <div class="info">
                    <h4>Tổng khách hàng</h4>
                    <p>
                      <b>56 khách hàng</b>
                    </p>
                    <p class="info-tong">Tổng số khách hàng được quản lý.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small info coloured-icon">
                  <i class="icon bx bxs-data fa-3x"></i>
                  <div class="info">
                    <h4>Tổng sản phẩm</h4>
                    <p>
                      <b>1850 sản phẩm</b>
                    </p>
                    <p class="info-tong">Tổng số sản phẩm được quản lý.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small warning coloured-icon">
                  <i class="icon bx bxs-shopping-bags fa-3x"></i>
                  <div class="info">
                    <h4>Tổng đơn hàng</h4>
                    <p>
                      <b>247 đơn hàng</b>
                    </p>
                    <p class="info-tong">
                      Tổng số hóa đơn bán hàng trong tháng.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small danger coloured-icon">
                  <i class="icon bx bxs-error-alt fa-3x"></i>
                  <div class="info">
                    <h4>Sắp hết hàng</h4>
                    <p>
                      <b>4 sản phẩm</b>
                    </p>
                    <p class="info-tong">
                      Số sản phẩm cảnh báo hết cần nhập thêm.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">Tình trạng đơn hàng</h3>
                  <div>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID đơn hàng</th>
                          <th>Tên khách hàng</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AL3947</td>
                          <td>Phạm Thị Ngọc</td>
                          <td>19.770.000 đ</td>
                          <td>
                            <span class="badge bg-info">Chờ xử lý</span>
                          </td>
                        </tr>
                        <tr>
                          <td>ER3835</td>
                          <td>Nguyễn Thị Mỹ Yến</td>
                          <td>16.770.000 đ</td>
                          <td>
                            <span class="badge bg-warning">
                              Đang vận chuyển
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>MD0837</td>
                          <td>Triệu Thanh Phú</td>
                          <td>9.400.000 đ</td>
                          <td>
                            <span class="badge bg-success">Đã hoàn thành</span>
                          </td>
                        </tr>
                        <tr>
                          <td>MT9835</td>
                          <td>Đặng Hoàng Phúc</td>
                          <td>40.650.000 đ</td>
                          <td>
                            <span class="badge bg-danger">Đã hủy </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          <div class="col-md-12 col-lg-6">
            <div class="row">
              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                  <div class="embed-responsive embed-responsive-16by9">
                    <canvas
                      class="embed-responsive-item"
                      id="lineChartDemo"
                    ></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">Thống kê 6 tháng doanh thu</h3>
                  <div class="embed-responsive embed-responsive-16by9">
                    <canvas
                      class="embed-responsive-item"
                      id="barChartDemo"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Dashboard;
