import React from 'react';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
// import CartBtn from './buttons/CartBtn';



const Header = () => {
  return (
    <>
      <div className='sidebar'>
    <ul >
        <li><a href="/dashboard"><SpeedTwoToneIcon/></a></li>
        <li><a href="/pagelisting"><FormatListBulletedTwoToneIcon/></a></li>
        <li><a href="/createpage"><AddOutlinedIcon/></a></li>
       
       <li><a href="/login"><LogoutIcon/></a></li>
      </ul>
     </div></> 
    //   <Navbar bg="light" expand="lg" className='sidebar'>
    //   <Container fluid>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll ">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <NavLink style={{ textDecoration: "none", fontWeight: 'bold', fontSize: '19px', color: "black", margin: '10px' }} to="/dashboard"><SpeedTwoToneIcon/></NavLink>
    //         <NavLink style={{ textDecoration: "none", fontWeight: 'bold', fontSize: '19px', color: "black", margin: '10px' }} to="/pagelisting"><FormatListBulletedTwoToneIcon/></NavLink>
    //         <NavLink style={{ textDecoration: "none", fontWeight: 'bold', fontSize: '19px', color: "black", margin: '10px' }} to="/craetepage"><AddOutlinedIcon/></NavLink>
        
    //       </Nav>
          
          
    //       <NavLink to="/"   >
    //         <LogoutIcon />    
    //       </NavLink >
          
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    
     
  )
}

export default Header