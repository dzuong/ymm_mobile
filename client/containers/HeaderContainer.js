import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/headers/Header.js';



function mapStateToProps(state) {
  // console.log('Header container state', state);
  return { 
    // authenticated: state.user.status === 'authenticated' ? true : null,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	 facebookLogin: (facebookResponse) => {
        dispatch(facebookLogin(facebookResponse));
     },

     logout: () => {
         sessionStorage.removeItem('jwtToken');
         dispatch(logoutUser());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);