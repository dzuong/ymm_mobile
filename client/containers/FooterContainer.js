import { connect } from 'react-redux';
import Footer from '../components/footers/Footer.js';

function mapStateToProps(state) {
  return { 
    footers: state.footers
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);