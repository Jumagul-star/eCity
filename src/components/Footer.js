import React from "react";
import { Button } from "reactstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG"

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subsription">
        <p className="footer-subscription-heading">
        Присоединяйтесь к нашему онлайн рынку прямо сейчас!
        </p>
        <p className="footer-subsciption-text">
          Вы можете подписаться в любое время.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Подписаться</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>О нас</h2>
            <Link to="/">Отзывы</Link>
            <Link to="/">Карьера</Link>
            <Link to="/">Инвесторы</Link>
            <Link to="/">Срок службы</Link>
          </div>
          <div className="footer-link-items">
            <h2>Способ оплаты</h2>
            <Link to="/">Visa</Link>
            <Link to="/">MasterCard</Link>
            <Link to="/">Qiwi Wallet</Link>
            <Link to="/">Элсом</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Свяжитесь с нами</h2>
            <Link to="/">+99650977878</Link>
            <Link to="/">qwert@mail.ru</Link>
          </div>
          <div className="footer-link-items">
            <h2>Социальные сети</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img className="logo-hdr" src={logo} alt="logo"></img>
            </Link>
          </div>
          <small className="website-rights">E-CITY</small>
          <div className="social-icons">
            <Link
              className="social-icons-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icons-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagramm"
            >
              <i className="fa fa-instagram"></i>
            </Link>
            <Link
              className="social-icons-link youtube"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fa fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
