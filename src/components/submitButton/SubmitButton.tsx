import React, { useState } from "react";
import "./SubmitButton.scss";

interface SubmitButtonProps {
	onPay: () => Promise<void>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPay }) => {
	const [isProcessing, setIsProcessing] = useState(false);

	const handleClick = async () => {
		setIsProcessing(true);

		try {
			await onPay();
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<button
			className="pay-button"
			disabled={isProcessing}
			type="submit"
			onClick={handleClick}
		>
			<div className="button-text">
				<span className={`pay-text ${isProcessing ? "fade-out" : ""}`}>
					Pay 299.99 UAH
				</span>

				<span className={`processing-text ${isProcessing ? "fade-in" : ""}`}>
					<img src="src/assets/loader.gif" alt="Loader" height="18px" />
					Processing payment
				</span>
			</div>
		</button>
	);
};

export default SubmitButton;
