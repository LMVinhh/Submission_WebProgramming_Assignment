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
              <b>Kh??nh Linh</b>
            </p>
            <p class="app-sidebar__user-designation">Ch??o m???ng b???n tr??? l???i</p>
          </div>
        </div>
        <hr />
        <ul class="app-menu">
          <li>
            <NavLink to="/dashboard">
              <a class="app-menu__item" href="">
                <i class="app-menu__icon bx bx-tachometer"></i>
                <span class="app-menu__label">B???ng ??i???u khi???n</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/info">
              <a class="app-menu__item active" href="">
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
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item active">
              <a href="#">
                <b>Danh s??ch kh??ch h??ng</b>
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
                    title="Th??m"
                  >
                    <i class="fas fa-plus"></i> T???o kh??ch h??ng m???i
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
                    <i class="fas fa-print"></i> In d??? li???u
                  </a>
                </div>
                <div class="col-sm-2">
                  <a
                    class="btn btn-delete btn-sm"
                    type="button"
                    title="X??a"
                    onclick="myFunction(this)"
                  >
                    <i class="fas fa-trash-alt"></i> X??a t???t c???
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
                      <th>ID nh??n vi??n</th>
                      <th width="150">H??? v?? t??n</th>
                      <th width="20">???nh th???</th>
                      <th width="300">?????a ch???</th>
                      <th>Ng??y sinh</th>
                      <th>Gi???i t??nh</th>
                      <th>S??T</th>
                      <th width="100">T??nh n??ng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="10">
                        <input type="checkbox" name="check1" value="1" />
                      </td>
                      <td>#CD12837</td>
                      <td>H??? Th??? Thanh Ng??n</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwfhN0SNa7NiyBZCw2z3foM3z6AlUr2quTg&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>155-157 Tr???n Qu???c Th???o, Qu???n 3, H??? Ch?? Minh</td>
                      <td>12/02/1999</td>
                      <td>N???</td>
                      <td>0926737168</td>
                      <td class="table-td-center">
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction(this)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Tr???n Kh??? ??i</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDydB9KjwHwdC66BM4qykDnaQ7sLW45fT3w&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>6 Nguy???n L????ng B???ng, T??n Ph??, Qu???n 7, H??? Ch?? Minh</td>
                      <td>22/12/1999</td>
                      <td>N???</td>
                      <td>0931342432</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction(this)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Ph???m Thu C??c</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XNTUSJXct4lHPb0On2G6_NDcrevTu9EPRQ&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>S??? 3 H??a B??nh, Ph?????ng 3, Qu???n 11, H??? Ch?? Minh</td>
                      <td>02/06/1998</td>
                      <td>N???</td>
                      <td>0931491997</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Tr???n Anh Khoa</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAjQMdsJWQPmtJsK_TJ_xyL0jsnLcG1J9Tg&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>
                        19 ???????ng Nguy???n H???u Th???, T??n H??ng, Qu???n 7, H??? Ch?? Minh
                      </td>
                      <td>18/02/1995</td>
                      <td>Nam</td>
                      <td>0916706633</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Nguy???n Th??nh Nh??n</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zkxIlgmwBh5S1slmXYXKhi_LHeVpAZmxeA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>S??? 13, T??n Thu???n ????ng, Qu???n 7, H??? Ch?? Minh</td>
                      <td>10/03/1996</td>
                      <td>Nam</td>
                      <td>0971038066</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Nguy???n ?????ng Tr???ng Nh??n</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJiVMNEjNUOrplTwygXWzVBUvBE5LnN3zFwDe6wV_uPj3Rjj09sOWoJFUKi1DNmCYCGA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>59C Nguy???n ????nh Chi???u, Qu???n 3, H??? Ch?? Minh</td>
                      <td>23/07/1996</td>
                      <td>Nam</td>
                      <td>0846881155</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          type="button"
                          title="X??a"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          type="button"
                          title="S???a"
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
                      <td>Nguy???n Th??? Mai</td>
                      <td>
                        <img
                          class="img-card-person"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuMsuHH3rzO9GNW7zIUHRvJ60utKq0D7xqA&usqp=CAU"
                          alt=""
                        />
                      </td>
                      <td>???????ng S??? 3, T??n T???o A, B??nh T??n, H??? Ch?? Minh</td>
                      <td>09/12/2000</td>
                      <td>N???</td>
                      <td>0836333037</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm trash"
                          title="X??a"
                          onclick="myFunction()"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        <button
                          class="btn btn-primary btn-sm edit"
                          title="S???a"
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
                    <h5>Ch???nh s???a th??ng tin nh??n vi??n c?? b???n</h5>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="control-label">ID nh??n vi??n</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="#CD2187"
                    disabled
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">H??? v?? t??n</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="V?? Tr?????ng"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">S??? ??i???n tho???i</label>
                  <input
                    class="form-control"
                    type="number"
                    required
                    value="09267312388"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label class="control-label">?????a ch??? email</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="truong.vd2000@gmail.com"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Ng??y sinh</label>
                  <input class="form-control" type="date" value="15/03/2000" />
                </div>

                <br />
                <br />
                <button class="btn btn-save" type="button">
                  L??u l???i
                </button>
                <a class="btn btn-cancel" data-dismiss="modal" href="#">
                  H???y b???
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
