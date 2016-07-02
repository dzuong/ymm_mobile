import React, { PropTypes } from 'react';
import FacebookLogin from './facebook/facebook';

const responseFacebook = (response) => {
	console.log('facebook response',response);
};

const Home = React.createClass({

	propTypes: {
	},
	
	componentWillMount() {
		//this.props.fetchPosts();
	},
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>'Allo, 'Allo!</h1>
					<p className="lead">Always a pleasure scaffolding your apps.</p>
					<FacebookLogin
						appId="532016516944140"
						autoLoad={true}
						callback={responseFacebook}
						icon="fa-facebook" 
						{...this.props}
					/>
				</div>
			</div>	
		);
	}
});
export default Home;