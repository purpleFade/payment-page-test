import { ReactNode } from "react";
import './Tooltip.scss';

type Props = {
	content: string | ReactNode;
	children: ReactNode;
};

export default function Tooltip({ content, children }: Props) {
	return (
		<span className="tooltip">
			{children}
			<span className="tooltip-box" role="tooltip">
				{content}
			</span>
		</span>
	);
}
