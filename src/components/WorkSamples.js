import React, { Component } from 'react';
import '../css/WorkSamples.css';

class WorkSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'title',
			imageUrl: '',
			altText: 'Work sample photo',
			workLink: ''
		}
	}

	render() {
		return (
			<div className="work-sample">
				<img src={this.props.imageUrl} alt={this.props.altText} />
				<a href={this.props.workLink}>
					<div className="work-sample-cover">	
						<div className="work-sample-cover-text">
							<p>{this.props.title}</p>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

class WorkSamples extends Component {
	render() {
		return (
			<div id="work-samples">
				<WorkSample title="NMAAHC Breaking Ground" altText="This is an image of sample one" imageUrl="http://seanthenderson.com/images/nmaahc.jpg" workLink="https://www.smithsonianmag.com/smithsonian-institution/national-museum-african-american-history-and-culture-interactive-museum-tour/" />
			</div>
		);
	}
}

export default WorkSamples;