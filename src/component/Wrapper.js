import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Right from './Right';
import Left from './Left';
import '../index.css';

class Com_1 extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: 1,
			price: 15
		}
	}

	componentDidMount(){
		let data = {
			name: 5,
			price: 20
		};
		this.setState({
			name: data.name,
			price: data.price
		});
	}

	//arrow function
	handleClick = () =>{
		this.setState({
			name: this.state.name + 'h',
			price: this.state.price + 1
		});
	}

	callContent = () =>{
		console.log(this.refs.content.getstate());
	}

	onSubmit = (data) => {
		console.log(data);
	}

	render() {
		//let name = this.state.name;
		//let price = this.state.price;
		let {name, price} = this.state;
		//console.log(name, '' ,price);
		return (
			<div className="page">
				<div className="container">
				<input type="button" value="click" onClick={() => this.handleClick()}/>
				<input type="button" value="call" onClick={() => this.callContent()}/>
				<Header />
				<Right />
				<Content ref="content" name={name} price={price} onSubmit={this.onSubmit}/>
				<Left />
				<Footer />
				</div>	
			</div>
		);
	}
}

export default Com_1;