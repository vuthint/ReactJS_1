import  React, { Component } from 'react';
import Header from './Header';
import Left from './Left';
import Content from './Content';
import Right from './Right';
import Footer from './Footer';

class Com_1 extends Component {
	render() {
		return (
			<div>
				<h1 className="thinvt">Hello word</h1>
				<Header/>
				<Left/>
				<Content/>
				<Right/>
				<Footer/>
           </div>
		);
	}
}
export default Com_1;