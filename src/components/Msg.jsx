import React, { useState } from 'react';
import './Msg.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Msg() {
  const [msg, setMsg] = useState('');

  function show() {
    setMsg('You Got A New Message!');
  }

  function hide() {
    setMsg('');
  }

  return (
    <div>
      <MDBCard style={{ width: '450px', height: '500px', marginLeft: '520px', marginTop: '40px', boxShadow: '0 4px 8px black', borderRadius: '15px', backgroundColor:"transparent"}}>
        <MDBCardImage src='https://cdn.dribbble.com/users/4620394/screenshots/16745420/media/0d901ab45219620a86eabaadd9f7c8e1.gif' position='top' alt='...' />
        <MDBCardBody>
          <h3 className='text-center text-light'>{msg}</h3>
          <button onClick={show} className='btn btn-success mt-3' style={{ marginLeft: '120px' }}>SHOW</button>
          <button onClick={hide} className='ms-1 btn btn-danger mt-3'>HIDE</button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Msg;
