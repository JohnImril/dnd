import { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	children?: string;
}

export const Button = ({ onClick, children }: IProps) => {
	return (
		<button className="button-xp landing__button" onClick={onClick}>
			<div className="button__inner">
				<div className="button__img-container">
					{["left", "middle", "right"].map((position) => (
						<div key={position} className={`button__img button__img--${position}`}>
							<div className="button__img__img button__img__img--bg"></div>
						</div>
					))}
				</div>
				<span className="button__text">{children}</span>
			</div>
		</button>
	);
};
