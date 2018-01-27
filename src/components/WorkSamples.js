import React, { Component } from 'react';
import styled from 'styled-components';

const WorkSamplesWrapper = styled.section`
	max-width: 1000px;
	margin: 0 auto 30px;
	text-align: center;
	display: none;
	@media (max-width: 1100px) {
		width: 100%;
	}
`;

const WorkSampleWrapper = styled.div`
	margin: 24px 11px 0 11px;
	display: inline-block;
	&:hover {
		box-shadow: 0px 0px 10px #3B5472;
	}
	@media (max-width: 1100px) {
		margin: 20px 10px 0 10px;
		box-shadow: 0 0 10px #999;
	}
`; 

const WorkSampleLink = styled.a`
	@media (max-width: 1100px) {
		position: relative;
	}
`;

const WorkSampleImage = styled.img`
	width: 300px;
	height: 200px;
	position: relative;
	z-index: 1;
`;

const WorkSampleCover = styled.div`
	width: 300px;
	height: 187px;
	position: relative;
	margin: -205px 0 0 0;
	padding: 15px 0 0 0;
	background: rgba(0,0,0,0.8);
	z-index: 2;
	transition: opacity .3s;
	&:hover {
		opacity: 0;
	}
	@media (max-width: 1100px) {
		height: 38px;
		position: absolute;
		bottom: 0;
		&:hover {
			opacity: 1;
		}
	}
`;

const WorkSampleTextWrapper = styled.div`
	width: 170px;
	height: 170px;
	margin: 0 auto;
	margin-top: -3px;
	border: solid 5px #DCDCDC;
	border-radius: 100%;
	color: #FFFFFF;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 23px;
	display: table;
	@media (max-width: 1100px) {
		width: auto;
		height: auto;
		border: none;
		font-size: 20px;
	}
`;

const WorkSampleText = styled.p`
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	line-height: 30px;
	padding: 0 20px 0 20px;
	@media (max-width: 1100px) {
		padding: 0 14px;
		line-height: 30px;
	}
`;

class WorkSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			imageUrl: '',
			altText: 'Work sample photo',
			workLink: '',
			hoverText: ''
		}
	}

	render() {
		return (
			<WorkSampleWrapper>
				<WorkSampleImage src={this.props.imageUrl} alt={this.props.altText} />
				<WorkSampleLink href={this.props.workLink} target="_blank">
					<WorkSampleCover title={this.props.hoverText}>	
						<WorkSampleTextWrapper className="work-sample-cover-text">
							<WorkSampleText>{this.props.title}</WorkSampleText>
						</WorkSampleTextWrapper>
					</WorkSampleCover>
				</WorkSampleLink>
			</WorkSampleWrapper>
		);
	}
}

class WorkSamples extends Component {
	render() {
		return (
			<WorkSamplesWrapper className="work-samples">
				<WorkSample title="NMAAHC Breaking Ground" altText="NMAAHC museum" imageUrl="http://seanthenderson.com/images/nmaahc.jpg" workLink="https://www.smithsonianmag.com/smithsonian-institution/national-museum-african-american-history-and-culture-interactive-museum-tour/" hoverText="Built an Interactive Tour of the National Museum of African American History and Culture for the museum opening." />
				<WorkSample title="Press Uncuffed" altText="screenshot of pressuncuffed.org imprisoned journalists page" imageUrl="http://seanthenderson.com/images/pressuncuffed.jpg" workLink="http://pressuncuffed.org/" hoverText="Press Uncuffed is a website focused on providing information on journalists who have been imprisoned for their role as reporters and investigators, as well as resources to help their cause. Built a custom WordPress theme with automated stats for duration of imprisonment and release info." />
				<WorkSample title="The Brothel Next Door" altText="screenshot of The Brothel Next Door homepage" imageUrl="http://seanthenderson.com/images/humantrafficking.png" workLink="http://cnsmaryland.org/human-trafficking/" hoverText="Designed and developed a website for Capital News Service that investigates the complex and disturbing issue of human trafficking, focusing on the Baltimore and Washington DC metropolitan region." />
				<WorkSample title="American Journalism Review" altText="screenshot of ajr.org homepage" imageUrl="http://seanthenderson.com/images/ajr-updated.png" workLink="http://ajr.org" hoverText="Designed and developed a fully responsive news website that focuses on new media technologies and innovations. Custom backend interface and database integration to accommodate a large group of potential users and user-restriction levels. Cross-browser testing, SEO optimization and implementation of enhanced security features." />
				<WorkSample title="Smithsonian Journeys" altText="screenshot of smithsonianjourneys.org homepage" imageUrl="http://seanthenderson.com/images/journeys.png" workLink="http://smithsonianjourneys.org" hoverText="Implemented new responsive design templates, built custom trip finder search tool." />
				<WorkSample title="Journey to the Center of Earth" altText="screenshot of Smithsonian's Journey to the Center of Earth" imageUrl="http://seanthenderson.com/images/journey-center-earth.png" workLink="http://www.smithsonianmag.com/science-nature/journey-to-the-center-of-earth/" hoverText="Built an interactive feature for Smithsonian.com describing in detail the Earth's layers. Created a tool to display depth and temperature using JavaScript as the user scrolls down through the Earth's layers." />
				<WorkSample title="Smithsonian Photo Contest" altText="screenshot of Smithsonian.com Photo Contest photo sample" imageUrl="http://seanthenderson.com/images/smithsonian-photo-contest.jpg" workLink="http://www.smithsonianmag.com/photocontest/" hoverText="Implemented new design for Smithsonian.com's popular Photo Contest application. Rebuilt the entire interface and created new search and sharing functionality." />
				<WorkSample title="Smithsonian Magazine" altText="screenshot of Smithsonian.com homepage" imageUrl="http://seanthenderson.com/images/smithmag.png" workLink="http://www.smithsonianmag.com/" hoverText="Frontend Developer for Smithsonian.com. Build special features and applications. Implemented new design." />
				<WorkSample title="The Art of Robert DeNiro Sr." altText="screenshot of DeNiro.si.edu artwork" imageUrl="http://seanthenderson.com/images/deniro.jpg" workLink="http://deniro.si.edu" hoverText="Built a responsive website powered with Django CMS." />
				<WorkSample title="Tween Tribune" altText="screenshot of TweenTribune.com homepage" imageUrl="http://seanthenderson.com/images/tweentribune.png" workLink="http://tweentribune.com/" hoverText="Rebuild of a popular educational website. Implemented new responsive design, built on Django framework." />
				<WorkSample title="The Other Redskins" altText="screenshot of The Other Redskins project landing page" imageUrl="http://seanthenderson.com/images/cns-redskins.png" workLink="http://cnsmaryland1.org/interactives/other-redskins/" hoverText="Built an interactive project detailing the controversy surrounding the Washington Redskins team name and how high schools around the country with the same name are dealing with the issues surrounding the name." />
				<WorkSample title="Sea Level Rise in Maryland" altText="screenshot of CNSMaryland's sea level rise interactive map" imageUrl="http://seanthenderson.com/images/cns-slr.png" workLink="http://cnsmaryland1.org/sealevelrise" hoverText="Built an interactive Google Map that displays the potential for water encroachment due to future sea level increases. Built and designed a custom WordPress site to house the project." />
				<WorkSample title="Unclaimed Property" altText="screenshot of Baltimore Sun's investigative special: Does the State of Maryland Owe You Money?" imageUrl="http://seanthenderson.com/images/balt-sun.png" workLink="http://data.baltimoresun.com/unclaimed-property" hoverText="Built a frontend interface to query a database of unclaimed property in the state of Maryland, so users can search themselves or others to see if the state owes them $$$." />
				<WorkSample title="Guns in the News" altText="screenshot of CNS Maryland's special interactive on guns in the news" imageUrl="http://seanthenderson.com/images/cns-guns.png" workLink="http://cnsmaryland1.org/2013/02/15/graphic-guns-in-the-news/" hoverText="Built an interactive graphic to accompany a text article discussing recent shootings and the guns that were used in each case." />
			</WorkSamplesWrapper>
		);
	}
}

export default WorkSamples;