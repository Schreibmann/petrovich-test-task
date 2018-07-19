import React, { Component } from 'react';

class ProductCount extends Component {

  constructor(props) {
	  super(props);
	  this.state = { 
	  		unitCount: 1
	   	};
  }

  onIncreaseCount() {
  	this.setState({
  		unitCount: this.state.unitCount +1
  	}); 
  }

  onDecreaseCount() {
  	if (this.state.unitCount > 1) {
	  		this.setState({
	  			unitCount: this.state.unitCount -1
	  		}); 
  	}	
  }

  onAddCart() {
  	alert(`Вы добавили в корзину ${this.state.unitCount} ${this.props.unit} ${this.props.title}`);
  }

  render() {
    return (
	    <div className="product__wrapper">
	    	<div className="list--unit-desc">
		                <div className="unit--info">
		                    <div className="unit--desc-i"></div>
		                    <div className="unit--desc-t">
		                        <p>
		                            <span className="ng-binding">Продается упаковками:</span>
		                            <span className="unit--infoInn">
		                            	{`${this.state.unitCount} ${this.props.unit} = 
		                            	${(this.props.unitRatio *  this.state.unitCount/ this.props.unitRatioAlt).toString().substring(0,4)} ${this.props.unitAlt} `}
		                            </span>
		                        </p>
		                    </div>
		                </div>
		    </div>	
	        <div className="product_count_wrapper">
	            <div className="stepper">
	                <input className="product__count stepper-input" readOnly type="number" value={this.state.unitCount}/>
	                <span className="stepper-arrow up" onClick={() =>this.onIncreaseCount()}></span>
	                <span className="stepper-arrow down" onClick={() =>this.onDecreaseCount()}></span>                                            
	            </div>
	        </div>
	        <span className="btn btn_cart" data-url="/cart/" data-product-id={this.props.productId}
	        	onClick={() => this.onAddCart()}
	        >
	            <svg className=" ic_cart">
	               <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
	            </svg>
	            <span className="ng-binding">В корзину</span>
	        </span>
	    </div>
    )
  }
}

export default ProductCount;              