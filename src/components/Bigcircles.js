import React, { Component } from 'react';
import '../css/Bigcircle.css';

class Bigcircle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			color: '#333'
		}
	}

	addToCircle(title) {
	    var title = this.state.title;
	    title.push(title);
	    this.setState({title: title});
	}

	circleColor(color) {
	    var color = this.state.color;
	    color.push(color);
	    this.setState({color: color});
	}

	render() {
		return (
			<div class="big-circle" id={this.props.color}>
				{this.props.title}
			</div>
		)
	}
}

class Bigcircles extends Component {
	render() {
		return (
			<div id="big-circles">
				<Bigcircle title="recent work" color="blue"/>
				<Bigcircle title="about" color="orange" />
				<Bigcircle title="contact" color="green" />
			</div>
		)
	}
}

export default Bigcircles;