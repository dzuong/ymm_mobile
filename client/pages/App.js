import React from 'react';
import AppContainer from '../containers/AppContainer';

const App = React.createClass({
	propTypes: {
		children: React.PropTypes.element.isRequired
	},

	render() {
	return (
		<AppContainer>
			{this.props.children}
		</AppContainer>
	);
	}
});

export default App;