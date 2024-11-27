import React, {Fragment, useState, useEffect, useContext} from 'react';
import { NavLink as Link, Outlet} from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
import { HiMiniXMark } from "react-icons/hi2";
import { CgMenu } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { TiMinus } from "react-icons/ti";
import { FaBagShopping } from "react-icons/fa6";
import { GiRunningShoe } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiPower } from "react-icons/ci";
import './Navbar.css';
import Logospinner from '../LogoSpinner/Logospinner';


export default function Navbar() {
  const {Logout, isLoggedIn} = useContext(AuthContext)
    const [isMobile, setIsMobile] = useState(false);
    const [isProductDropped, setIsProductDropped] = useState(false);
    const [mobileProduct, setMobileProduct] = useState(false);
    const [innerProductDropped, setInnerProductDropped] = useState(false);
    const [userDrop, setUserDrop] = useState(false);
    const navigate = useNavigate()
    
    const handleToggleMenu = ()=> {
        setIsMobile(!isMobile);
    };

    const NavLink =({isActive}) => ({
        borderBottom: isActive ? "1px solid red" : ""
    });

    const toggleProduct = ()=> {
      setIsProductDropped(!isProductDropped)
    }
    const toggleInnerProduct = ()=> {
      setInnerProductDropped(!innerProductDropped)
    }

    const handleUserDrop = ()=> {
      setUserDrop(!userDrop)
    }

    const handleLogout = ()=> {
      Logout();
      navigate('/')
    }

  return (
    <Fragment>
    <div className='nav-container'>
        <Link to='/'> <Logospinner/> </Link>

      <div className={`nav-link ${isMobile ? "mobile active" : ""}`}>
        <Link to='/'  onClick={()=> setIsMobile(!isMobile)} style={NavLink}>Home</Link>
        <Link to='/about' onClick={()=> setIsMobile(!isMobile)} style={NavLink}>About</Link>

        <div className="product-drop" onClick={toggleProduct}>
          <p>Products</p> 
              {isProductDropped ? <MdKeyboardArrowUp className='icons'/>  : <MdKeyboardArrowDown className='icons'/>}
          {isProductDropped && (
            <div className="product-card" >
              {/* inner product */}
              <div className="inner-product" onMouseEnter={toggleInnerProduct}>
                <p>Vlog</p> {innerProductDropped ? <MdKeyboardArrowRight className='icons'/>  : <MdKeyboardArrowDown className='icons'/> }
                {innerProductDropped && ([ 
                  <div className="inner-link">
                  <Link to='/allproduct' style={NavLink}>All Products</Link>
                  <Link to='/news' style={NavLink}>News</Link>
                </div>
                ])}
              </div>

              <Link to='/bagproduct' onClick={()=> setIsMobile(!isMobile)} style={NavLink}> <FaBagShopping /> Bag Products</Link>
              <Link to='/clothproduct' onClick={()=> setIsMobile(!isMobile)} style={NavLink}> <GiRunningShoe /> Cloth Products</Link>
              <Link to='/shoeproduct' onClick={()=> setIsMobile(!isMobile)} style={NavLink}> <GiClothes /> Shoe Products</Link>
            </div>
          )}
        </div>

        <div className="mobile-product-drop">
          <span onClick={()=> setMobileProduct(!mobileProduct)}>
          <p>Products</p> {mobileProduct ? <TiMinus className='icons'/>  : <LuPlus className='icons'/>}
          </span>
          {mobileProduct && (
            <div className="mobile-product-card">
              {/* inner product */}
              <div className="inner-product" onClick={toggleInnerProduct}>
                <p>Vlog</p> {innerProductDropped ? <MdKeyboardArrowUp className='icons'/>  : <MdKeyboardArrowDown className='icons'/> }
                {innerProductDropped && ([ 
                  <div className="inner-link">
                  <Link to='/allproduct' onClick={()=> setIsMobile(false)} style={NavLink}>All products</Link>
                  <Link to='/news' onClick={()=> setIsMobile(false)} style={NavLink}>News</Link>
                </div>
                ])}
              </div>

              <Link to='/bagproduct' onClick={()=> setIsMobile(false)} style={NavLink}> <FaBagShopping /> Bag Products</Link>
              <Link to='/clothproduct' onClick={()=> setIsMobile(false)} style={NavLink}> <GiClothes /> Cloth Products</Link>
              <Link to='/shoeproduct' onClick={()=> setIsMobile(false)} style={NavLink}> <GiRunningShoe /> Shoe Products</Link>
            </div>
          )}
        </div>
        <Link to='/contact' onClick={()=> setIsMobile(!isMobile)} style={NavLink}>Contact</Link>
        <Link to='/faq' onClick={()=> setIsMobile(!isMobile)} style={NavLink}>Faq</Link>

        {isLoggedIn ? (
          <div className="user">
          <FaRegUserCircle onClick={handleUserDrop}/>
          {userDrop && (
            <div className="user-card" onClick={()=> setIsMobile(false)}>
              <h4 style={NavLink}><CgProfile />My Profile</h4>
              <h4 style={NavLink} onClick={handleLogout}><CiPower />Log Out</h4>
            </div>
          )}
        </div> 
        ) : (
          <div className="user" onClick={handleUserDrop}>
          <FaRegUserCircle />
          {userDrop && (
            <div className="user-card">
               <Link to='/signin' onClick={()=> setIsMobile(!isMobile)} style={NavLink}>Login</Link>
               <Link to='/signup' onClick={()=> setIsMobile(!isMobile)} style={NavLink}>Signup</Link>
            </div>
          )}
        </div>
          )}

      </div>
      <div className="toggle-menu" onClick={handleToggleMenu}>{isMobile ? <HiMiniXMark /> : <CgMenu />}</div>
    </div>
    <Outlet/>
    </Fragment>
  )
}
