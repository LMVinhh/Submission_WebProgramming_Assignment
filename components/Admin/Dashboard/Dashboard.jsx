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
              <b>Kh??nh Linh</b>
            </p>
            <p class="app-sidebar__user-designation">Ch??o m???ng b???n tr??? l???i</p>
          </div>
        </div>
        <hr />
        <ul class="app-menu">
          <li>
            <NavLink to="/dashboard">
              <a class="app-menu__item active" href="">
                <i class="app-menu__icon bx bx-tachometer"></i>
                <span class="app-menu__label">B???ng ??i???u khi???n</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/info">
              <a class="app-menu__item" href="#">
                <i class="app-menu__icon bx bx-user-voice"></i>
                <span class="app-menu__label">Qu???n l?? kh??ch h??ng</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listproduct">
              <a class="app-menu__item" href="table-data-product.html">
                <i class="app-menu__icon bx bx-purchase-tag-alt"></i>
                <span class="app-menu__label">Qu???n l?? s???n ph???m</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listReceipt">
              <a class="app-menu__item" href="table-data-oder.html">
                <i class="app-menu__icon bx bx-dollar"></i>
                <span class="app-menu__label">Qu???n l?? ????n h??ng</span>
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
                    <b>B???ng ??i???u khi???n</b>
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
                    <h4>T???ng kh??ch h??ng</h4>
                    <p>
                      <b>56 kh??ch h??ng</b>
                    </p>
                    <p class="info-tong">T???ng s??? kh??ch h??ng ???????c qu???n l??.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small info coloured-icon">
                  <i class="icon bx bxs-data fa-3x"></i>
                  <div class="info">
                    <h4>T???ng s???n ph???m</h4>
                    <p>
                      <b>1850 s???n ph???m</b>
                    </p>
                    <p class="info-tong">T???ng s??? s???n ph???m ???????c qu???n l??.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small warning coloured-icon">
                  <i class="icon bx bxs-shopping-bags fa-3x"></i>
                  <div class="info">
                    <h4>T???ng ????n h??ng</h4>
                    <p>
                      <b>247 ????n h??ng</b>
                    </p>
                    <p class="info-tong">
                      T???ng s??? h??a ????n b??n h??ng trong th??ng.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="widget-small danger coloured-icon">
                  <i class="icon bx bxs-error-alt fa-3x"></i>
                  <div class="info">
                    <h4>S???p h???t h??ng</h4>
                    <p>
                      <b>4 s???n ph???m</b>
                    </p>
                    <p class="info-tong">
                      S??? s???n ph???m c???nh b??o h???t c???n nh???p th??m.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">T??nh tr???ng ????n h??ng</h3>
                  <div>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID ????n h??ng</th>
                          <th>T??n kh??ch h??ng</th>
                          <th>T???ng ti???n</th>
                          <th>Tr???ng th??i</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AL3947</td>
                          <td>Ph???m Th??? Ng???c</td>
                          <td>19.770.000 ??</td>
                          <td>
                            <span class="badge bg-info">Ch??? x??? l??</span>
                          </td>
                        </tr>
                        <tr>
                          <td>ER3835</td>
                          <td>Nguy???n Th??? M??? Y???n</td>
                          <td>16.770.000 ??</td>
                          <td>
                            <span class="badge bg-warning">
                              ??ang v???n chuy???n
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>MD0837</td>
                          <td>Tri???u Thanh Ph??</td>
                          <td>9.400.000 ??</td>
                          <td>
                            <span class="badge bg-success">???? ho??n th??nh</span>
                          </td>
                        </tr>
                        <tr>
                          <td>MT9835</td>
                          <td>?????ng Ho??ng Ph??c</td>
                          <td>40.650.000 ??</td>
                          <td>
                            <span class="badge bg-danger">???? h???y </span>
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
                  <h3 class="tile-title">D??? li???u 6 th??ng ?????u v??o</h3>
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
                  <h3 class="tile-title">Th???ng k?? 6 th??ng doanh thu</h3>
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
