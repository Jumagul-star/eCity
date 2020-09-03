import React, { useState } from 'react'
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import CartSvg from '../assets/icons/cart.svg'
import CartBtn from './CartBtn';



function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ 'backgroundColor': "#e3f2fd" }} light expand="md">
                <Link className="nav-link" to="/">
                    <h3 className='text-success'>ECO Friday</h3>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/about-us/">About Us</Link>
                    </NavItem>
                    
                    <NavItem>
                        <Link className='nav-link' to='/contacts/'>Contacts</Link>
                    </NavItem>
                </Nav>
                <CartBtn />
                <Link className='mr-3' to='/account'>Account</Link>
                <Link to="/auth/logout">Logout</Link>
                
            </Navbar>
        </div>
    )
}

export default Header