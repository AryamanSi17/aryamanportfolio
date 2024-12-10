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
								src="./twitter.png"
								alt="Rath Research"
								className="work-image"
							/>
							<div className="work-title">Rath Research</div>
							<div className="work-subtitle">
								Associate Researcher
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./globalmed.png"
								alt="globalmed academy"
								className="work-image"
							/>
							<div className="work-title">GlobalMed Academy</div>
							<div className="work-subtitle">
								Web Administrator
							</div>
							<div className="work-duration">March 2023 - Dec 2024</div>
						</div>
						<div className="work">
							<img
								src="./codebugged_logo.png"
								alt="codebugged"
								className="work-image"
							/>
							<div className="work-title">Codebugged</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">Jan 2023 - March 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
