import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container className="header-container container d-none d-lg-flex align-items-center justify-content-between p-3">
        <div className="header-img" style={{ zIndex: '1' }}>
          <img src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg" width="162.57px" height="24px" alt="Logo" />
        </div>
        <div className="header-form">
          <form className="d-flex" style={{ width: '360px', borderRadius: '21px' ,border: "none"}}>
            <button className="custom-search " type="submit" style={{ border: "none" ,borderRadius:"5px"}}>
              <img
                alt="Search"
                style={{ border: 'none' }}
                className="search-img"
                src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                width="22" height="22" />
            </button>
            <input className="form-control custom-input-search" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
          </form>
        </div>
        <div className="header-button">
          <Link to={'/SignUp'} id="show" className="btn custom-btn-create p-0 m-0" >
            create Account. <span className="text-primary fw-bold">It's Free!<img className="rounded-circle" alt="Profile" src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" /></span>
          </Link>
        </div>
      </Container>

    </Navbar>
  );
}

export default Navigationbar;
