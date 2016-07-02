import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  // console.log('Home container state:', state);
  return {
    // authenticated: state.user.status === 'authenticated' ? true : null
  }
}

function mapDispachToProps(dispatch) {
  return {
  	 facebookLogin: (facebookResponse) => {
        // dispatch(facebookLogin(facebookResponse));
     },

     logout: () => {
         sessionStorage.removeItem('jwtToken');
         dispatch(logoutUser());
     }
  }
}
const HomeContainer = connect(mapStateToProps, mapDispachToProps)(Home);

export default HomeContainer;