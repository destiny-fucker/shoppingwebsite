import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import "./nav-bar.styles.css";
import logo from '../../assets/lamborghini.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <Fragment>
            <div className='nav-bar'>
                <div className='logo-container'>
                    <Link  to={"/"}>
                    <img className='logo' src = {logo} alt = "logo" />
                    </Link> 
                 </div>

                <div className='title-container'>
                    <Link to={"/"}>
                        <h1 className='title'> Shopping Website </h1> 
                    </Link>
                </div>

                <div className='links-container'>
                    <Link to={"/shop"}>
                        SHOP
                    </Link>
                    <Link to={"/contact"}>
                        CONTACT
                    </Link>
                    <Link to={"/sign-in"}>
                        SIGN IN
                    </Link>
                </div>

            </div>
            <Outlet />
         </Fragment>
    )
}

export default NavBar;