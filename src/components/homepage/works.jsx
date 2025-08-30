import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./codebugged_logo.png"
								alt="Rath Research"
								className="work-image"
							/>
							<div className="work-title">CODEBUGGED AI</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">March 2025 - Present</div>
						</div>
                        
						<div className="work">
							<img
								src="./nxtjobai.jpg"
								alt="NxtJobAI"
								className="work-image"
							/>
							<div className="work-title">NxtJobAI</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">Jan 2025 - Feb 2025</div>
						</div>
						<div className="work">
							<img
								src="./globalmed.png"
								alt="globalmed academy"
								className="work-image"
							/>
							<div className="work-title">GlobalMed Academy</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">March 2023 - Dec 2024</div>
						</div>
						<div className="work">
							<img
								src="./freelancing.png"
								alt="freelancing"
								className="work-image"
							/>
							<div className="work-title">Freelancing</div>
							<div className="work-subtitle">
								Developer
							</div>
							<div className="work-duration">Jan 2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
