import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../App.css";
import "./Log_in.css";
import Dashboard from "../Dashboard/Dashboard";
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

function Log_in() {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img
              src="https://cdn.vietnambiz.vn/2019/11/22/photo-1-1574417601679162441435.jpg"
              alt="log_in"
            ></img>
          </div>
                <div>
                <form class="login100-form validate-form">
                    <span class="login100-form-title">
                        <b>ĐĂNG NHẬP HỆ THỐNG</b>
                    </span>
                </form>
          
                <form action="">
                        <div class="wrap-input100 validate-input">
                            <input class="input100" type="text" placeholder="Tài khoản quản trị" name="username"
                                id="username"></input>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class='bx bx-user'></i>
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input">
                            <input autocomplete="off" class="input100" type="password" placeholder="Mật khẩu"
                                name="current-password" id="password-field"></input>
                            
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class='bx bx-key'></i>
                            </span>
                            <span toggle="#password-field" class="bxx bx fa-fw bx-hide field-icon click-eye"></span>
                        </div>

                        <div class="container-login100-form-btn">
                            
                            <NavLink to="/dashboard" >
                                <input type="button" value="Đăng nhập" id="submit" onclick="validate()" />
                            </NavLink>
                        </div>

                        
                </form>
                </div>
                
        </div>
      </div>
    </div>
  );
}
export default Log_in;
