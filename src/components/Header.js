import React, { Component } from 'react';
import '../css/Header.css';

const nameStyle = {
	margin: '10vh 0 10px 0',
	color: '#333',
	fontFamily: '"Josefin Sans", sans-serif',
	fontSize: '4.35rem',
	fontWeight: 'normal',
	textAlign: 'center',
	textShadow: '1px 1px 1px rgba(0,0,0,0.004)',
	letterSpacing: '-2px',
}

const titleStyle = {
	marginBottom: '80px',
	color: 'rgba(0,0,0,0.6)',
	fontFamily: 'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif',
	fontSize: '1.1rem',
	textAlign: 'center',
	letterSpacing: '1px',
}

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Web Designer and Developer'
		}
	}

	render() {
		return (
			<header>
				<a href="//seanthenderson.github.io/sth/">
					<h1 style={nameStyle}>Sean T
					 	<span style={{marginLeft: '-2px', color: '#3B5472'}}>.</span>
					 	<span style={{marginLeft: '-2px', color: '#E46420'}}>.</span>
					 	<span style={{marginLeft: '-2px', color: '#608B81'}}>. </span>
					 	Henderson
					</h1>
					<div style={titleStyle} className="headerTitle">
						<span style={{color: 'rgba(0,0,0,0.4)', fontSize: '0.8rem'}}>&lt; </span>
						{this.state.title}
						<span style={{color: 'rgba(0,0,0,0.4)', fontSize: '0.8rem'}}> &gt;</span>
					</div>
				</a>
			</header>
		)
	}
}

export default Header;
