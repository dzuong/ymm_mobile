import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

class HomeIndex extends Component {
  render() {
	return (
		<div>
			<HeaderContainer />
			<HomeContainer />
			<FooterContainer />
		</div>
	);
  }
}
export default HomeIndex;