import React, { Component } from "react";

class ProductPrices extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUnitMain: false
		};
	}

	onChangeActiveUnit() {
		this.setState({
			activeUnitMain: !this.state.activeUnitMain
		});
	}

	onChangeUnitClick(unitActive) {
		if (!unitActive) {
			this.onChangeActiveUnit();
		}
	}

	render() {
		const activeUnitPrices = this.state.activeUnitMain
			? {
					priceRetail: this.props.priceRetail,
					priceGold: this.props.priceGold
			  }
			: {
					priceRetail: this.props.priceRetailAlt,
					priceGold: this.props.priceGoldAlt
			  };

		return (
			<div className="product__wrapper">
				<div className="product_units">
					<div className="unit--wrapper">
						<div
							className={`unit--select ${
								this.state.activeUnitMain
									? null
									: "unit--active"
							}`}
							onClick={() =>
								this.onChangeUnitClick(
									!this.state.activeUnitMain
								)
							}
						>
							<p className="ng-binding">{`За ${
								this.props.unitAlt
							}`}</p>
						</div>
						<div
							className={`unit--select ${
								this.state.activeUnitMain
									? "unit--active"
									: null
							}`}
							onClick={() =>
								this.onChangeUnitClick(
									this.state.activeUnitMain
								)
							}
						>
							<p className="ng-binding">{`За ${this.props.unitFull.replace(
								/.$/,
								"у"
							)}`}</p>
						</div>
					</div>
				</div>
				<p className="product_price_club_card">
					<span className="product_price_club_card_text">
						По карте<br />клуба
					</span>
					<span className="goldPrice">
						{activeUnitPrices.priceGold}
					</span>
					<span className="rouble__i black__i">
						<svg
							version="1.0"
							id="rouble__b"
							xmlns="http://www.w3.org/2000/svg"
							x="0"
							y="0"
							width="30px"
							height="22px"
							viewBox="0 0 50 50"
							enableBackground="new 0 0 50 50"
							xmlSpace="preserve"
						>
							<use
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xlinkHref="#rouble_black"
							/>
						</svg>
					</span>
				</p>
				<p className="product_price_default">
					<span className="retailPrice">
						{activeUnitPrices.priceRetail}
					</span>
					<span className="rouble__i black__i">
						<svg
							version="1.0"
							id="rouble__g"
							xmlns="http://www.w3.org/2000/svg"
							x="0"
							y="0"
							width="30px"
							height="22px"
							viewBox="0 0 50 50"
							enableBackground="new 0 0 50 50"
							xmlSpace="preserve"
						>
							<use
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xlinkHref="#rouble_gray"
							/>
						</svg>
					</span>
				</p>
				<div className="product_price_points">
					<p className="ng-binding">
						Можно купить за хз сколько баллов
					</p>
				</div>
				<div className="list--unit-padd" />
			</div>
		);
	}
}

export default ProductPrices;
