
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar style={{backgroundColor:"transparent"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{color:"white",fontFamily:"Kalam",fontWeight:"bold"}}>
            <img
              src='https://media.giphy.com/media/LaD9jZP2ThD68/giphy.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            SHOW/HIDE APP
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header