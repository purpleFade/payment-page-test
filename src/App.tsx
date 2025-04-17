import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import classNames from "classnames";
import { Icon } from "./components/icon";
import SubmitButton from "./components/submitButton/SubmitButton";
import HomepageLayout from "./pages/homePage/HomePageLayout";
import Tooltip from "./components/tooltip/Tooltip";

type Inputs = {
	cardNumber: string;
	expirationDate: string;
	cvc: number;
};

function App() {
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
		<HomepageLayout>
			<main className="main">
				<div className="main-left">
					<div className="main-left__title">
						<Icon
							name="arrow"
							pack="payment"
							size={{ width: 14, height: 12 }}
						/>
						<h3>Checkout</h3>
					</div>

					<div className="main-left__info">
						<h1 className="main-left__info-title">5 days free</h1>
						<p className="main-left__info-description">
							then 299.99 UAH per 14 days
						</p>
					</div>

					<button className="apple-pay">
						<Icon
							name="apple-pay"
							pack="payment"
							size={{ width: 50, height: 20 }}
						/>
					</button>

					<div className="main-left__variation">
						<span className="main-left__variation-text">or pay with card</span>
					</div>

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
								<span className="form__item-error">
									{errors.cardNumber.message}
								</span>
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

									<Tooltip content={ cvcTooltip }>
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

					<p className="main-left__disclaimer">
						You'll have your <strong>Plan Pro during 1 year</strong>. After this
						period of time, your plan will be{" "}
						<strong>automatically renewed</strong> with its original price
						without any discounts applied.
					</p>
				</div>

				<div className="main-right">
					<h3 className="main-right__title">Order info {"<= 100 char."}</h3>

					<p className="main-right__subtitle">Description {"<= 400 char."}</p>

					<div className="main-right__description">
						<p className="main-right__description-title">
							Lamel Professional Smart Skin Compact Powder
						</p>
						<p className="main-right__description-subtitle">Пудра для лица</p>
					</div>

					<div className="main-right__additionalInfo">
						<p className="main-right__additionalInfo-title">5 days free</p>
						<p className="main-right__additionalInfo-subtitle">
							then 299.99 UAH per 14 days
						</p>
					</div>
				</div>
			</main>
		</HomepageLayout>
	);
}

export default App;
