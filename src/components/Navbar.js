import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Form,
} from "reactstrap";
import "./Navbar.css";

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav className="nav-bbar" pills>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="katalog">
            Каталог товаров
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Смартфоны и гаджеты</DropdownItem>
            <DropdownItem>ТВ,аудио,фото,видео</DropdownItem>
            <DropdownItem>Ноутбуки и компьюеткры</DropdownItem>
            <DropdownItem>Бытовая техника</DropdownItem>
            <DropdownItem>Техника для кухни</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink className="nav-items" href="#">
            Акции
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
            Блог
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
            Контакты
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
           Оплата и доставка
          </NavLink>
        </NavItem>
        <div className="contacts">
            <i class="fa fa-whatsapp"></i>
              +996502600000 <br/>
              <i class="fa fa-whatsapp"></i>
              +996656688787
            </div>
      </Nav>
    </div>
  );
};

export default Example;
