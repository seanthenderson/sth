import React, { Component } from 'react';
import '../css/About.css';

const aboutStyle = {
	width: '700px',
	maxWidth: '100%',
    margin: '0 auto 30px',
    display: 'none',
}

const headshotStyle = {
	width: '200px',
	height: '200px',
	margin: '0 35px 20px 0',
	borderRadius: '100%',
	textAlign: 'center',
	background: 'url("http://seanthenderson.com/images/headshotII.jpg") no-repeat center center',
	backgroundSize: 'cover',
	float: 'left',
	shapeOutside: 'circle()',
}

const aboutTextStyle = {
	width: 'auto',
	maxWidth: '600px',
	fontFamily: 'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif',
	color: '#3B5472',
	fontSize: '20px',
	lineHeight: '23px',
	textAlign: 'left',
	margin: '0 20px',
}

const aboutLinkStyle = {
	color: '#1291B5',
	transition: 'color .3s',
}

class About extends Component {
	render() {
		return (
			<section id="about" style={aboutStyle}>
				<div style={headshotStyle} id="headshot"></div>
				<p style={aboutTextStyle}>Hi! My name is Sean T. Henderson. I'm a designer and developer specializing in building high quality, performant and responsive websites, interactive graphics and applications on multiple CMS platforms. My work has appeared in various publications, including: Smithsonian Magazine, The Baltimore Sun, Deadspin, Long Reads and Air &amp; Space Magazine. Check out my <a href="http://www.linkedin.com/in/seanthenderson" target="_blank" rel="noopener noreferrer" style={aboutLinkStyle}>LinkedIn profile</a> to learn more about me.</p>
			</section>
		);	
	}
}

export default About;