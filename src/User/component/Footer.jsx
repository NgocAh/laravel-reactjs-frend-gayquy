import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đến tổ chức <strong>0941402932</strong>
              </p>
              <p>
                Thắc mắc <strong>0941402932</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0941402932</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về Nụ Cười Sáng</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Nụ Cười Sáng là nền tảng giúp bạn dễ dàng chung tay quyên góp tiền
              cùng hàng triệu người, giúp đỡ các hoàn cảnh khó khăn trên khắp cả
              nước. Hãy cũng Nụ Cười Sáng trao đi những yêu thương, tạo nên
              nhiều giá trị cho cuộc sống
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
