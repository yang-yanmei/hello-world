import React from 'react';

class Root extends React.Component {
	render() {
		return <h1>Hello from {this.props.phrase}!</h1>;
	}
}

class UserName extends React.Component {
	render() {
		return <div>name: {this.props.name}</div>;
	}
}
class User extends React.Component {
	render() {
		return <div>
			<h1>City: {this.props.user.city}</h1>
			<UserName name={this.props.user.name} />
		</div>;
	}
}

export default User;