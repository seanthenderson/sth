import React, { Component } from 'react';
import '../css/Contacts.css';

const contactStyle = {
	margin: '0 auto 30px',
}

const contactTypeStyle = {
	width: '25vw',
	height: '25vw',
	margin: '1vw',
	borderRadius: '100%',
	display: 'inline-block',
	cursor: 'pointer',
	transition: 'background-image 0.3s ease-in-out',
}

class ContactType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: '',
			link: '',
			color: ''
		}
	}

	render() {
		return (
			<a style={contactTypeStyle} href={this.props.link} target="_blank" image={this.props.image} color={this.props.color} className={`contact-type ${this.props.color}`}></a>
		);
	}
}

class Contact extends Component {
	render() {
		return (
			<section id="contacts" style={contactStyle}>
				<ContactType link="mailto:seanthenderson@gmail.com" color="green" />
				<ContactType link="https://twitter.com/SeanTHenderson" color="light-blue" />
				<ContactType link="https://www.linkedin.com/in/seanthenderson/" color="dark-blue" />
			</section>
		)
	}
}

export default Contact; 