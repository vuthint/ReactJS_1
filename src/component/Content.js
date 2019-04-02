import React, { Component } from 'react';

class Content extends Component {
	constructor(props){
		super(props);
		this.state ={
			old_price: 100,
			ten: '',
			tuoi: 1
		}

	}

	getstate = () => {
		return this.state.old_price;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let {ten, tuoi} = this.state;
		this.props.onSubmit({ten: ten, tuoi: tuoi});
	}

	onChange = (event) => {
		let target = event.target;
		this.setState({[target.name]: target.value});
		//console.log(target);
	}

	render() {
		let {name, price} = this.props;
		let {ten, tuoi} = this.state;
		return (
			<div className="content">
				Name: {name}<br/> 
				Price: {price}
				<h1>Content</h1>
				<form onSubmit = {this.handleSubmit}>
					ten: <input type="test" name="ten" value={ten} onChange={this.onChange} />
					tuoi: <input type="test" name="tuoi" value={tuoi} onChange={this.onChange} />
					<input type="submit" value="submit" />
				</form>	
			</div>
		);
	}
}

export default Content;