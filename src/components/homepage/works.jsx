import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
							<div className="work-image">
								<FontAwesomeIcon icon={faBriefcase} />
							</div>
							<div className="work-title">VANCO (formerly CODEBUGGED)</div>
							<div className="work-subtitle">
								AI Application Engineer
							</div>
							<div className="work-duration">March 2025 - Present</div>
						</div>

						<div className="work">
							<div className="work-image">
								<FontAwesomeIcon icon={faBriefcase} />
							</div>
							<div className="work-title">SMPP Limited</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">June 2024 - Feb 2025</div>
						</div>
						<div className="work">
							<div className="work-image">
								<FontAwesomeIcon icon={faBriefcase} />
							</div>
							<div className="work-title">GlobalMed Academy</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">March 2023 - May 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
