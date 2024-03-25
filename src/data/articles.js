import React from "react";

function article_1() {
	return {
		date: "7 August 2023",
		title: "Demystifying WebAssembly: The Future of Web Development",
		description:
			"As we navigate through the continually evolving landscape of web development, a new player emerges from the shadows — WebAssembly (Wasm). ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Aryaman",
			"Aryaman Sinha",
			
		],
		href:"https://medium.com/@aryamansi17/demystifying-webassembly-the-future-of-web-development-6725097ebf3d",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "18 July 2023",
		title: "The Future of Web Development: Progressive Web Apps (PWAs) and their Impact",
		description:
			"In the ever-evolving landscape of technology, web development has been a constant area of growth and innovation.",
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
