import { Button } from "./components/Button/Button";
import RotatingCrystals from "./components/RotatingCrystals/RotatingCrystals";

import "./App.css";

const App = () => {
	const buttonLinks = [
		{ href: "https://foundry.thedirtysagestavern.com", label: "Play" },
		{ href: "https://map.thedirtysagestavern.com", label: "Map" },
	];

	const renderSVG = (id: string, d: string) => (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.077 71.72">
			<defs>
				<clipPath id={id} clipPathUnits="objectBoundingBox" transform="scale(0.007242335798, 0.0139431121)">
					<path style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#002AF9" }} d={d}></path>
				</clipPath>
			</defs>
		</svg>
	);

	const sides = ["left", "right"];

	return (
		<div className="app">
			<div className="landing">
				<div className="landing__wrapper-width">
					<div className="landing__wrapper-height">
						{sides.map((side) => (
							<div
								key={side}
								className={`landing__${side}-block`}
								style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
							>
								<div className={`landing__${side}-block__borders`}></div>
							</div>
						))}
						{sides.map((side) => (
							<div
								key={side}
								className={`landing__bottom-block landing__bottom-block--${side}`}
								style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
							>
								<div className="landing__bottom-block__mask-container">
									{renderSVG(
										`bottom-${side}-mask`,
										side === "left"
											? "M71.025,71.339h66.361V1.013H0.699v0C0.699,39.853,32.185,71.339,71.025,71.339z"
											: "M67.025,71.339H0.664V1.013H137.35v0C137.35,39.853,105.864,71.339,67.025,71.339z"
									)}
								</div>
								<div className="landing__bottom-block__inner">
									<div className={`landing__vignette-img landing__bottom--${side}__bg`}></div>
								</div>
								<div className="landing__bottom-block__borders"></div>
							</div>
						))}
						{sides.map((side) => (
							<div
								key={side}
								className={`landing__center-bar landing__center-bar--${side}`}
								style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
							></div>
						))}
						<div
							className="landing__center-corner landing__center-corner--left"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						></div>
						<div
							className="landing__center-block"
							style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						></div>
						<div
							className="landing__center-corner landing__center-corner--right"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						></div>
						<div className="landing__title-placed">
							<div className="row-button">
								{buttonLinks.map((button, index) => (
									<Button key={index} onClick={() => (window.location.href = button.href)}>
										{button.label}
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<RotatingCrystals />
		</div>
	);
};

export default App;
