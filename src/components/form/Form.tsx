import classNames from "classnames";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "../icon";
import SubmitButton from "../submitButton/SubmitButton";
import Tooltip from "../tooltip/Tooltip";
import "./Form.scss";

type Inputs = {
	cardNumber: string;
	expirationDate: string;
	cvc: number;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<Inputs>({
		mode: "onChange",
	});

	const [expirationValue, setExpirationValue] = useState<string>("");
	const [cardNumberValue, setCardNumberValue] = useState<string>("");

	const cvcTooltip =
		"The CVC (Card Verification Code) is the 3‑digit number on the back of your card, next to the signature strip.";

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				alert(`Success! Data: ${JSON.stringify(data)}`);
				resolve();
			}, 3000);
		});
	};

	const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let rawValue = e.target.value.replace(/\D/g, "");

		if (rawValue.length >= 3) {
			rawValue = rawValue.slice(0, 2) + "/" + rawValue.slice(2, 4);
		}

		setExpirationValue(rawValue);

		setValue("expirationDate", rawValue, { shouldValidate: true });
	};

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value.replace(/\D/g, "");

		const chunks = [];
		for (let i = 0; i < rawValue.length; i += 4) {
			chunks.push(rawValue.slice(i, i + 4));
		}

		const formattedValue = chunks.join(" ");

		setCardNumberValue(formattedValue);

		setValue("cardNumber", formattedValue, { shouldValidate: true });
	};
	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<div className="form__item">
				<label className="form__item-title" htmlFor="cardNumber">
					Card Number
				</label>
				<input
					className={classNames("form__item-input", {
						"--error": errors.cardNumber,
					})}
					placeholder="1234 1234 1234 1234"
					id="cardNumber"
					value={cardNumberValue}
					{...register("cardNumber", {
						required: "Card number is required",
						pattern: {
							value: /^(?:\d{4} ?){3}\d{4}$/,
							message: "Invalid credit card number format!",
						},
						maxLength: {
							value: 19,
							message: "Max length is 16 digits!",
						},
					})}
					onChange={handleCardNumberChange}
				/>

				{errors.cardNumber && (
					<span className="form__item-error">{errors.cardNumber.message}</span>
				)}
			</div>

			<div className="form__group">
				<div className="form__item">
					<label className="form__item-title" htmlFor="expirationDate">
						Expiration Date
					</label>
					<input
						className={classNames("form__item-input", {
							"--error": errors.expirationDate,
						})}
						placeholder="MM/YY"
						id="expirationDate"
						value={expirationValue}
						{...register("expirationDate", {
							required: "Expiration Date is required",
							pattern: {
								value: /^(0[1-2]|1[0-2])\/\d{2}$/,
								message: "Must be in MM/YY format (e.g. 12/28)",
							},
							maxLength: {
								value: 5,
								message: "Max length is 4 digits!",
							},
						})}
						onChange={handleExpirationChange}
					/>

					{errors.expirationDate && (
						<span className="form__item-error">
							{errors.expirationDate.message}
						</span>
					)}
				</div>

				<div className="form__item">
					<label className="form__item-title" htmlFor="cvc">
						CVC
					</label>

					<div className="form__item-inputWrapper --icon">
						<input
							className={classNames("form__item-input cvc", {
								"--error": errors.cvc,
							})}
							type="password"
							placeholder="***"
							id="cvc"
							{...register("cvc", {
								required: "CVC is required",
								maxLength: {
									value: 3,
									message: "Max length is 3 digits!",
								},
							})}
						/>

						<Tooltip content={cvcTooltip}>
							<Icon
								name="info"
								pack="payment"
								size={18}
								className="form__item-icon"
							/>
						</Tooltip>
					</div>

					{errors.cvc && (
						<span className="form__item-error">{errors.cvc.message}</span>
					)}
				</div>
			</div>

			<SubmitButton onPay={handleSubmit(onSubmit)} />
		</form>
	);
};

export default Form;
