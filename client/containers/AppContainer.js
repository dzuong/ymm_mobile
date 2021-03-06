import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';

function mapStateToProps(state) {
  return state;
}

const App = connect(mapStateToProps)(Main);

export default App;