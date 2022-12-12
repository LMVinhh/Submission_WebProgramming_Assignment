import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./About.css";
export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listImageInInstagram = [
      {
        key: "0",
        id: "list-follow-in-instagram-image-size1",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd84e89583c1bf70798_image-1-instagram-veterinary-x-template.jpg",
      },
      {
        key: "1",
        id: "list-follow-in-instagram-image-size1",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd8e87f2d548f185c60_image-2-instagram-veterinary-x-template.jpg",
      },
      {
        key: "2",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg",
      },
      {
        key: "3",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg",
      },
      {
        key: "4",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg",
      },
      {
        key: "5",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg",
      },
    ];
    return (
      <div id="aboutpage">
        <section className="container my-5 py-4 ">
          <div className="row ">
            <div className="col-12 text-center">
              <h2 className="title service"> About us</h2>
              <p className="lead mb-4">
              Được thành lập từ năm 2022, SaiGon Sky với phương châm <br />
                        "Đồng hành cùng phong cách thời trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, <br />
                        bởi chúng tôi luôn đề cao tiêu chí mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng. <br />
                        Đa phong cách, đa thương hiệu, đa phân khúc – luôn có nhiều hơn một giải pháp tối ưu cho từng sự lựa chọn riêng biệt tại SaiGon Sky.<br />
              </p>
            </div>
          </div>
        </section>


        <div className="container " id="content-about-img">
          <div className="about-hero1">
            <img
              src="https://media.istockphoto.com/id/859397178/photo/golden-fashion-model-elegant-woman-flying-gold-dress-waving-sparkling-gown-fabric.jpg?s=612x612&w=0&k=20&c=xnwGg_HLBru-bP4CywNk7jNEqaBHDcPyqx9jNbQmKc4="
              alt=""
              id="img-1"
            />
          </div>
          <div className="about-hero2">
            <img
              src="https://www.teahub.io/photos/full/73-734753_hd-fashion-wallpaper-hd-wallpapers-tablet-4k-high.jpg"
              alt=""
              id="img-2"
            />
          </div>
          <div className="motion-1">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9352687080d77032c_shape-1-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-3"
            />
          </div>
          <div className="motion-2">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9d8fd85380ba9d7a8_shape-2-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-4"
            />
          </div>
          <div className="motion-3">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9f43e10a328cc5197_shape-3-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-5"
            />
          </div>
          <div className="motion-4">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9e8b1934eeeb78bd8_shape-4-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-6"
            />
          </div>
        </div>
        <section className="container my-5 py-4">
          <div className="row">
            <div className="col-md-6 ">
              <h2 className="display-5 fw-bold">
                The story behind our Web
              </h2>
              <p className="lead mb-4 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                consectetur lacus, suspendisse non gravida.
                <br />
                <br />
                Nec leo amet pellentesque ultrices pretium. Egestas ac nulla in
                enim lacinia sed feugiat neque. Nulla cursus ornare sit
                scelerisque dolor sit amet.
              </p>
            </div>
            {/* For Images */}
            <div id="the-story" className="col-md-6 mx-auto ">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                height="400px"
                width="600px"
                id="the-story-pic"
              />
            </div>
          </div>
        </section>
        <section className="container my-5 py-4">
          <div className="row">
            <div id="our-core" className="col-md-6 mx-auto">
              <img
                src="https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
                alt=""
                height="400px"
                width="550px"
                id="our-core-pic"
              />
            </div>

            <div className="col-md-6">
              <h2 className="display-5 fw-bold">
                Our core mission at Veterinary X
              </h2>
              <p className="lead mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                consectetur lacus, suspendisse non gravida.
                <br />
                <br />
                Nec leo amet pellentesque ultrices pretium. Egestas ac nulla in
                enim lacinia sed feugiat neque. Nulla cursus ornare sit
                scelerisque dolor sit amet.
              </p>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
