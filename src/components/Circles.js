import React, { Component } from 'react';
import '../css/Circles.css';

let x = 0;

class Circle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			color: '#333',
			animate: 'none',
			active: false
		}
		this.animateCircles = this.animateCircles.bind(this);
	}

	addToCircle(title) {
	    var titleText = this.state.title;
	    title.push(titleText);
	    this.setState({title: titleText});
	}

	circleColor(color) {
	    var colorStyle = this.state.color;
	    colorStyle.push(color);
	    this.setState({color: colorStyle});
	}

	animateCircles() {
		const circle = document.querySelectorAll('.circle');
		const circleContainer = document.querySelector('#circles-container');
		const headerTitle = document.querySelector('#headerTitle');
		const workSamples = document.querySelector('#work-samples');
		const aboutSection = document.querySelector('#about');
		const contactSection = document.querySelector('#contacts');

		if (x === 0) {
			circleContainer.classList.add('disappear');

			this.setState({active: true});

			setTimeout(function() {
				circleContainer.classList.remove('disappear');
				headerTitle.style.marginBottom = '10px';
				
				if (circle[0].classList.contains('active')) {
					workSamples.style.display = "block";
				} else if (circle[1].classList.contains('active')) {
					aboutSection.style.display = "block";
				} else if (circle[2].classList.contains('active')) {
					contactSection.style.display = "block";
				}

			}, 1000);

			setTimeout(function() {
				for (let i=0;i<circle.length;i++) {
					let circleNumber = 'circle' + i;
					circle[i].classList.add('rotate', circleNumber);
				} 
			}, 0);
			x++;
		}

		circle[0].addEventListener('click', function() {
			this.classList.add('active');
			circle[1].classList.remove('active');
			circle[2].classList.remove('active');
			workSamples.style.display = "block";
			aboutSection.style.display = "none";
			contactSection.style.display = "none";
		});
		circle[1].addEventListener('click', function() {
			this.classList.add('active');
			circle[0].classList.remove('active');
			circle[2].classList.remove('active');
			workSamples.style.display = "none";
			aboutSection.style.display = "block";
			contactSection.style.display = "none";
		});
		circle[2].addEventListener('click', function() {
			this.classList.add('active');
			circle[0].classList.remove('active');
			circle[1].classList.remove('active');
			workSamples.style.display = "none";
			aboutSection.style.display = "none";
			contactSection.style.display = "block";
		});
	}

	render() {
		return (
			<div id={this.props.color} className={`circle ${this.state.active ? 'active': null}`} onClick={this.animateCircles}>{this.props.title}</div>
		);
	}
}

class Circles extends Component {
	render() {
		return (
			<div id="circles-container" style={{whiteSpace: 'nowrap'}}>
				<Circle title="work" color="blue" />
				<Circle title="about" color="orange" />
				<Circle title="contact" color="green" />
			</div>
		);
	}
}

export default Circles;