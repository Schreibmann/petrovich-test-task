import React, { Component } from "react";
import ProductPrices from "../components/ProductPrices";
import ProductCount from "../components/ProductCount";

class ProductCard extends Component {
	render() {
		return (
			<div className={`products_page pg_${this.props.cardId}`}>
				<div className="product product_horizontal">
					<span className="product_code">{`Код: ${
						this.props.code
					}`}</span>
					<div className="product_status_tooltip_container">
						<span className="product_status">
							{this.props.isActive ? "В наличии" : ""}
						</span>
					</div>
					<div className="product_photo">
						<a href="#" className="url--link product__link">
							<img
								src={this.props.primaryImageUrl.replace(
									".jpg",
									"_220x220_1.jpg"
								)}
								alt="no img"
							/>
						</a>
					</div>
					<div className="product_description">
						<a href="#" className="product__link">
							{this.props.title}
						</a>
					</div>
					<div className="product_tags hidden-sm">
						<p>Могут понадобиться:</p>
						{this.props.assocProducts
							.split("\n")
							.map((tag, idx) => (
								<a key={idx} href="#" className="url--link">
									{tag}
								</a>
							))}
					</div>
					<ProductPrices {...this.props} />
					<ProductCount {...this.props} />
				</div>
			</div>
		);
	}
}

export default ProductCard;
