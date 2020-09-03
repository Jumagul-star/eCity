import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
// import Home from './Home'
import './Layout.css'


function Layout(props) {
    return (
        <div>
            <Header />
            <Navbar/>
            {/* <Home/> */}
            <div className='page-wrapper bg-light'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
