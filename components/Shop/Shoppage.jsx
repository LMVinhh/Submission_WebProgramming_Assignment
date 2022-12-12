import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./style.css";

export default function ShopPage() {
  var products = [
    {
      key: "1",
      name: "Áo sơ mi nữ",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://img.ltwebstatic.com/images3_pi/2021/09/26/1632629319564855327742cf3ce956c6c8fe0bddd8_thumbnail_900x.webp",
      price: 269000,
      quantity: 1,
    },
    {
      key: "2",
      name: "Áo khoác giả lông nữ",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://img.ltwebstatic.com/images3_pi/2022/10/21/1666352199767e3dc9408f56b18a2f8f584b4a6c40_thumbnail_900x.webp",
      price: 1020000,
      quantity: 1,
    },
    {
      key: "3",
      name: "Đầm Denim nữ",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://img.ltwebstatic.com/images3_pi/2021/06/29/16249360491106e262db493267cce1680129c8a6c4_thumbnail_600x.webp",
      price: 602000,
      quantity: 1,
    },
    {
      key: "4",
      name: "Áo khoác âu phục nữ",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://img.ltwebstatic.com/images3_pi/2022/03/25/1648171385a17592a126f5974092334b1addf31ce3_thumbnail_600x.webp",
      price: 385000,
      quantity: 1,
    },
    {
      key: "5",
      name: "Áo khoác dài mùa đông",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://img.ltwebstatic.com/images3_pi/2022/09/09/166269165676d27cd7ac4e48fc3a882d87a5305a86_thumbnail_900x.webp",
      price: 962000,
      quantity: 1,
    },
    {
      key: "6",
      name: "Đầm xòe phối nút",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://yoti.vn/vnt_upload/product/06_2019/k258/thumbs/435_crop__dam_dep.jpg",
      price: 450000,
      quantity: 1,
    },
  ];
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  function handleClick(index) {
    setCurrent(index);
    setDetail(true);
    $("#Slider").hide();
  }
  function returnShop() {
    setCurrent(0);
    setDetail(false);
    $("#Slider").show();
  }
  return (
    <div id="shoppage">
      <div id="Page">
        <section id="Slider">
          <h1 classname="Slider_title">Shop Page</h1>
          <p className="Slider__text">
          “Đừng chạy theo xu hướng. Đừng khiến bản thân lệ thuộc vào thời trang. Hãy để chính mình là người quyết định bản thân sẽ mặc gì cũng như sẽ sống ra sao” - Versace
          </p>
        </section>
        <div className="List__product">
          {products.map((product, index) => {
            return (
              <>
                {current === 0 && detail == false && (
                  <div>
                    <div
                      className="product__item"
                      onClick={() => handleClick(index)}
                    >
                      <img className="product__img" src={product.img} />
                      <h2 className="product__name">{product.name}</h2>
                      <p className="product__text">{product.about}</p>
                      <p className="product__price">{product.price} USD</p>
                    </div>
                  </div>
                )}
                {current === index && detail == true && (
                  <>
                    <div id="Stinfo__product">
                      <div className="row container-fluid">
                        <div className="col-xl-6 col-lg-6">
                          <img className="info__img" src={product.img} />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <ul>
                            <li>
                              <h2>{product.name}</h2>
                            </li>
                            <li>
                              {" "}
                              <p
                                className="info__price"
                                
                              >
                                {product.price} Đ
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: "20px" }}>
                                {product.about}
                              </p>
                            </li>
                            <li>
                              <p className="info__quantity">
                                <span>Quatity: </span>
                                <button
                                  className="Stinfo__button"
                                  onClick={() =>
                                    setQuantity((q) => (q <= 1 ? 1 : q - 1))
                                  }
                                >
                                  -
                                </button>{" "}
                                {quantity}
                                <button
                                  className="Stinfo__button"
                                  onClick={() =>
                                    setQuantity((quantity) => quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </p>
                            </li>

                            <li>
                              {" "}
                              <span>Select: </span>
                              <select>
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blue</option>
                              </select>
                            </li>

                            <li className="button--double">
                              <button
                                className="button-btn"
                                onClick={() =>
                                  alert("Product added to cart successfully")
                                }
                              >
                                Add to cart
                              </button>
                              <button
                                className="button-btn"
                                onClick={() => returnShop()}
                              >
                                Go back
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
