import React, { Component } from "react";
import ProductCard from "../containers/ProductCard";
import { fetchProductsData } from "../actions/productsSectionActions";
import { connect } from "react-redux";

class ProductsSection extends Component {
  componentWillMount() {
    this.props.fetchProductsData();
    //alert('i will mount');
  }

  render() {
    const PRELOADER = this.props.isFetching ? (
      <h3>Fetching... pease, wait</h3>
    ) : (
      this.props.products.map((product, idx) => {
        return <ProductCard key={idx} cardId={idx} {...product} />;
      })
    );

    return (
      <div className="product__area">
        <div id="products_section">{PRELOADER}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.productsSection.isFetching,
  products: state.productsSection.products
});

export default connect(
  mapStateToProps,
  { fetchProductsData }
)(ProductsSection);
