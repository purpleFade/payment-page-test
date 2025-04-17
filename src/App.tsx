import Form from './components/form/Form';
import { Icon } from "./components/icon";
import HomepageLayout from "./pages/homePage/HomePageLayout";

function App() {
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

					<Form />

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
