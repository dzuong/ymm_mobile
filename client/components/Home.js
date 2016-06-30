import React, { PropTypes } from 'react';

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
		        <p><a className="btn btn-lg btn-success" href="#"><i className="fa fa-facebook-square"></i> Facebook login</a></p>
		      </div>

    </div>	
		);
	}
});

export default Home;