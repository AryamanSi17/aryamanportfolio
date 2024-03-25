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
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
